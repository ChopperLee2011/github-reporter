import React from 'react'

export default class IssueList extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
