import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

// components
import Table from '../../components/table/Table'
// styles
import baseStyles from '../../base/base.scss'

const SideBarContainer = () => {
  return (
    <Paper className={baseStyles.container} zDepth={2}>
      <p>
        <h2>Table</h2>
        <p>
          <small>
            This table can replaced all the tables on the admin sites
          </small>
        </p>
        <Divider />
        <Table />
      </p>
    </Paper>
  )
}

export default SideBarContainer
