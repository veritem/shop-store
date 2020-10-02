import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { appDispatch } from 'src/store'
import { loadUser, registerUser } from 'src/store/actions/authActions'
import './Register.css'

function Register() {
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
    <div className='register'>
      <h1>Register</h1>

      <form onSubmit={e => handleRegistration(e)}>
        {error && <h3>{error}</h3>}
        <div className='form-control'>
          <label htmlFor='fullname'>Full names</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='fullname'
            value={names}
            onChange={e => setnames(e.target.value)}
            required
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Enter fulll name'
            id='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password1'>Password</label>
          <input
            type='password'
            placeholder='Enter fulll name'
            id='password1'
            value={password}
            onChange={e => setpassword(e.target.value)}
            required
            autoComplete='false'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password2'>Re-enter you Password</label>
          <input
            type='password'
            placeholder='Enter fulll name'
            id='password2'
            value={repassword}
            required
            onChange={e => setrepassword(e.target.value)}
            autoComplete='false'
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Register
