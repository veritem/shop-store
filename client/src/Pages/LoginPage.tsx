/** @jsxImportSource @emotion/core */


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {css,jsx} from '@emotion/core'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loadUser, login } from '../store/actions/authActions'
import { appDispatch } from '../store'
import React from 'react'

function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const disaptch: appDispatch = useDispatch()

  const handleForms = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      disaptch(login(email, password))
      disaptch(loadUser())
    }
  }
  return (
    <div
      css={css`
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
      `}
    >
      <div
        css={css`
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          width: 400px;
          max-width: 100%;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          Login
        </h1>

        <form
          onSubmit={e => handleForms(e)}
          css={css`
            padding: 30px 40px;
          `}
        >
          <div
            className='form-control'
            css={css`
              margin-bottom: 10px;
              padding-bottom: 20px;
              position: relative;
            `}
          >
            <label
              htmlFor='email'
              css={css`
                display: inline-block;
                margin-bottom: 5px;
              `}
            >
              Email
            </label>
            <input
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
              `}
              type='text'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='password1'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              id='password1'
              autoComplete='true'
              value={password}
              onChange={e => setPassword(e.target.value)}
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
                margin-bottom: 1rem;
              `}
            />
          </div>

          <input
            type='submit'
            value='Login into your account'
            css={css`
              background-color: #b2003d;
              color: #fff;
              padding: 10px;
              width: 100%;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-family: inherit;
            `}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
