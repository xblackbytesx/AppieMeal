// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_MEAL = 'SELECT_MEAL'

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

export const actions = {
  selectMeal,
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
