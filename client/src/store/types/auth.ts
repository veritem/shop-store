export interface authStateType {
  loading: boolean
  token: string
  user: User
  errors?: string
}

export interface User {
  id: string
  names: string
  password: string
  email: string
}

export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS',
  LOGIN_FETCH_ERROR = 'LOGIN_FETCH_ERROR',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
  LOGOUT = 'LOGOUT',
}
