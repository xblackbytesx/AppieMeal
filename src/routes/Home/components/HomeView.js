import React from 'react'
import './HomeView.scss'

import Meals from '../containers/MealContainer'

export const HomeView = (props) => (
  <div>
    {props.params.day}
    <Meals />
  </div>
)

export default HomeView
