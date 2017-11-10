import { combineReducers } from 'redux'
import locationReducer from './location'
import mealReducer from './meals'
import selectedMealsReducer from './selectedMeals'
import dislikedMealsReducer from './dislikedMeals'
import selectedFiltersReducer from './selectedFilters'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    meals: mealReducer,
    selectedMeals: selectedMealsReducer,
    selectedFilters: selectedFiltersReducer,
    dislikedMeals: dislikedMealsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
