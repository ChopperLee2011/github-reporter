import { FETCH_ISSUE } from '../constants/action-type'

export default function issue (state = [], action) {
  console.log('action', action)
  switch (action.type) {
    case FETCH_ISSUE:
      state = action.issues
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