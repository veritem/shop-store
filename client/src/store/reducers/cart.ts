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
      let index = state.data.items.findIndex(
        (product) => product._id === action.payload._id
      )

      if (index === -1) {
        return {
          data: {
            ...state.data,
            items: [...state.data.items, { ...action.payload, quantity: 1 }],
          },
        }
      }
      return state
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        data: {
          ...state.data,
          items: state.data.items.filter(
            (item) => item._id !== action.payload.id
          ),
        },
      }

    case cartActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        data: {
          ...state.data,
          items: state.data.items.map((it) =>
            it._id === action.payload.id
              ? { ...it, quantity: it.quantity += 1 }
              : it
          ),
        },
      }
    case cartActionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        data: {
          ...state.data,
          items: state.data.items.map((it) =>
            it._id === action.payload.id
              ? {
                  ...it,
                  quantity: it.quantity > 1 ? (it.quantity -= 1) : it.quantity,
                }
              : it
          ),
        },
      }
    default:
      return state
  }
}
