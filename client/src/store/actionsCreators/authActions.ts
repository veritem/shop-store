import Axios from 'axios'
import { AuthActionTypes } from '../types/auth'
import { useLocalStorage } from '../../hooks'

const { setData, GetData } = useLocalStorage('token')

export const login = (email: string, password: string) => {
  return async function () {
    try {
      const body = { email, password }
      const res = await Axios.post('http://localhost:5000/api/auth/login', body)
      const { token } = res.data
      setData(token)
      return {
        type: AuthActionTypes.LOGIN_FETCH_SUCCESS,
      }
    } catch (error) {
      return {
        type: AuthActionTypes.LOGIN_FETCH_ERROR,
      }
    }
  }
}

export const loadUser = () => {
  return async function () {
    const token = GetData()
    try {
      const resp = await Axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const { user } = resp.data
      return {
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      }
    } catch (error) {
      return {
        type: AuthActionTypes.LOGIN_FAILURE,
      }
    }
  }
}
