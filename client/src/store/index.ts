import { applyMiddleware, createStore } from 'redux'
import allReducers from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export type appDispatch = typeof store.dispatch

export default store
