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
            text-align: right;
            padding: 1rem;
            h3 {
              font-size: 3rem;
              color: #dede;
            }
            p {
              color: #fefefe;
            }
          }
        `}
      >
        <div
          css={css`
            background-color: #d90429;
          `}
        >
          <h3>120</h3> <p>users</p>
        </div>
        <div
          css={css`
            background-color: #8d99ae;
          `}
        >
          <h3>2040</h3> <p>Orders</p>
        </div>
        <div
          css={css`
            background-color: #2b2d42;
          `}
        >
          <h3>30</h3> <p>Products</p>
        </div>
      </div>
    </AdminLayout>
  )
}
export default index
