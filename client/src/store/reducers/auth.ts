import { authStateType, AuthActionTypes } from '../types/auth'

const initalState: authStateType = {
  loading: false,
  token: '',
  user: {
    _id: '',
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
    case AuthActionTypes.LOGIN_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case AuthActionTypes.LOGIN_FETCH_ERROR:
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
        error: 'Something went wrong',
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

    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: {
          id: '',
          names: '',
          password: '',
          email: '',
        },
        errors: '',
      }
    case AuthActionTypes.REGISTER_FAILURE:
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
        errors: 'Registration failed',
      }
    default:
      return state
  }
}
