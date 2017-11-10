import React from 'react'
import './HomeView.scss'

import Meals from '../containers/MealContainer'
import Filters from '../containers/SelectedFiltersContainer'
import FooterActions from '../containers/FooterActionsContainer'
import DayPicker from '../../../components/day-picker/DayPickerContainer'

export const HomeView = (props) => (
  <div>
    <div className="heading">
      <h1>Wat eten we volgende week?</h1>
    </div>
    <DayPicker />
    <Meals day={props.params.day} />
    <Filters day={props.params.day} />
    <FooterActions day={props.params.day} />
  </div>
)

export default HomeView
