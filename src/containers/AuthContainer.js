import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { Col } from 'react-bootstrap'
import { signIn } from '../reducers/user'

class AuthContainer extends React.Component {
  render () {
    // let popWin = window.open(`https://github.com/login/oauth/authorize?client_id=${client_id}`,
    //   null, "width=600,height=400")
    // let checkCode = () => {
    //   try {
    //     let query = popWin.location.search.substring(1)
    //
    //     code = querystring.parse(query).code
    //
    //     if ((typeof code) !== 'undefined') {
    //       clearInterval(intervalId)
    //       popWin.close()
    //       eventEmitter.emit('code', code);
    //     }
    //   } catch (err) {}
    // }
    return (
      <div>
        <Col xs={4} xsOffset={4} onClick={() => this.props.fetchIssues()}>
          < Login/>
        </Col>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: signIn(state.user)
  }
}

export default connect(
  mapStateToProps,
  {signIn}
)(AuthContainer)