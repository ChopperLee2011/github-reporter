import * as types from '../constants/action-type'
import github from '../api/github'

function requestIssues () {
  return {
    type: types.REQUEST_ISSUES
  }
}
function receiveIssues (issues) {
  console.log('issues', issues)
  return {
    type: types.RECEIVE_ISSUES,
    issues
  }
}
export function fetchIssues () {
  // const issues = github.getIssues()
  // return {
  //   type: types.FETCH_ISSUE,
  //   issues
  // }
  return dispatch => {
    dispatch(requestIssues())
    return github.getIssues()
      .then(issues => dispatch(receiveIssues(issues)))
  }
}