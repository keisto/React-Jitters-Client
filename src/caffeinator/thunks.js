import { drinksFailed, drinksLoaded, loadingDrinks } from './actions'

export const loadDrinks = () => async (dispatch, getState, api) => {
  try {
    dispatch(loadingDrinks())

    const response = await fetch(api + '/drinks')
    const drinks = await response.json()

    dispatch(drinksLoaded(drinks.data))
  } catch (e) {
    dispatch(drinksFailed())
    dispatch(displayAlert(e))
  }
}

export const displayAlert = (error) => () => {
  alert(error)
}
