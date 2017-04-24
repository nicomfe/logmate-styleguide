import React from 'react'

// components
import { PrimaryButton, SecondaryButton, IconExitButton } from '../../components/buttons'
import SideBar from '../../components/bar/SideBar'
import Table from '../../components/table/Table'
import Menu from '../../components/menu/Menu'
import PopOverMenu from '../../components/menu/PopOverMenu'
import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'

const IndexContainer = () => (
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
  </div>
)

IndexContainer.propTypes = {}

export default IndexContainer
