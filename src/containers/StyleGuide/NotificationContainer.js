import React from 'react'

import StyleGuideContent from '../../components/styleGuide/StyleGuideContent'
import NotificationBar from '../../components/notifications/NotificationBar'
import { PrimaryButton } from '../../components/buttons'

class NotificationContainer extends React.Component {
  constructor() {
    super()
    this.state = { notificationOpen: false }
  }

  handleTouchTap = () => {
    this.setState({ notificationOpen: true })
  }

  render() {
    const { notificationOpen } = this.state
    return (
      <div id="notification">
        <StyleGuideContent
          title="Notifications"
          description={<small>
            For the notifications we will use a snack bar
          </small>}
        >
          <PrimaryButton
            onClick={this.handleTouchTap}
            label="show notification"
          />
          <NotificationBar open={notificationOpen} message="This is the notification bar message" />
        </StyleGuideContent>
      </div>
    )
  }
}

export default NotificationContainer
