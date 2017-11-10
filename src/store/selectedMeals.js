// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_MEAL = 'SELECT_MEAL'
export const NO_MEAL = 'NO_MEAL'

// ------------------------------------
// Actions
// ------------------------------------
export function selectMeal (day, meal) {
  return {
    type    : SELECT_MEAL,
    payload : {
      day,
      meal,
    }
  }
}

export function noMeal (day) {
  return {
    type    : NO_MEAL,
    payload : {
      day,
    }
  }
}

export const actions = {
  selectMeal,
  noMeal,
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
  [NO_MEAL]    : (state, action) => {
    return {
      ...state,
      [action.payload.day]: 'NO_MEAL',
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
