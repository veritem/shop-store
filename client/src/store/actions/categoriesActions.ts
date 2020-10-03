import axios from 'axios'
import { AppThunk } from '../types/appThunk'
import { categoryActionTypes } from '../types/category'

export const fetchCategories = (): AppThunk => {
  return async dispatch => {
    dispatch({ type: categoryActionTypes.FETCH_CATEGORIES })
    try {
      const res = (
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/category`)
      ).data
      dispatch({
        type: categoryActionTypes.FETCH_SUCCESS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({ type: categoryActionTypes.FETCH_FAILURE, payload: error })
    }
  }
}
