import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

import styles from './styles.scss'

const CustomTable = () => {
  return (
    <Table>
      <TableHeader className={styles.tableHeader}>
        <TableRow>
          <TableHeaderColumn>Driver</TableHeaderColumn>
          <TableHeaderColumn>CVIU</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Requested</TableHeaderColumn>
          <TableHeaderColumn>Sent</TableHeaderColumn>
          <TableHeaderColumn>Started before </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>Aaron DALE</TableRowColumn>
          <TableRowColumn>1111</TableRowColumn>
          <TableRowColumn>aaron@aaron.com</TableRowColumn>
          <TableRowColumn>DDDDD</TableRowColumn>
          <TableRowColumn>18 Apr 2017 15:30</TableRowColumn>
          <TableRowColumn>15 Apr 2017 15:30</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Paul ELLIOTT</TableRowColumn>
          <TableRowColumn>0000</TableRowColumn>
          <TableRowColumn>paul@paul.com</TableRowColumn>
          <TableRowColumn>CCCCC</TableRowColumn>
          <TableRowColumn>21 Apr 2017 15:30</TableRowColumn>
          <TableRowColumn>20 Apr 2017 15:30</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Aaron DALE</TableRowColumn>
          <TableRowColumn>1111</TableRowColumn>
          <TableRowColumn>aaron@aaron.com</TableRowColumn>
          <TableRowColumn>DDDDD</TableRowColumn>
          <TableRowColumn>18 Apr 2017 15:30</TableRowColumn>
          <TableRowColumn>15 Apr 2017 15:30</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default CustomTable
