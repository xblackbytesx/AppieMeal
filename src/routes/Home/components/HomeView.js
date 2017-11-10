import React from 'react'
import './HomeView.scss'

import Meals from '../containers/MealContainer'
import Filters from '../containers/SelectedFiltersContainer'
import FooterActions from '../containers/FooterActionsContainer'

export const HomeView = (props) => (
  <div>
    <Meals day={props.params.day} />
    <Filters day={props.params.day} />
    <FooterActions day={props.params.day} />
  </div>
)

export default HomeView
