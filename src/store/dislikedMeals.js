// ------------------------------------
// Constants
// ------------------------------------
export const DISLIKE_MEAL = 'DISLIKE_MEAL'

// ------------------------------------
// Actions
// ------------------------------------
export function dislikeMeal (meal) {
  return {
    type    : DISLIKE_MEAL,
    payload : {
      meal,
    }
  }
}

export const actions = {
    dislikeMeal,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DISLIKE_MEAL]    : (state, action) => {
    return [...state, action.payload.meal]
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function dislikeMealsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
