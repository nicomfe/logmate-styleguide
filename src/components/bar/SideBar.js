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

import baseStyles from '../../base/base.scss'

const SideBar = () => {
  return (
    <Menu style={{ width: '300px' }}>
      <MenuItem className={baseStyles.secondaryButton} primaryText="Dashboard" leftIcon={<DashboardIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Users" leftIcon={<UsersIcon />} />
      <Divider />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Transport operators" leftIcon={<OperatorsIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Pending invitations" leftIcon={<PendingInvitationsIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Exports" leftIcon={<ExportsIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Subscriptions" leftIcon={<SubscriptionsIcon />} />
      <Divider />
      <MenuItem className={baseStyles.secondaryButton} primaryText="System Events" leftIcon={<SystemsEventIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Errors" leftIcon={<ErrorsIcon />} />
      <MenuItem className={baseStyles.secondaryButton} primaryText="Feedback" leftIcon={<FeedbackIcon />} />
    </Menu>
  )
}

export default SideBar
