import React  from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import IssueList from '../components/IssueList'
import RepoList from '../components/RepoList'
import Issue from '../components/Issue'
import Repo from '../components/Repo'
import { fetchIssues, fetchRepos } from '../actions'
import { getIssues } from '../reducers/issue'
import { getRepos } from '../reducers/repo'

class MainContainer extends React.Component {
  render () {
    const {issues, repos} = this.props
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <RepoList>
                {repos.map((repo) =>
                  <Repo
                    key={repo.node.id}
                    repo={repo}/>
                )}
              </RepoList>
            </Col>
            <Col xs={6} md={6}>
              <button onClick={() => this.props.fetchIssues() && this.props.fetchRepos()}>get Issues</button>
              <IssueList>
                {issues.map((issue) =>
                  <Issue
                    key={issue.node.id}
                    issue={issue}/>
                )}
              </IssueList>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    issues: getIssues(state.issue),
    repos: getRepos(state.repo)
  }
}

export default connect(
  mapStateToProps,
  {fetchIssues, fetchRepos}
)(MainContainer)