import { RECEIVE_ISSUES } from '../constants/action-type'

export default function issue (state = [], action) {
  switch (action.type) {
    case RECEIVE_ISSUES:
      state = action.issues.data.user.issues.edges
      return state
    default:
      return state
  }
}

export function getIssues (state = []) {
  return state
}