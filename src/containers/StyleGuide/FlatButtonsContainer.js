import React from 'react'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import { IconExitButton } from '../../components/buttons'

const FlatButtonsContainer = () => {
  return (
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
  )
}

export default FlatButtonsContainer
