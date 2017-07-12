import React from 'react'
import SignInContainer from './sign-in'
import IssueContainer from './IssueContainer'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <h2>Github Report</h2>
        <hr/>
        <SignInContainer/>
        <IssueContainer />
      </div>
    )
  }
}

