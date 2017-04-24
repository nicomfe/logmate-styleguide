import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './styles.scss'

const Button = (props) => {
  return <RaisedButton className={styles.button} {...props} />
}

export default Button
