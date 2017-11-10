// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_MEAL = 'SELECT_MEAL'
export const SELECT_NO_MEAL = 'SELECT_NO_MEAL'

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

export function selectNoMeal (day) {
  return {
    type    : SELECT_NO_MEAL,
    payload : {
      day,
    }
  }
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
