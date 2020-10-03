import { productStateType, ProductActionTypes } from '../types/product'

const initialState: productStateType = {
  data: [],
  errors: undefined,
  loading: false,
}

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.FETCH_SUCCESS:
      console.log(action)
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case ProductActionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
