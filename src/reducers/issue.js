import { RECEIVE_ISSUES } from '../constants/action-type'

export default function issue (state = [], action) {
  console.log('action', action)
  switch (action.type) {
    case RECEIVE_ISSUES:
      state = action.issues.data.repository.issues.edges
      console.log('state', state)
      return state
    default:
      return state
  }
}

export function getIssues (state = []) {
  console.log('state.issues', state)
  return state
}