import React from 'react'
import './Login.css'

function Login() {
	return (
		<div className='login'>
			<h1>Login</h1>

			<form>
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input type='text' placeholder='Enter fulll name' id='email' />
				</div>

				<div className='form-control'>
					<label htmlFor='password1'>Password</label>
					<input type='text' placeholder='Enter fulll name' id='password1' />
				</div>

				<input type='submit' value='Submit' />
			</form>
		</div>
	)
}

export default Login
