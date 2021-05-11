export const CONSUME_DRINK = 'CONSUME_DRINK'
export const consumeDrink = (drink, quantity, intake) => ({
  type: CONSUME_DRINK,
  payload: { drink, quantity, intake },
})

export const REMOVE_DRINK = 'REMOVE_DRINK'
export const removeDrink = (drink) => ({
  type: REMOVE_DRINK,
  payload: { drink },
})

export const LOADING_DRINKS = 'LOADING_DRINKS'
export const loadingDrinks = () => ({
  type: LOADING_DRINKS,
})

export const DRINKS_LOADED = 'DRINKS_LOADED'
export const drinksLoaded = (drinks) => ({
  type: DRINKS_LOADED,
  payload: { drinks },
})

export const DRINKS_FAILED = 'DRINKS_FAILED'
export const drinksFailed = () => ({
  type: DRINKS_FAILED,
})
