import React from 'react'
import UsersIcon from 'material-ui/svg-icons/social/people'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import OperatorsIcon from 'material-ui/svg-icons/hardware/device-hub'
import PendingInvitationsIcon from 'material-ui/svg-icons/action/bookmark-border'
import ExportsIcon from 'material-ui/svg-icons/communication/import-export'
import SubscriptionsIcon from 'material-ui/svg-icons/editor/monetization-on'
import SystemsEventIcon from 'material-ui/svg-icons/action/info'
import ErrorsIcon from 'material-ui/svg-icons/alert/warning'
import FeedbackIcon from 'material-ui/svg-icons/communication/rss-feed'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const SideBar = () => {
  return (
    <Menu style={{ width: '300px' }}>
      <MenuItem primaryText="Dashboard" leftIcon={<DashboardIcon />} />
      <MenuItem primaryText="Users" leftIcon={<UsersIcon />} />
      <Divider />
      <MenuItem primaryText="Transport operators" leftIcon={<OperatorsIcon />} />
      <MenuItem primaryText="Pending invitations" leftIcon={<PendingInvitationsIcon />} />
      <MenuItem primaryText="Exports" leftIcon={<ExportsIcon />} />
      <MenuItem primaryText="Subscriptions" leftIcon={<SubscriptionsIcon />} />
      <Divider />
      <MenuItem primaryText="System Events" leftIcon={<SystemsEventIcon />} />
      <MenuItem primaryText="Errors" leftIcon={<ErrorsIcon />} />
      <MenuItem primaryText="Feedback" leftIcon={<FeedbackIcon />} />
    </Menu>
  )
}

export default SideBar
