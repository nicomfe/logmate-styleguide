import React from 'react'
import TextField from 'material-ui/TextField'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'

const FormContainer = () => {
  return (
    <StyleGuideContent
      title="Form"
      description={<p><small>Form example, where we can see the style for inputs and errors</small></p>}
    >
      <h4>Text Inputs</h4>
      <div>
        <TextField hintText="Email" errorText="This field is required" /><br />
        <TextField hintText="First name" /><br />
        <TextField hintText="Family name" /><br />
      </div>
      <h4>Date pickers</h4>
      <TimePicker hintText="Time picker 12hr Format" />
      <TimePicker format="24hr" hintText="Time picker 24hr Format" />
      <DatePicker hintText="Full calendar" mode="landscape" />
      <h4>Dropdowns</h4>
      <div>
        <SelectField floatingLabelText="Select frequency" value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
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
