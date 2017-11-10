import { connect } from 'react-redux'

import CartButton from './cart-button'

const mapStateToProps = (state) => {
  let ingredients = []; 
  let selectedDays = Object.keys(state.selectedMeals);

  selectedDays.forEach(day => {
      ingredients = [...ingredients, ...state.selectedMeals[day].ingredients]
  })

  return {
      ingredients,
  }
}

export default connect(mapStateToProps)(CartButton)
