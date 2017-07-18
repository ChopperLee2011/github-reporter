import React from 'react'
import { Panel } from 'react-bootstrap'

export default class RepoList extends React.Component {
  render () {
    return (
      <Panel header="Repo">
        {this.props.children}
      </Panel>
    )
  }
}
