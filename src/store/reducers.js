import { combineReducers } from 'redux'
import locationReducer from './location'
import mealReducer from './meals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    meals: mealReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
