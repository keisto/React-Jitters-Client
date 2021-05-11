import {
  CONSUME_DRINK,
  DRINKS_FAILED,
  DRINKS_LOADED,
  LOADING_DRINKS,
  REMOVE_DRINK,
} from './actions'

const initialState = {
  isLoading: false,
  drinks: [],
  consumed: [],
  caffeineIntake: 0,
  caffeineLimit: 500,
}

export const caffeinated = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CONSUME_DRINK:
      const { drink: consumedDrink, quantity, intake } = payload

      const alreadyConsumed = state.consumed.find(
        (drink) => drink.id === consumedDrink.id
      )
      if (alreadyConsumed) {
        return {
          ...state,
          consumed: state.consumed.map((drink) => {
            if (drink.id === consumedDrink.id) {
              drink.quantity += quantity
              drink.intake += intake
            }

            return drink
          }),
          caffeineIntake: state.caffeineIntake + intake,
        }
      }

      return {
        ...state,
        consumed: [...state.consumed, { ...consumedDrink, quantity, intake }],
        caffeineIntake: state.caffeineIntake + intake,
      }
    case REMOVE_DRINK:
      const { drink: drinkToRemove } = payload
      return {
        ...state,
        consumed: state.consumed.filter(
          (drink) => drink.id !== drinkToRemove.id
        ),
        caffeineIntake: state.caffeineIntake - drinkToRemove.intake,
      }
    case LOADING_DRINKS:
      return { ...state, isLoading: true }
    case DRINKS_FAILED:
      return { ...state, isLoading: false }
    case DRINKS_LOADED:
      const { drinks } = payload
      return {
        ...state,
        isLoading: false,
        drinks: drinks,
      }
    default:
      return state
  }
}
