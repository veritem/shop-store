import Axios from 'axios'
import { AuthActionTypes } from '../types/auth'
import { useLocalStorage } from '../../hooks'
import { AppThunk } from '../types/appThunk'

const { setData, GetData } = useLocalStorage('token')

export const login = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  const body = { email, password }
  try {
    const resp = (
      await Axios.post('http://localhost:5000/api/auth/login', body)
    ).data
    const { token } = resp

    if (token) {
      setData(token)
      dispatch({ type: AuthActionTypes.LOGIN_FETCH_SUCCESS })
    } else {
      dispatch({ type: AuthActionTypes.LOGIN_FETCH_ERROR })
    }
  } catch (error) {
    dispatch({ type: AuthActionTypes.LOGIN_FETCH_ERROR })
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

    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: {
        user,
        token,
      },
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: AuthActionTypes.LOGIN_FAILURE })
  }
}
