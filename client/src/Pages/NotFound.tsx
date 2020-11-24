/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'

function NotFound(): React.ReactElement {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <p
        css={css`
          font-size: 2rem;
        `}
      >
        404 - Not found
      </p>
    </div>
  )
}

export default NotFound
