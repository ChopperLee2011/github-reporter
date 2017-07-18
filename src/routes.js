import React from 'react'
import App from './containers/App'
import AuthContainer from './containers/AuthContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Routes = (props) => (
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={AuthContainer}/>
  </Router>
)

export default Routes

