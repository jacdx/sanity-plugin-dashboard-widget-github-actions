# Sanity Dashboard Widget: Github Actions

Sanity Studio Dashboard Widget for triggering Github Actions. Implementation is very basic, sending a request to Github via their webhook API, which doesn't make it easy to check status. If request fails, you'll see an error. If successful, it's silent.

TODO: 
1. User feedback on request status per SiteItem  
2. Figure out how to track status of the Action, so we can see when the Action is complete

PRs welcome

## Installing

### Install the dashboard plugin
To get dashboard support in Sanity Studio in general:

`sanity install @sanity/dashboard`

### Install the Github Actions widget plugin

`sanity install dashboard-widget-github-actions`

## Configuring

1. Implement your own dashboardConfig. In your `sanity.json` file, append the following line to the `parts` array:

  ```json
  {
    "implements": "part:@sanity/dashboard/config",
    "path": "src/dashboardConfig.js"
  }
  ```

2. Create the file `src/dashboardConfig.js` and include the `github-actions` widget config like this:

  ```js
  export default {
    widgets: [
        {
        name: 'github-actions',
        options: {
        title: 'My Github Actions deploys',
        sites: [
            {
                title: 'Staging',
                githubRepo: 'myrepo',
                githubRepoOwner: 'myrepoowner',
                githubToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                eventType: 'deploy-web-staging',
                url: 'https://staging.yoursite.com'
            },
            {
                title: 'Production',
                githubRepo: 'myrepo',
                githubRepoOwner: 'myrepoowner',
                githubToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                eventType: 'deploy-web-production',
                url: 'https://www.yoursite.com'
            },
          ]
        }
      }
    ]
  }
  ```
### Widget options
`title` - Override the widget default title

`sites[]` - Your Github Actions sites to show deploys for
  - `title` - Site title
  - `githubRepo` - Name of the Github repo that contains the github action
  - `githubRepoOwner` - Name of the Github repo owner 
  - `githubToken` - Github personal acces**s token, with `repo` privileges ([Docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)) 
  - `eventType` - Event type, specified in the `repository_dispatch` block of your Github Action workflow file. Example below.
  - `eventPayload` - JSON string event payload. If specified, it will be passed to the Github Action event  
  

## Github Action workflow: event type example
```yaml
on:
  repository_dispatch:
    types: deploy-web-staging
```  
  
  
## Developing on this module

To simulate using your development version as a real module inside a studio, you can do the following:

* Run `npm install && npm link` from the root of this repository.
* Run `npm run watch` to start developing and build the module when changes are made.

#### Displaying your development version inside a studio

**With the mono-repo's `test-studio`:**

  * Bootstrap the monorepo: `npm run bootstrap`
  * Add `sanity-plugin-dashboard-widget-github-actions` with the current version number to `package.json` in the `test-studio` root folder (but don't run `npm install` afterwards)
  * Run `npm link sanity-plugin-dashboard-widget-github-actions` inside the mono-repo's root.
  * Restart the `test-studio`

**With a regular Sanity Studio:**
  * Run `npm install`
  * Add `sanity-plugin-dashboard-widget-github-actions` with the current version number to `package.json`.
  * Run `npm link sanity-plugin-dashboard-widget-github-actions`
  * Start the studio

When you are done and have published your new version, you can run `npm unlink` inside this repo, and `npm unlink sanity-plugin-dashboard-widget-github-actions` inside the mono-repo or studio to get back to the normal state. Then run `npm run bootstrap` for the mono-repo or `npm install` inside the regular studio to use the published version.
