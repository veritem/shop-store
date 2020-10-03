export interface productStateType {
  loading: boolean
  data: Product[]
  errors?: string
}

export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  description: string
  quantity: number
}

export enum ProductActionTypes {
  FETCH_REQUEST = 'FETCH_PRODUCT_REQUEST',
  FETCH_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_ERROR = 'FETCH_PRODUCT_ERROR',
}
