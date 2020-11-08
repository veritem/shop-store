
import { css, jsx } from '@emotion/core'
import React from 'react'

function Intro() {
  return (
    <div
      css={css`
        margin-top: 2rem;
      `}
    >
      <h1
        css={css`
          text-align: center;
          padding: 10px 0;
        `}
      >
        Online shopping even more than profitable
      </h1>
      <div
        className='intro__elements'
        css={css`
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          padding: 20px 30px;
          border-radius: 0.3rem;
          text-align: center;
        `}
      >
        <div>
          <i
            className='far fa-hand-pointer'
            css={css`
              color: var(--second-whitish);
              font-size: 2rem;
            `}
          />
          <p>Choose the one you like on the site</p>
        </div>

        <div>
          <i
            className='far fa-credit-card'
            css={css`
              color: var(--second-whitish);
              font-size: 2rem;
            `}
          />
          <p>Pay fot the order with points and card directly on the website</p>
        </div>

        <div>
          <i
            className='fas fa-truck'
            css={css`
              color: var(--second-whitish);
              font-size: 2rem;
            `}
          />
          <p>Pay fot the order with points and card directly on the website</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
