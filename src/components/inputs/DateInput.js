import React from 'react'
import DatePicker from 'material-ui/DatePicker'

import FormInput from './FormInput'

const DateInput = (props) => {
  const { label, ...rest } = props
  return (
    <FormInput label={label}>
      <DatePicker {...rest} />
    </FormInput>
  )
}

DateInput.propTypes = {
  label: React.PropTypes.string,
}

export default DateInput
