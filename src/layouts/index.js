import React from 'react'
import withRouter from 'umi/withRouter'
import Header from './Header'
import styles from './index.css'

const BasicLayout = ({ children, location }) => {
  return (
    <div className={styles.normal}>
      <Header location={location}/>
      <div>
        { children }
      </div>
    </div>
  )
}

export default withRouter(BasicLayout)
