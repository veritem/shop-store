/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Register from '../components/auth/Register/Register'

function RegisterPage() {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Register />
    </div>
  )
}

export default RegisterPage
