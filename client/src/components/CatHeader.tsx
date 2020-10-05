/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../store/reducers/index'
import { categoryStateType } from 'src/store/types/category'

export default function CatHeader() {
  const CategoryState: categoryStateType = useTypedSelector(
    state => state.categories
  )

  return CategoryState.isloading ? (
    <h2>Loading...</h2>
  ) : (
    <div
      css={css`
        background-color: #fff;
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      `}
    >
      <ul
        css={css`
          display: flex;
          justify-content: space-around;
          list-style-type: none;
          padding: 1rem 0;
        `}
      >
        <li
          css={css`
            text-transform: capitalize;
          `}
        >
          <Link
            to='#'
            css={css`
              text-decoration: none;
              color: rgb(116, 113, 113);
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              /* place-items: center; */
              font-size: 1rem;
              border-right: 3px solid var(--second-whitish);
              padding-right: 2rem;
            `}
          >
            <span>
              <i
                className='fas fa-bars fa-2x'
                css={css`
                  color: var(--second-whitish);
                  margin-right: 1rem;
                `}
              />
            </span>
            All categories
          </Link>
        </li>
        {CategoryState.categories.map(
          (cat, index) =>
            index <= 5 && (
              <li key={index}>
                <Link
                  to='#'
                  css={css`
                    text-decoration: none;
                    color: rgb(116, 113, 113);
                  `}
                >
                  {' '}
                  {cat.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
