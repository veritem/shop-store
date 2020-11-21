/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useTypedSelector } from 'src/store/reducers'
import { categoryStateType } from 'src/store/types/category'
import { Link } from 'react-router-dom'

function ShopByCat() {
  const CategoryState: categoryStateType = useTypedSelector(
    state => state.categories
  )

  return (
    <div
      css={css`
        margin-bottom: 3rem;
      `}
    >
      <h1
        css={css`
          text-align: center;
          margin-bottom: 2rem;
        `}
      >
        Shop by category
      </h1>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1rem;
        `}
      >
        {CategoryState.categories.map(cat => (
          <Link
            to={`/c/${cat._id}`}
            key={cat._id}
            css={css`
              background-color: #fff;
              border-radius: 5px;
              text-decoration: none;
              color: #000;
            `}
          >
            <img
              src={cat.photo_url}
              alt={cat.name}
              css={css`
                width: 100%;
                height: 200px;
              `}
            />
            <p
              css={css`
                text-align: center;
                font-size: 1rem;
                font-weight: bold;
                padding: 2rem;
              `}
            >
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShopByCat
