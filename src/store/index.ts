import { combineReducers, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers(reducers)
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
