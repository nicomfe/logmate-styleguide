import React from 'react'
import Snackbar from 'material-ui/Snackbar'

import styles from './notification.scss'

class NotificationBar extends React.Component {
  render() {
    const { open, message } = this.props
    return <Snackbar className={styles.content} open={open} message={message} autoHideDuration={4000} />
  }
}

NotificationBar.propTypes = {
  open: React.PropTypes.bool,
  message: React.PropTypes.string,
}

export default NotificationBar
