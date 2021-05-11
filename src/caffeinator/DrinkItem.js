import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const DrinkItem = ({ drink, handleConsume, caffeineLimit, caffeineIntake }) => {
  const [quantity, setQuantity] = useState(1)
  const [intake, setIntake] = useState(drink.caffeine * drink.servings)
  const [message, setMessage] = useState('')

  const increment = () => (quantity >= 10 ? null : setQuantity(quantity + 1))
  const decrement = () => (quantity <= 1 ? null : setQuantity(quantity - 1))

  useEffect(() => {
    const totalIntake = drink.caffeine * drink.servings * quantity
    setIntake(totalIntake)

    const remainingIntake = caffeineLimit - caffeineIntake
    const safeConsumption = Math.floor(
      remainingIntake / (drink.caffeine * drink.servings)
    )

    setMessage(
      `You can safely have: ${safeConsumption < 0 ? 0 : safeConsumption}`
    )
  }, [drink.caffeine, drink.servings, quantity, caffeineIntake, caffeineLimit])

  return (
    <div className="px-12 -mx-12">
      <div className="flex flex-col items-center w-72 h-full transform rounded-lg px-6 pt-8 pb-6 bg-gray-50 hover:bg-white border border-gray-200 bg-opacity-80 shadow-sm hover:bg-opacity-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-200">
        <span className="text-7xl">🧃</span>
        <div className="mt-4 text-center flex flex-col h-full">
          <h3 className="text-lg text-gray-700">{drink.name}</h3>
          <p className="text-gray-500 flex-grow">{drink.description}</p>
          <hr className="border border-gray-200 w-full my-4" />
          <div className="text-gray-600 text-xs w-full">
            <div className="flex justify-between">
              Caffeine/Serving: <b>{drink.caffeine}</b>
            </div>
            <div className="flex justify-between mt-2">
              Number of Servings: <b>{drink.servings}</b>
            </div>
          </div>
          <hr className="border border-gray-200 w-full my-4" />
          <div className="flex justify-between items-center">
            <button
              className="h-12 w-12 bg-gray-200 hover:bg-gray-300 duration-200 transition-colors rounded-full text-white font-bold"
              onClick={decrement}
            >
              ➖
            </button>
            <span className="font-bold text-2xl">{quantity}</span>
            <button
              className="h-12 w-12 bg-gray-200 hover:bg-gray-300 duration-200 transition-colors rounded-full text-white font-bold"
              onClick={increment}
            >
              ➕
            </button>
          </div>
          <p className="text-sm text-gray-600">{message}</p>
          <button
            className="h-12 bg-green-500 hover:bg-green-600 duration-200 transition-colors mt-2 rounded-md text-white font-bold"
            onClick={() => {
              handleConsume(drink, quantity, intake)
              setQuantity(1)
            }}
          >
            Drink
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  caffeineLimit: state.caffeinated.caffeineLimit,
  caffeineIntake: state.caffeinated.caffeineIntake,
})

export default connect(mapStateToProps)(DrinkItem)
