import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import { TextInput, DateInput, TimeInput, SelectInput } from '../../components/inputs'

const FormContainer = () => {
  return (
    <StyleGuideContent
      title="Form"
      description={<p><small>Inputs to be used in forms.</small></p>}
    >
      <h4>Text Inputs</h4>
      <div>
        <TextInput label="Email" hintText="Error example" errorText="This field is required" /><br />
        <TextInput label="First name" /><br />
      </div>
      <h4>Date pickers</h4>
      <TimeInput label="Start time" hintText="12hr format" />
      <TimeInput format="24hr" label="End time" hintText="24hr format" />
      <DateInput label="Start date" mode="landscape" hintText="Calendar" />
      <h4>Dropdowns</h4>
      <div>
        <SelectInput label="Select frequency" value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectInput>
      </div>
      <h4>Checkboxes</h4>
      <Checkbox label="Simple" />
      <Checkbox
        checkedIcon={<Visibility />}
        uncheckedIcon={<VisibilityOff />}
        label="Custom icon"
      />
    </StyleGuideContent>
  )
}

export default FormContainer
