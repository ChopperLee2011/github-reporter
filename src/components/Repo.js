import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

export default class Repo extends React.Component {
  render () {
    const {repo} = this.props
    return (
      <ListGroupItem>{repo.node.name}</ListGroupItem>
    )
  }
}