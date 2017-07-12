import { authStatereducer } from 'redux-auth'
import { combineReducers } from 'redux'

function user (state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  auth: authStatereducer,
  user
})