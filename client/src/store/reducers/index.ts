import { combineReducers } from 'redux'
import { cartReducer } from './cart'
import { productReducer } from './product'

const allReducers = combineReducers({
	cartItem: cartReducer,
	products: productReducer,
})

export default allReducers
