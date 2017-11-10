import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Header from '../../components/header/header'

export const PageLayout = ({ children }) => (
  <div className='main text-center'>

    <Header />

    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
