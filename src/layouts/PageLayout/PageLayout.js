import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Header from '../../components/header/header'
import DayPicker from '../../components/day-picker/DayPickerContainer'

export const PageLayout = ({ children }) => (
  <div className='main text-center'>

    <Header />

    <div className="heading">
      <h1>Wat eten we volgende week?</h1>
    </div>

    <DayPicker />

    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
