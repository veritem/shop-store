export interface productStateType {
  loading: boolean;
  data: Products[];
  errors?: string;
}

export interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export enum ProductActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}
