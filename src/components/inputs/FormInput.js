import React from 'react'

import styles from './inputs.scss'

const FormInput = (props) => {
  const { label, children } = props
  return (
    <div className={styles.formGroup}>
      <small>{label}</small>
      {children}
    </div>
  )
}

FormInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
}

export default FormInput
