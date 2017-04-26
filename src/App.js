import React from 'react'
import { Router } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import routes from './routes'
import theme from './base/materialUiTheme'

// We can't use pure function here because in that case hot reloading won't work
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router routes={routes} />
      </MuiThemeProvider>
    )
  }
}

export default App
