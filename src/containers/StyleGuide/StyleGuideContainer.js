import React from 'react'

// components
import { PrimaryButton, SecondaryButton, IconExitButton } from '../../components/buttons'
import SideBar from '../../components/bar/SideBar'
import Table from '../../components/table/Table'
import Menu from '../../components/menu/Menu'
import PopOverMenu from '../../components/menu/PopOverMenu'
import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import BarChart from '../../components/chart/BarChart'

const IndexContainer = () => {
  const colors = {
    drivingColor: '#2ecc71',
    otherDutyColor: '#e67e22',
    onBreakColor: '#e74c3c',
  }
  return (
    <div>
      <Menu />
      <StyleGuideContent
        title="Raised Buttons"
        description={<small>Raised buttons (for search, add, etc.)</small>}
      >
        <PrimaryButton label="Primary" />
        <SecondaryButton label="Secondary" />
        <PrimaryButton label="Disabled" disabled />
      </StyleGuideContent>

      <StyleGuideContent
        title="Flat buttons"
        description={<small>
          Flat with icons (sign out button, etc). List with all the icons in
          here <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">
            Google Icons
          </a>
        </small>}
      >
        <IconExitButton label="Sign out" />
      </StyleGuideContent>

      <StyleGuideContent
        title="Side Bar"
        description={<small>Here we can divide the items which are related. Icons can be found
          here <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer"> Google Icons</a>
        </small>}
      >
        <SideBar />
      </StyleGuideContent>

      <StyleGuideContent
        title="Pop over menu"
        description={<p><small>Pop over menu for top bar menu items</small></p>}
      >
        <PopOverMenu />
      </StyleGuideContent>

      <StyleGuideContent
        title="Table"
        description={<small>This table can replaced all the tables on the admin sites</small>}
      >
        <Table />
      </StyleGuideContent>
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
    </div>
  )
}

IndexContainer.propTypes = {}

export default IndexContainer
