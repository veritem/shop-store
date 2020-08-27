import { cartStateType, cartActionTypes } from '../types/cart'

const initalState: cartStateType = {
	data: {
		id: 0,
		items: [],
	},
	loading: false,
	errors: 'undefined',
}

export const cartReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case cartActionTypes.FETCH_CART_REQUEST:
			return {
				...state,
				loading: true,
			}
		case cartActionTypes.FETCH_CART_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			}
		case cartActionTypes.FETCH_CART_ERROR:
			return {
				...state,
				loading: false,
				errors: action.payload,
			}
		case cartActionTypes.ADD_TO_CART:
			return {
				errors: state.errors,
				loading: state.loading,
				data: {
					...state.data,
					id: state.loading,
					items: [...state.data.items, action.payload],
				},
			}
		case cartActionTypes.REMOVE_FROM_CART:
			return {
				error: state.errors,
				loading: state.loading,
				data: {
					...state.data,
					id: state.data.id,
					items: state.data.items.filter((item) => item !== action.payload.id),
				},
			}
		default: {
			return state
		}
	}
}
