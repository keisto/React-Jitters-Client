import React from 'react'
import DrinkItem from './DrinkItem'
import { connect } from 'react-redux'
import { loadDrinks } from './thunks'
import { useEffect } from 'react'
import { consumeDrink } from './actions'

const DrinkList = ({
  isLoading,
  drinks,
  startLoadingDrinks,
  handleConsume,
}) => {
  useEffect(() => {
    startLoadingDrinks()
  }, [startLoadingDrinks])

  const loadingMessage = <div>Loading Favorite Drinks...</div>
  const content = (
    <div className="container px-6 mt-12 mx-auto flex-grow">
      <h2 className="font-bold text-2xl text-gray-600">Favorite Drinks:</h2>
      <div className="relative -mx-6 md:-mx-12">
        <div className="bg-gradient-to-r absolute from-gray-200 to-transparent w-6 md:w-12 h-full z-50 pointer-events-none">
          &nbsp;
        </div>
        <ul className="grid grid-flow-col overflow-scroll gap-4 pt-4 px-6 md:px-12 pb-8">
          {drinks.map((drink) => (
            <DrinkItem
              key={drink.id}
              drink={drink}
              handleConsume={handleConsume}
            />
          ))}
        </ul>
        <div className="bg-gradient-to-l top-0 right-0 absolute from-gray-200 to-transparent w-6 md:w-12 h-full z-50 pointer-events-none">
          &nbsp;
        </div>
      </div>
    </div>
  )

  return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
  isLoading: state.caffeinated.isLoading,
  drinks: state.caffeinated.drinks,
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingDrinks: () => dispatch(loadDrinks()),
  handleConsume: (drink, quantity, intake) =>
    dispatch(consumeDrink(drink, quantity, intake)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList)
