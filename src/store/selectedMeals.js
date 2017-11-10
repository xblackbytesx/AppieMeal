
import { days } from './../components/day-picker/day-picker'
import { browserHistory } from 'react-router'

console.log(days)
// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_MEAL = 'SELECT_MEAL'
export const SELECT_NO_MEAL = 'SELECT_NO_MEAL'

// ------------------------------------
// Actions
// ------------------------------------
export function select (day, meal) {
  return {
    type    : SELECT_MEAL,
    payload : {
      day,
      meal,
    }
  }
}

export function selectNo (day) {
  return {
    type    : SELECT_NO_MEAL,
    payload : {
      day,
    }
  }
}

export function selectMeal(day, meal) {
  return (dispatch, getState) => {
    dispatch(select(day, meal));
    const state = getState();
    const selectedDays = Object.keys(state.selectedMeals)

    const daysWithoutMeal = days.filter(day => selectedDays.indexOf(day) === -1)

    if (daysWithoutMeal.length) {
      browserHistory.push('/meal/' + daysWithoutMeal[0])
    } else {
      browserHistory.push('/thank-you')
    }

  };
}

export function selectNoMeal(day) {
  return (dispatch, getState) => {
    dispatch(selectNo(day));
    const state = getState();
    const selectedDays = Object.keys(state.selectedMeals)

    const daysWithoutMeal = days.filter(day => selectedDays.indexOf(day) === -1)

    if (daysWithoutMeal.length) {
      browserHistory.push('/meal/' + daysWithoutMeal[0])
    } else {
      browserHistory.push('/thank-you')
    }
  };
}

export const actions = {
  selectMeal,
  selectNoMeal,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_MEAL]    : (state, action) => {
    return {
      ...state,
      [action.payload.day]: action.payload.meal,
    }
  },
  [SELECT_NO_MEAL]    : (state, action) => {
    return {
      ...state,
      [action.payload.day]: "NO_MEAL"
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function selectedMealsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
