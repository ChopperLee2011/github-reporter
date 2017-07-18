import { RECEIVE_REPOS } from '../constants/action-type'

export default function issue (state = [], action) {
  switch (action.type) {
    case RECEIVE_REPOS:
      state = action.repos.data.repositoryOwner.repositories.edges
      return state
    default:
      return state
  }
}

export function getRepos (state = []) {
  return state
}