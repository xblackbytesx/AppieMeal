// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_FILTER = 'CHANGE_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function changeFilter (day, filter, value) {
  return {
    type    : CHANGE_FILTER,
    payload : {
      day,
      filter,
      value,
    }
  }
}

export const actions = {
    changeFilter,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_FILTER]    : (state, action) => {
    return {
      ...state,
      [action.payload.day]: {
          ...state[action.payload.day],
          [action.payload.filter]: action.payload.value
      }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const defaultFilter = {
    people: 2,
    price: 20,
    time: 30,
    calories: null,
    difficulity: null,
}

const initialState = {
    maandag: { ...defaultFilter },
    dinsdag: { ...defaultFilter },
    woensdag: { ...defaultFilter },
    donderdag: { ...defaultFilter },
    vrijdag: { ...defaultFilter },
    zaterdag: { ...defaultFilter },
    zondag: { ...defaultFilter },
}
export default function selectedFiltersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
