import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

// components
import SideBar from '../../components/bar/SideBar'
// styles
import baseStyles from '../../base/base.scss'

const SideBarContainer = () => {
  return (
    <Paper className={baseStyles.container} zDepth={2}>
      <p>
        <h2>Side Bar</h2>
        <p><small>Here we can divide the items which are related. Icons can be found
          here <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer"> Google Icons</a>
        </small></p>
        <Divider />
        <SideBar />
      </p>
    </Paper>
  )
}

export default SideBarContainer
