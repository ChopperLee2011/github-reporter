import * as types from '../constants/action-type'
import github from '../api/github'

export function fetchIssues () {
  const issues = github.getIssues()
  return {
    type: types.FETCH_ISSUE,
    issues
  }
  // return dispatch => {
  // github.getIssues(issues => {
  //   dispatch(() => {
  //     return {
  //       type: types.FETCH_ISSUE,
  //       issues
  //     }
  //   })
  // })
  // }
}