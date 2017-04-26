import React from 'react'
import TimePicker from 'material-ui/TimePicker'

import FormInput from './FormInput'

const TimeInput = (props) => {
  const { label, ...rest } = props
  return (
    <FormInput label={label}>
      <TimePicker {...rest} />
    </FormInput>
  )
}

TimeInput.propTypes = {
  label: React.PropTypes.string,
}

export default TimeInput
