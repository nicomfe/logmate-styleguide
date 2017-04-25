import React from 'react'

import StyleGuideContent from '../../components/StyleGuide/StyleGuideContent'
import { PrimaryButton, SecondaryButton } from '../../components/buttons'

const RaisedButtonsContainer = () => {
  return (
    <StyleGuideContent
      title="Raised Buttons"
      description={<small>Raised buttons (for search, add, etc.)</small>}
    >
      <PrimaryButton label="Primary" />
      <SecondaryButton label="Secondary" />
      <PrimaryButton label="Disabled" disabled />
    </StyleGuideContent>
  )
}

export default RaisedButtonsContainer
