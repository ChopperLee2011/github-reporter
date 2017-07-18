import * as types from '../constants/action-type'
import github from '../api/github'

function requestIssues () {
  return {
    type: types.REQUEST_ISSUES
  }
}

function requestRepos () {
  return {
    type: types.REQUEST_REPOS
  }
}

function receiveRepos (repos) {
  return {
    type: types.RECEIVE_REPOS,
    repos
  }
}

function receiveIssues (issues) {
  return {
    type: types.RECEIVE_ISSUES,
    issues
  }
}

export function fetchIssues () {
  return dispatch => {
    dispatch(requestIssues())
    return github.getIssues()
      .then(issues => dispatch(receiveIssues(issues)))
  }
}

export function fetchRepos () {
  return dispatch => {
    dispatch(requestRepos())
    return github.getRepos()
      .then(issues => dispatch(receiveRepos(issues)))
  }
}

export function signIn () {
  return dispatch => {
    dispatch(requestAccessToken())
    return github.signIn()
      .then(accessToken => dispatch(receiveAccessToken(accessToken)))
  }
}

export function requestAccessToken () {
  return {
    type: types.REQUEST_ACCESSTOKEN
  }
}

export function receiveAccessToken (token) {
  return {
    type: types.RECEIVE_ACCESSTOKEN,
    token
  }
}