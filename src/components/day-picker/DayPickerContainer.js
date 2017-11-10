import { connect } from 'react-redux'

import DayPicker from './day-picker'

const mapStateToProps = (state) => {
  return {
      selectedMeals: state.selectedMeals,
  }
}

export default connect(mapStateToProps)(DayPicker)
