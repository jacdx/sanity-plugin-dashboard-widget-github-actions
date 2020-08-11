export interface SiteWidgetOption {
  apiId: string
  name?: string
  title: string
  url?: string
  githubRepo: string
  githubRepoOwner: string
  githubToken: string
  eventType: string
  eventPayload?: string
}
export interface WidgetOptions {
  title?: string
  description?: string
  sites: SiteWidgetOption[]
}

export interface Site {
  id: string
  title: string
  name?: string
  url?: string
  githubToken: string
  githubRepo: string
  githubRepoOwner: string
  eventType: string
  eventPayload?: string
}

export interface Props {
  title?: string
  description?: string
  sites?: Site[]
  isLoading: boolean
  onDeploy: DeployAction
}

export type DeployAction = (site: Site) => void
