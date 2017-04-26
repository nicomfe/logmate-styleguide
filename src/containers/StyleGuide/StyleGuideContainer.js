import React from 'react'
import AppBar from 'material-ui/AppBar'

// components
import RaisedButtonsContainer from './RaisedButtonsContainer'
import FlatButtonsContainer from './FlatButtonsContainer'
import SideBarContainer from './SideBarContainer'
import PopOverMenuContainer from './PopOverMenuContainer'
import TableContainer from './TableContainer'
import ChartContainer from './ChartContainer'
import FormContainer from './FormContainer'
import NotificationContainer from './NotificationContainer'

class IndexContainer extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Logmate Styleguide"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <RaisedButtonsContainer />
        <FlatButtonsContainer />
        <SideBarContainer />
        <PopOverMenuContainer />
        <TableContainer />
        <ChartContainer />
        <FormContainer />
        <NotificationContainer />
      </div>
    )
  }
}

IndexContainer.propTypes = {}

export default IndexContainer
