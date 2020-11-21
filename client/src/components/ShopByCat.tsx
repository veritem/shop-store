/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useTypedSelector } from 'src/store/reducers'
import { categoryStateType } from 'src/store/types/category'

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
          <div
            key={cat._id}
            css={css`
              background-color: #fff;
              border-radius: 5px;
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
          </div>
        ))}

        {/* <div></div>
        <div
          css={css`
            background-color: #fff;
            border-radius: 5px;
          `}
        >
          <img
            src={homeApplicants}
            alt='Smart phones'
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
            Home applicants and home materials
          </p>
        </div>
        <div
          css={css`
            background-color: #fff;
            border-radius: 5px;
          `}
        >
          <img
            src={tvs}
            alt='Smart phones'
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
            Tvs and Ultra wide monitors
          </p>
        </div>
        <div
          css={css`
            background-color: #fff;
            border-radius: 5px;
          `}
        >
          <img
            src={fashion}
            alt='Smart phones'
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
            Men and women from fashion industry experts
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default ShopByCat
