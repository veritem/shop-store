import React from 'react'
import './CatHeader.css'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../store/reducers/index'
import { categoryStateType } from 'src/store/types/category'

export default function CatHeader() {
  const CategoryState: categoryStateType = useTypedSelector(
    state => state.categories
  )

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
              <li key={index}>
                <Link to='#'> {cat.name}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
