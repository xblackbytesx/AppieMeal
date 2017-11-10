import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <header>
      <h1>Appie Meal</h1>
    </header>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <Link to='/meal/maandag' activeClassName='page-layout__nav-item--active'>Maandag</Link>
    <Link to='/meal/dinsdag' activeClassName='page-layout__nav-item--active'>Dinsdag</Link>
    <Link to='/meal/woensdag' activeClassName='page-layout__nav-item--active'>Woensdag</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
