import { combineReducers } from 'redux'
import { cartReducer } from './cart'
import { productReducer } from './product'
import { authReducer } from './auth'
import { categoryReducer } from './category'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const rootReducer = combineReducers({
  cartItem: cartReducer,
  products: productReducer,
  auth: authReducer,
  categories: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
