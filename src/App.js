import React from 'react'
import ConsumedList from './caffeinator/ConsumedList'
import DrinkList from './caffeinator/DrinkList'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <DrinkList />
      <ConsumedList />
    </>
  )
}

export default App
