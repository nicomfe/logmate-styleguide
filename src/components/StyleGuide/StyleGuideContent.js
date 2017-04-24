import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import baseStyles from '../../base/base.scss'
import styles from './styles.scss'

const StyleGuideContent = (props) => {
  const { children, title, description } = props
  return (<Paper className={baseStyles.container} zDepth={2}>
    <p>
      <h2>{title}</h2>
      <div className={styles.description}>{description}</div>
      <div className={styles.divider}><Divider /></div>
      {children}
    </p>
  </Paper>)
}

StyleGuideContent.propTypes = {
  children: React.PropTypes.element.isRequired,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
}

export default StyleGuideContent
