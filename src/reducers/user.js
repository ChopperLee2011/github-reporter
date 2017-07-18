import { SIGNIN_USER } from '../constants/action-type'

export default function user (state = [], action) {
  switch (action.type) {
    case SIGNIN_USER:
      state.user = action.user
      return state
    default:
      return state
  }
}

export function signIn (state = []) {
  return state
}