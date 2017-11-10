import React from 'react'
import './HomeView.scss'

import Meals from '../containers/MealContainer'

export const HomeView = (props) => (
  <div>
    {props.params.day}
    <Meals day={props.params.day} />
  </div>
)

export default HomeView
