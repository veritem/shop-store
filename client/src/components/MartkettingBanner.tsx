/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import cartImg from '../assets/others/1cart.png'
import { Link } from 'react-router-dom'
import React from 'react'

function MartkettingBanner() {
  return (
    <div
      css={css`
        background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
        height: 400px;
        display: grid;
        grid-template-columns: 60% 40%;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        margin-bottom: 5rem;
      `}
    >
      <div>
        <h2
          css={css`
            color: #fff;
            padding: 20px 0;
          `}
        >
          What are you still waiting for its time for you to buy what you like
          at the cheapest costs you can't find anywhere.
        </h2>
        <Link
          to='#'
          css={css`
            text-decoration: none;
            background-color: #fff;
            color: #000;
            padding: 10px 20px;
            border-radius: 20px;
          `}
        >
          Shop now
        </Link>
      </div>
      <div>
        <img
          src={cartImg}
          alt='Cart'
          css={css`
            width: 100%;
            height: 400px;
          `}
        />
      </div>
    </div>
  )
}

export default MartkettingBanner
