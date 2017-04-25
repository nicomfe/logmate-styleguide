import React from 'react'

import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import PopOverMenu from '../../components/menu/PopOverMenu'

const PopOverMenuContainer = () => {
  return (
    <StyleGuideContent
      title="Pop over menu"
      description={<p><small>Pop over menu for top bar menu items</small></p>}
    >
      <PopOverMenu />
    </StyleGuideContent>
  )
}

export default PopOverMenuContainer
