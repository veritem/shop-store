import { Products } from './product'

export interface Cart {
	id: number
	items: Products[]
}
export enum cartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	FETCH_CART_REQUEST = 'FETCH_CART_REQUEST',
	FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESs',
	FETCH_CART_ERROR = 'FETCH_CART_ERROR',
}

export interface cartStateType {
	readonly loading: boolean
	readonly data: Cart
	readonly errors: string
}
