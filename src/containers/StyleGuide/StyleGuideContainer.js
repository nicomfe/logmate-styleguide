import React from 'react'

// components
import Menu from '../../components/menu/Menu'
import RaisedButtonsContainer from './RaisedButtonsContainer'
import FlatButtonsContainer from './FlatButtonsContainer'
import SideBarContainer from './SideBarContainer'
import PopOverMenuContainer from './PopOverMenuContainer'
import TableContainer from './TableContainer'
import ChartContainer from './ChartContainer'
import FormContainer from './FormContainer'

const IndexContainer = () => {
  return (
    <div>
      <Menu />
      <RaisedButtonsContainer />
      <FlatButtonsContainer />
      <SideBarContainer />
      <PopOverMenuContainer />
      <TableContainer />
      <ChartContainer />
      <FormContainer />
    </div>
  )
}

IndexContainer.propTypes = {}

export default IndexContainer
