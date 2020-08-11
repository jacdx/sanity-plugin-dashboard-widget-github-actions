import GithubActionsWidget from '../src/components/GithubActionsWidget'

describe('GithubActionsWidget', () => {
  it('GithubActionsWidget is instantiable', () => {
    expect(
      new GithubActionsWidget({
        title: 'Deployz',
        sites: [
          {
            id: '123',
            name: 'Foobar',
            githubRepo: 'abcd',
            githubRepoOwner: 'abcd',
            githubToken: 'abcd',
            eventType: 'abcd'
          }
        ],
        isLoading: false,
        onDeploy: () => void 0
      })
    ).toBeInstanceOf(GithubActionsWidget)
  })
})
