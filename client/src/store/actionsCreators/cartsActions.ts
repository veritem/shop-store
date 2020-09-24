import { cartActionTypes } from '../types/cart'
import { Product } from '../types/product'

export const addtoCart = (newProductData: Product) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: newProductData,
  }
}

export const removeFromCart = (id: string) => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: { id },
  }
}
