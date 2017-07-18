import React from 'react'
import { Panel } from 'react-bootstrap'

export default class IssueList extends React.Component {
  render () {
    return (
      <Panel header="Issues">{this.props.children}</Panel>
    )
  }
}
