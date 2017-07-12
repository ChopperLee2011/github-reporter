import React  from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../reducers/issue'
import Issue from '../components/Issue'
import IssueList from '../components/IssueList'
import { fetchIssues } from '../actions'

class IssueContainer extends React.Component {
  render () {
    const {issues} = this.props
    console.log('this.props.issues', issues)
    return (
      <div>
        <button onClick={() => this.props.fetchIssues()}>get Issues</button>
        <IssueList>
          {issues.map((issue) =>
            <Issue issue={issue}/>
          )}
        </IssueList>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('mapStateToProps state', state)
  return {
    issues: getIssues(state.issue)
  }
}

export default connect(
  mapStateToProps,
  {fetchIssues}
)(IssueContainer)