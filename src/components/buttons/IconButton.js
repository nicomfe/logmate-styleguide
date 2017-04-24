import React from 'react'
import FlatButton from 'material-ui/FlatButton'

import baseStyles from '../../base/base.scss'

const IconButton = (props) => {
  return (<FlatButton
    className={baseStyles.secondaryButton}
    icon={props.icon}
    {...props}
  />)
}

IconButton.propTypes = {
  icon: React.PropTypes.element.isRequired,
}

export default IconButton
