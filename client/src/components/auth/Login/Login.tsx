import React from 'react'
import './Login.css'

function Login() {
	return (
		<div className='login'>
			<h1>Login</h1>

			<form>
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input type='text' placeholder='Enter full name' id='email' />
				</div>

				<div className='form-control'>
					<label htmlFor='password1'>Password</label>
					<input type='password' placeholder='Enter your password' id='password1' />
				</div>

				<input type='submit' value='Login into your account' />
			</form>
		</div>
	)
}

export default Login
