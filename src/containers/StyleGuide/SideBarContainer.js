import React from 'react'

import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import SideBar from '../../components/bar/SideBar'

const SideBarContainer = () => {
  return (
    <StyleGuideContent
      title="Side Bar"
      description={<small>Here we can divide the items which are related. Icons can be found
        here <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer"> Google Icons</a>
      </small>}
    >
      <SideBar />
    </StyleGuideContent>
  )
}

export default SideBarContainer
