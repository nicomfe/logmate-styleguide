import React from 'react'
import jsxToString from 'jsx-to-string'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import { IconExitButton } from '../../components/buttons'

const FlatButtonsContainer = () => {
  return (
    <StyleGuideContent
      title="Flat buttons"
      description={<div>
        <small>
          Flat with icons (sign out button, etc). List with all the icons in
          here <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">
            Google Icons
          </a>
        </small>
        <br />
        <small>
          {'All custom flat buttons are created in "components/buttons/index.js"'}
        </small>
      </div>}
      sourceCode={sourceCode}
    >
      <IconExitButton label="Sign out" />
    </StyleGuideContent>
  )
}

const sourceCode = `import { IconExitButton } from '/components/buttons'\n
${jsxToString(
  <div>
    <IconExitButton label="Sign out" />
  </div>
)}`

export default FlatButtonsContainer
