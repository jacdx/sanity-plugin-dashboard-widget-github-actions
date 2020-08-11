import React from 'react'
import { streamingComponent } from 'react-props-stream'
import { map, switchMap } from 'rxjs/operators'
import { WidgetOptions } from './types'
import { props$ } from './props'
import GithubActionsWidget from './components/GithubActionsWidget'

export default streamingComponent<WidgetOptions>(options$ =>
  options$.pipe(
    switchMap(options =>
      props$(options).pipe(
        map(props => {
          return <GithubActionsWidget {...props} />
        })
      )
    )
  )
)
