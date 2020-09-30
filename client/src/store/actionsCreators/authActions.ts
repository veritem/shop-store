import Axios from 'axios'
import { AuthActionTypes } from '../types/auth'
import { useLocalStorage } from '../../hooks'
import { AppThunk } from '../types/appThunk'

const { setData, GetData } = useLocalStorage('token')

export const login = (email: string, password: string): AppThunk => {
  console.log(email, password)
  return async dispatch => {
    const body = { email, password }
    try {
      const resp = await Axios.post(
        'http://localhost:5000/api/auth/login',
        body
      )
      const { token } = resp.data
      setData(token)
      dispatch({ type: AuthActionTypes.LOGIN_FETCH_SUCCESS })
    } catch (error) {
      dispatch({ type: AuthActionTypes.LOGIN_FETCH_ERROR })
    }
  }
}

export const loadUser = (): AppThunk => async dispatch => {
  const token = GetData()

  try {
    const resp = await Axios.get('http://localhost:5000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const { user } = resp.data

    console.log(user)
    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: {
        user,
        token,
      },
    })
  } catch (error) {
    dispatch({ type: AuthActionTypes.LOGIN_FAILURE })
  }
}
