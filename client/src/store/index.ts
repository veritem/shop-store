import { createStore, compose } from 'redux'
import allReducers from './reducers/index'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancers())

export default store
