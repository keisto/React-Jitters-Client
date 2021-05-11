import React from 'react'

const ConsumedItem = ({ drink, handleRemove }) => {
  return (
    <div className="px-12 -mx-12">
      <div className="flex flex-col items-center w-72 transform rounded-lg px-6 pt-8 pb-6 bg-gray-600 hover:bg-gray-700 border border-gray-500 bg-opacity-80 shadow-sm hover:bg-opacity-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-200">
        <span className="text-7xl rotate-90 transform">🥫</span>
        <div className="text-center flex flex-col h-full w-full">
          <div className="flex justify-center text-lg text-gray-200">
            <h3 className="mr-2">{drink.name}</h3>
            <b>({drink.quantity})</b>
          </div>
          <button
            className="h-12 bg-red-500 hover:bg-red-600 duration-200 transition-colors mt-4 rounded-md text-white font-bold"
            onClick={() => {
              handleRemove(drink)
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsumedItem
