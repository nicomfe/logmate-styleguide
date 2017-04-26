import React from 'react'
import SelectField from 'material-ui/SelectField'

import FormInput from './FormInput'

const SelectInput = (props) => {
  const { label, children, ...rest } = props
  return (
    <FormInput label={label}>
      <SelectField {...rest}>
        {children}
      </SelectField>
    </FormInput>
  )
}

SelectInput.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.array,
}

export default SelectInput
