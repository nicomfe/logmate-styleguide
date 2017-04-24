import React from 'react'
import { Bar as BarChart } from 'react-chartjs-2'

const CustomBarChart = (props) => {
  const { data } = props
  return (
    <BarChart
      data={data}
      options={{
        maintainAspectRatio: false,
      }}
    />
  )
}

CustomBarChart.propTypes = {
  data: React.PropTypes.object.isRequired,
}

export default CustomBarChart
