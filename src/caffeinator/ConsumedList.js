import React from 'react'
import ConsumedItem from './ConsumedItem'
import { connect } from 'react-redux'
import { removeDrink } from './actions'

const ConsumedList = ({ consumed = [], handleRemove }) => {
  const emptyContent = (
    <div className="mt-4 flex-grow flex items-center justify-center bg-gray-900 border p-6 border-gray-700 border-dashed rounded-md text-gray-500 text-xl">
      <span className="mr-2">🥱</span>
      <h3>No drinks consumed... yet.</h3>
    </div>
  )

  const consumedContent = (
    <div className="relative -mx-6 md:-mx-12">
      <div className="bg-gradient-to-r absolute from-gray-800 to-transparent w-6 md:w-12 h-full z-50 pointer-events-none">
        &nbsp;
      </div>
      <ul className="grid grid-flow-col justify-start overflow-scroll gap-4 pt-4 px-6 md:px-12 pb-8">
        {consumed.map((drink) => (
          <ConsumedItem
            key={drink.id}
            drink={drink}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
      <div className="bg-gradient-to-l top-0 right-0 absolute from-gray-800 to-transparent w-6 md:w-12 h-full z-50 pointer-events-none">
        &nbsp;
      </div>
    </div>
  )

  return (
    <div className="bg-gray-800 w-full h-96 mt-12 py-12">
      <div className="container px-6 mx-auto h-full flex flex-col">
        <h2 className="font-bold text-2xl text-gray-200 text-opacity-80">
          Drinks Consumed:
        </h2>

        {consumed.length ? consumedContent : emptyContent}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  consumed: state.caffeinated.consumed,
})

const mapDispatchToProps = (dispatch) => ({
  handleRemove: (drink) => dispatch(removeDrink(drink)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsumedList)
