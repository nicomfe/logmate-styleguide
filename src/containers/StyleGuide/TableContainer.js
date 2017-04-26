import React from 'react'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import Table from '../../components/table/Table'

const TableContainer = () => {
  return (
    <StyleGuideContent
      title="Table"
      description={<small>Table for displaying list of drivers, violations, etc</small>}
    >
      <Table />
    </StyleGuideContent>
  )
}

export default TableContainer
