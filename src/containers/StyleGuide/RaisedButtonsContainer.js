import React from 'react'
import jsxToString from 'jsx-to-string'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import { PrimaryButton, SecondaryButton } from '../../components/buttons'

const RaisedButtonsContainer = () => {
  return (
    <StyleGuideContent
      title="Raised Buttons"
      description={<small>Raised buttons (for search, add, etc.)</small>}
      sourceCode={sourceCode}
    >
      <PrimaryButton label="Primary" />
      <SecondaryButton label="Secondary" />
      <PrimaryButton label="Disabled" disabled />
    </StyleGuideContent>
  )
}

const sourceCode = `import { PrimaryButton, SecondaryButton } from '/components/buttons'\n
${jsxToString(
  <div>
    <PrimaryButton label="Primary" />
    <SecondaryButton label="Secondary" />
    <PrimaryButton label="Disabled" disabled />
  </div>
)}`
export default RaisedButtonsContainer
