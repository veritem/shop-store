import { cartStateType } from '../store/types/cart'

export function countItems(productArray: cartStateType): number {
  let numItem = 0
  productArray.data.items.map((item) => (numItem += item.quantity))
  return numItem
}

export function countItemsPrice(productArray: cartStateType): number {
  let cartPriceTotal: number = 0
  productArray.data.items.map((item) => (cartPriceTotal += item.price))

  let finalPrice: number =
    Math.round(cartPriceTotal * countItems(productArray) * 100) / 100

  return finalPrice
}
