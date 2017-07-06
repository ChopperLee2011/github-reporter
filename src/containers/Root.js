import React from 'react'
import PropTypes from 'prop-types'
import { Provider} from 'react-redux'
import DevTools from './DevTools'
import { Router} from 'react-router'

import routes from '../routes'

const Root = ({ store, history}) => {
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
            <DevTools />
        </div>
    </Provider>
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: Proptypes.object.isRequired
}

export default Root