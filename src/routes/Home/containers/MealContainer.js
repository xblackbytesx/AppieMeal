import { connect } from 'react-redux'

import { selectMeal } from './../../../store/selectedMeals'

import Meals from '../../../components/meals/meals'

const mapStateToProps = (state, ownProps) => {
  const selectedFilters = state.selectedFilters[ownProps.day];
  return { 
    meals : state.meals
      .filter((meal) => {
        if (!selectedFilters.price) return meal
        return meal.price < selectedFilters.price
      })
  }
}

const mapDispatchToProps = {
  selectMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
