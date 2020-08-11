import { of } from 'rxjs'
import { map } from 'rxjs/operators'
import { statusCodeRequest } from '../http/statusCodeRequest'
import { Site } from '../types'

interface Deployment {
  id: string
}

export function deploy(site: Site) {
  let body = { event_type: site.eventType, client_payload: '' }
  if (site.eventPayload) {
    body.client_payload = site.eventPayload
  } else {
    delete body.client_payload
  }

  const headers = new Headers()
  headers.set('Authorization', 'Bearer ' + site.githubToken)
  return statusCodeRequest(
    `https://api.github.com/repos/${site.githubRepoOwner}/${site.githubRepo}/dispatches`,
    {
      body: JSON.stringify(body),
      headers: headers,
      method: 'POST'
    }
  ).pipe(map(result => ({ result, site })))
}
