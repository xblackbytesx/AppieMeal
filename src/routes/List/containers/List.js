import { connect } from 'react-redux'
import React from 'react'

export const ListContainer = (props) => (
    <div className="selected-meals">
        {Object.keys(props.selectedMeals).map((day, i) => {
            return (
                <ul key={i}>
                    <li>
                        <h2>{props.selectedMeals[day].name}</h2>
                        {props.selectedMeals[day].ingredients.map((ingredient, j) => {
                            return <div key={j}>{ingredient.name}</div>
                        })}
                    </li>
                </ul>
            )
        })}
    </div>
  )

const mapStateToProps = (state) => {
    const selectedMeals = []

    Object.keys(state.selectedMeals).map(day => {
        if (typeof state.selectedMeals[day] !== 'string') {
            selectedMeals.push(state.selectedMeals[day])
        }
    })

    return {
        selectedMeals,
    }
}

export default connect(mapStateToProps)(ListContainer)
