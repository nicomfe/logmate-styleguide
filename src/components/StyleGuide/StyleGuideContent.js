import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import baseStyles from '../../base/base.scss'
import styles from './styles.scss'

const StyleGuideContent = (props) => {
  const { children, title, description, sourceCode } = props
  return (<Paper className={baseStyles.container} zDepth={2}>
    <div>
      <h2>{title}</h2>
      <div className={styles.description}>{description}</div>
      <div className={styles.divider}><Divider /></div>
      <div className={styles.exampleContent}>{children}</div>
      {sourceCode ? <div className={styles.sourceCodeContent}>{sourceCode}</div> : null}
    </div>
  </Paper>)
}

StyleGuideContent.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.array]),
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.element.isRequired,
  sourceCode: React.PropTypes.string,
}

export default StyleGuideContent
