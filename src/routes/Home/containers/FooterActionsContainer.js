import { connect } from 'react-redux'
import React from 'react'

import { selectNoMeal } from './../../../store/selectedMeals'

export const FooterActionsContainer = (props) => (
    <div>
        {JSON.stringify(props)}
        <a>Ga naar favourites</a>
        <a onClick={() => props.selectNoMeal(props.day)}>IK WIL JE KUT-ETEN NIET</a>
    </div>
  )

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    selectNoMeal,
}  

export default connect(mapStateToProps, mapDispatchToProps)(FooterActionsContainer)
