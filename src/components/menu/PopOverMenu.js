import React from 'react'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import FeedbackIcon from 'material-ui/svg-icons/communication/rss-feed'
import IdeaIcon from 'material-ui/svg-icons/action/lightbulb-outline'
import HappyIcon from 'material-ui/svg-icons/image/tag-faces'

import { IconSupportButton } from '../../components/buttons'

class PopOverMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleTouchTap = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (<div>
      <IconSupportButton label="SUPPORT" onClick={this.handleTouchTap} />
      <Popover
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        onRequestClose={this.handleRequestClose}
      >
        <Menu>
          <MenuItem leftIcon={<FeedbackIcon />} primaryText="Feedback" />
          <MenuItem leftIcon={<IdeaIcon />} primaryText="Suggest an idea?" />
          <MenuItem leftIcon={<HappyIcon />} primaryText="Satisfied?" />
        </Menu>
      </Popover>
    </div>)
  }
}

export default PopOverMenu
