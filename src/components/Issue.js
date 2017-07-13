import React from 'react'

export default class Issue extends React.Component {
  render () {
    const {issue} = this.props
    return (
      <div>
        <li>{issue.node.title}</li>
      </div>
    )
  }
}