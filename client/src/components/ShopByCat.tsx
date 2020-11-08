

import smartPhones from '../assets/categories/smartPhones.png'
import homeApplicants from '../assets/categories/home.png'
import tvs from '../assets/categories/tvs.png'
import fashion from '../assets/categories/fashion.png'
import { css   } from '@emotion/core'
import React from 'react'

function ShopByCat() {
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
        <div
          css={css`
            background-color: #fff;
            border-radius: 5px;
          `}
        >
          <img
            src={smartPhones}
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
            Smart phones
          </p>
        </div>
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
        </div>
      </div>
    </div>
  )
}

export default ShopByCat
