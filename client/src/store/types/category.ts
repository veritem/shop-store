export interface categoryStateType {
	isloading: boolean
	categories: Category[]
	errors?: string
}
export interface Category {
	id: string
	name: string
}
export enum categoryActionTypes {
	FETCH_CATEGORIES = 'FETCH_CATEGORIES',
	FETCH_SUCCESS = 'FETCH_SUCCESS',
	FETCH_FAILURE = 'FETCH_FAILURE',
}
