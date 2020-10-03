import React, { useEffect } from 'react'
import './CatHeader.css'
import { Link } from 'react-router-dom'
import { appDispatch } from 'src/store'
import { useDispatch } from 'react-redux'
import { fetchCategories } from 'src/store/actions/categoriesActions'
import { useTypedSelector } from '../../store/reducers/index'
import { categoryStateType } from 'src/store/types/category'

export default function CatHeader() {
  const disaptch: appDispatch = useDispatch()

  const CategoryState: categoryStateType = useTypedSelector(
    state => state.categories
  )

  useEffect(() => {
    disaptch(fetchCategories())
  }, [disaptch])

  return CategoryState.isloading ? (
    <h2>Loading...</h2>
  ) : (
    <div className='CatHeader'>
      <ul>
        <li>
          <Link to='#'>
            <span>
              <i className='fas fa-bars fa-2x' />
            </span>
            All categories
          </Link>
        </li>
        {CategoryState.categories.map(
          (cat, index) =>
            index <= 5 && (
              <li key={cat.id}>
                <Link to='#'> {cat.name}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
