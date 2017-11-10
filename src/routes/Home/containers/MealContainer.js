import { connect } from 'react-redux'

import { selectMeal } from './../../../store/selectedMeals'

import Meals from '../../../components/meals/meals'

const mapStateToProps = (state) => ({
  meals : state.meals
})

const mapDispatchToProps = {
  selectMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
