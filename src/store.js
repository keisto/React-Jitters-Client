import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { caffeinated } from './caffeinator/reducers'
const { REACT_APP_API_URL } = process.env

const reducers = { caffeinated }

const persistConfig = {
  key: 'jitters',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () =>
  createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(REACT_APP_API_URL))
    )
  )
