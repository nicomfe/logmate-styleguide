import React from 'react'

import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import Table from '../../components/table/Table'

const TableContainer = () => {
  return (
    <StyleGuideContent
      title="Table"
      description={<small>This table can replaced all the tables on the admin sites</small>}
    >
      <Table />
    </StyleGuideContent>
  )
}

export default TableContainer
