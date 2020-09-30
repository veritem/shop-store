import React, { useState } from 'react'
import './Register.css'

function Register() {
  const [names, setnames] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setpassword] = useState<string>()
  const [repassword, setrepassword] = useState<string>()

  const handleRegistration = (e: React.FormEvent): void => {
    e.preventDefault()
  }

  return (
    <div className='register'>
      <h1>Register</h1>

      <form onSubmit={e => handleRegistration(e)}>
        <div className='form-control'>
          <label htmlFor='fullname'>Full names</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='fullname'
            value={names}
            onChange={e => setnames(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password1'>Password</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='password1'
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password2'>Re-enter you Password</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='password2'
            value={repassword}
            onChange={e => setrepassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Register
