import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import issue from './issue'
import repo from './repo'

const rootReducer = combineReducers({
  user,
  issue,
  repo,
  routing: routerReducer
})

export default rootReducer