/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Link } from 'react-router-dom'

interface AdminLayoutProps {
  children: React.ReactElement
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 4fr;
      `}
    >
      <div
        css={css`
          background-color: #ef233c;
          height: 100vh;
          padding: 2rem 3rem;
        `}
      >
        <h3
          css={css`
            margin-bottom: 3rem;
            font-size: 2rem;
            color: #ffff;
          `}
        >
          Rustique
        </h3>
        <div
          css={css`
            text-align: left;
            a {
              display: block;
              text-decoration: none;
              margin-bottom: 1rem;
              text-transform: capitalize;
              color: #edf2f4;
            }
          `}
        >
          <Link to={'/'}>Home</Link>
          <Link to={'/products'}>products</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/orders'}>Orders</Link>
          <Link to={'/orders'}>Logout</Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
export default AdminLayout
