/** @jsxImportSource @emotion/core */


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {css,jsx} from '@emotion/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { appDispatch } from 'src/store'
import { loadUser, registerUser } from 'src/store/actions/authActions'
function RegisterPage() {
  const [names, setnames] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [repassword, setrepassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const dispatch: appDispatch = useDispatch()

  const handleRegistration = (e: React.FormEvent): void => {
    e.preventDefault()
    if (password !== repassword) {
      setError('Passward missmatch')
      return
    }
    dispatch(registerUser(names, email, password))
    dispatch(loadUser())
  }
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
      <div
        className='register'
        css={css`
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          width: 400px;
        `}
      >
        <h1
          css={css`
            text-align: center;
            padding: 0 1rem;
          `}
        >
          Register
        </h1>

        <form
          onSubmit={e => handleRegistration(e)}
          css={css`
            padding: 30px 40px;
          `}
        >
          {error && <h3>{error}</h3>}
          <div
            className='form-control'
            css={css`
              margin-bottom: 10px;
              padding-bottom: 20px;
              position: relative;
            `}
          >
            <label
              htmlFor='fullname'
              css={css`
                display: inline-block;
                margin-bottom: 5px;
              `}
            >
              Full names
            </label>
            <input
              type='text'
              placeholder='Enter fulll name'
              id='fullname'
              value={names}
              onChange={e => setnames(e.target.value)}
              required
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
              `}
            />
          </div>

          <div
            className='form-control'
            css={css`
              margin-bottom: 10px;
              padding-bottom: 20px;
              position: relative;
            `}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Enter fulll name'
              id='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
              `}
            />
          </div>

          <div
            className='form-control'
            css={css`
              margin-bottom: 10px;
              padding-bottom: 20px;
              position: relative;
            `}
          >
            <label htmlFor='password1'>Password</label>
            <input
              type='password'
              placeholder='Enter fulll name'
              id='password1'
              value={password}
              onChange={e => setpassword(e.target.value)}
              required
              autoComplete='false'
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
              `}
            />
          </div>

          <div
            className='form-control'
            css={css`
              margin-bottom: 10px;
              padding-bottom: 20px;
              position: relative;
            `}
          >
            <label htmlFor='password2'>Re-enter you Password</label>
            <input
              type='password'
              placeholder='Enter fulll name'
              id='password2'
              value={repassword}
              required
              onChange={e => setrepassword(e.target.value)}
              autoComplete='false'
              css={css`
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                font-size: 14px;
                font-family: inherit;
              `}
            />
          </div>
          <input
            type='submit'
            value='Submit'
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

export default RegisterPage
