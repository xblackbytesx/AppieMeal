import { connect } from 'react-redux'

import { selectMeal } from './../../../store/selectedMeals'
import { dislikeMeal } from './../../../store/dislikedMeals'

import Meals from '../../../components/meals/meals'

const mapStateToProps = (state, ownProps) => {
  const selectedFilters = state.selectedFilters[ownProps.day]
  const dislikedMeals = state.dislikedMeals
  const selectedMeals = state.selectedMeals

  const meals = state.meals
    .filter((meal) => {
      if (!selectedFilters.price) return meal
      return meal.price < selectedFilters.price
    })
    .filter((meal) => {
      if (!selectedFilters.time) return meal
      return meal.time < selectedFilters.time
    })
    .filter((meal) => {
      return !(dislikedMeals.indexOf(meal) > -1)
    })
    .filter((meal) => {
      return !(Object.values(selectedMeals).indexOf(meal) > -1)
    })
  return { 
    meals,    
  }
}

const mapDispatchToProps = {
  selectMeal,
  dislikeMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
