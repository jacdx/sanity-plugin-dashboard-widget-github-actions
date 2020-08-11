import React from 'react'
import AnchorButton from 'part:@sanity/components/buttons/anchor'
import styles from './GithubActionsWidget.css'
import { Props } from '../types'
import SiteList from './SiteList'

export default class GithubActionsWidget extends React.Component<Props> {
  render() {
    const { title, description, isLoading, sites, onDeploy } = this.props

    console.log('this.props', this.props);

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <div className={styles.content}>
          {description && (
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <SiteList isLoading={isLoading} onDeploy={onDeploy} sites={sites} />
        </div>
      </div>
    )
  }
}
