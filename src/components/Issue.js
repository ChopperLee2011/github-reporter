import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

export default class Issue extends React.Component {
  render () {
    const {issue} = this.props
    return (
      <ListGroupItem>{issue.node.title}</ListGroupItem>
    )
  }
}