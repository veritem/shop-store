import { authStateType, AuthActionTypes } from '../types/auth'

const initalState: authStateType = {
  loading: false,
  token: '',
  user: {
    id: '',
    names: '',
    password: '',
    email: '',
  },
  errors: '',
}

export const authReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        token: '',
        user: {
          id: '',
          names: '',
          password: '',
          email: '',
        },
        errors: '',
      }
    default:
      return state
  }
}
