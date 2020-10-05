/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function SubHeader() {
  return (
    <section
      css={css`
        background-color: #ef2343;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 0;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
        `}
      >
        <p
          className='phone'
          css={css`
            margin-right: 0.5rem;
          `}
        >
          +(250) 7871 47115
        </p>
        <p
          css={css`
            margin-right: 1rem;
            color: #fff;
          `}
        >
          customer@rastique.io
        </p>
        <p
          className='residence'
          css={css`
            color: #fff;
          `}
        >
          178 Remera Road
        </p>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <p
          css={css`
            margin-right: 1rem;
            color: #fff;
          `}
        >
          USD
        </p>
        <p
          css={css`
            margin-right: 1rem;
            color: #fff;
          `}
        >
          My Account
        </p>
      </div>
    </section>
  )
}

export default SubHeader
