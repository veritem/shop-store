import React, { useState } from 'react'
import { loadUser, login } from '../../../store/actionsCreators/authActions'
import './Login.css'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleForms = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      login(email, password)
      loadUser()
    }
  }

  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={e => handleForms(e)}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
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
          />
        </div>

        <input type='submit' value='Login into your account' />
      </form>
    </div>
  )
}

export default Login
