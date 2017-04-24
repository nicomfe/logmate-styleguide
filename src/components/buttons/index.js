import React from 'react'
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app'
import UsersIcon from 'material-ui/svg-icons/social/people'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import SupportIcon from 'material-ui/svg-icons/communication/chat'

import IconButton from './IconButton'

// Raised buttons
export PrimaryButton from './PrimaryButton'
export SecondaryButton from './SecondaryButton'

// Flat with icons buttons
export const IconExitButton = props => <IconButton icon={<ExitIcon />} {...props} />
export const IconUsersButton = props => <IconButton icon={<UsersIcon />} {...props} />
export const IconDashboardButton = props => <IconButton icon={<DashboardIcon />} {...props} />
export const IconSupportButton = props => <IconButton icon={<SupportIcon />} {...props} />
