export interface categoryStateType {
  isloading: boolean
  categories: Category[]
  errors?: string
}
export interface Category {
  id: string
  name: string
  photo_url: string
}
export enum categoryActionTypes {
  FETCH_CATEGORIES = 'FETCH_CAT_REQUEST',
  FETCH_SUCCESS = 'FETCH_CAT_SUCCESS',
  FETCH_FAILURE = 'FETCH_CAT_FAILURE',
}
