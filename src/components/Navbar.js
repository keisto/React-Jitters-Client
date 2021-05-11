import React from 'react'
import { connect } from 'react-redux'

const Navbar = ({ caffeineIntake, caffeineLimit }) => {
  return (
    <nav className="flex justify-between flex-wrap gap-4 p-6">
      <div className="flex items-center">
        <span className="text-5xl mr-2">🤠</span>
        <h1 className="text-4xl font-bold text-gray-700 italic">Jitters</h1>
      </div>
      <div className="flex items-center text-gray-600">
        <h2 className="font-bold text-lg mr-2">Caffeine Intake:</h2>
        <span
          className={
            'font-bold text-3xl mr-1 ' +
            (caffeineIntake > caffeineLimit ? 'text-red-500' : '')
          }
        >
          {caffeineIntake > caffeineLimit ? <span>⚠️</span> : ''}
          {caffeineIntake}
        </span>
        <span className="text-gray-400">/ {caffeineLimit}</span>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  caffeineIntake: state.caffeinated.caffeineIntake,
  caffeineLimit: state.caffeinated.caffeineLimit,
})

export default connect(mapStateToProps)(Navbar)
