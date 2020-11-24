/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'

export const index = (): React.ReactElement => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr;
      `}
    >
      <div
        css={css`
          background-color: red;
          height: 100vh;
        `}
      >
        <p>Side bar</p>
      </div>
      <div>
        <p>Main body</p>
      </div>
    </div>
  )
}
export default index
