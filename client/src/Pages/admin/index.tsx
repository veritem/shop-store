/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import AdminLayout from 'src/layout/AdminLayout'

export const index = (): React.ReactElement => {
  return (
    <AdminLayout>
      <div
        css={css`
          padding: 10px 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          div {
            height: 150px;
            border-radius: 0.5rem;
          }
        `}
      >
        <div
          css={css`
            background-color: #3f47f4;
          `}
        >
          <h3>120</h3> users
        </div>
        <div
          css={css`
            background-color: #f3b82a;
          `}
        >
          <h3>2040</h3> Orders
        </div>
        <div
          css={css`
            background-color: #1ce2b1;
          `}
        >
          <h3>30</h3> Products
        </div>
      </div>
    </AdminLayout>
  )
}
export default index
