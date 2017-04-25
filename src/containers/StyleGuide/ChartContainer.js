import React from 'react'

import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import BarChart from '../../components/chart/BarChart'

const ChartContainer = () => {
  const colors = {
    drivingColor: '#2ecc71',
    otherDutyColor: '#e67e22',
    onBreakColor: '#e74c3c',
  }

  return (
    <StyleGuideContent
      title="Charts"
      description={
        <small>
          Using library: <a href="https://github.com/gor181/react-chartjs-2" target="_blank" rel="noopener noreferrer">React-chartjs-2</a>
        </small>
      }
    >
      <BarChart
        data={{
          labels: ['6 April', '7 April', '8 April', '9 April', '10 April', '11 April', '12 April'],
          datasets: [
            {
              label: 'Driving',
              backgroundColor: colors.drivingColor,
              borderColor: colors.drivingColor,
              borderWidth: 1,
              hoverBackgroundColor: colors.drivingColor,
              hoverBorderColor: colors.drivingColor,
              data: [12, 9, 10, 11, 6, 5, 4],
            },
            {
              label: 'Other duty',
              backgroundColor: colors.otherDutyColor,
              borderColor: colors.otherDutyColor,
              borderWidth: 1,
              hoverBackgroundColor: colors.otherDutyColor,
              hoverBorderColor: colors.otherDutyColor,
              data: [1, 5, 2, 3, 4, 1, 5],
            },
            {
              label: 'on break',
              backgroundColor: colors.onBreakColor,
              borderColor: colors.onBreakColor,
              borderWidth: 1,
              hoverBackgroundColor: colors.onBreakColor,
              hoverBorderColor: colors.onBreakColor,
              data: [5, 6, 4, 3, 2, 1, 1],
            },
          ],
        }}
      />
    </StyleGuideContent>
  )
}

export default ChartContainer
