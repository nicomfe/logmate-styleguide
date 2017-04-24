import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './base/styleguide.scss'

const rootEl = document.getElementById('app')
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
