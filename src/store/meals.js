// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [
    { name: 'meal 1', price: 10 },
    { name: 'meal 2', price: 5  },
    { name: 'meal 3', price: 7  },
    { name: 'meal 4', price: 8  }
]
export default function mealReducer (state = initialState, action) {
  return state
}
