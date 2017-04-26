import React from 'react'
import TextField from 'material-ui/TextField'

import FormInput from './FormInput'

const TextInput = (props) => {
  const { label, ...rest } = props
  return (
    <FormInput label={label}>
      <TextField {...rest} />
    </FormInput>
  )
}

TextInput.propTypes = {
  label: React.PropTypes.string,
}

export default TextInput
