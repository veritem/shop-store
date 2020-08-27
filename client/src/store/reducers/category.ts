import { categoryStateType, categoryActionTypes } from '../types/category'

const initalState: categoryStateType = {
	isloading: false,
	categories: [],
	errors: '',
}

export const categoryReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case categoryActionTypes.FETCH_CATEGORIES:
			return {
				...state,
				isloading: true,
			}
		case categoryActionTypes.FETCH_SUCCESS:
			return {
				...state,
				isloading: false,
				categories: [...state.categories, action.payload],
			}
		case categoryActionTypes.FETCH_FAILURE:
			return {
				...state,
				isloading: false,
				errors: action.payload,
			}
		default:
			return state
	}
}
