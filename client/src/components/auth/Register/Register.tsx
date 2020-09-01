import React from 'react'
import './Register.css'

function Register() {
	return (
		<div className='register'>
			<h1>Register</h1>

			<form>
				<div className='form-control'>
					<label htmlFor='fullname'>Full names</label>
					<input type='text' placeholder='Enter fulll name' id='fullname' />
				</div>

				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input type='text' placeholder='Enter fulll name' id='email' />
				</div>

				<div className='form-control'>
					<label htmlFor='password1'>Password</label>
					<input type='text' placeholder='Enter fulll name' id='password1' />
				</div>

				<div className='form-control'>
					<label htmlFor='password2'>Re-enter you Password</label>
					<input type='text' placeholder='Enter fulll name' id='password2' />
				</div>

				<input type='submit' value='Submit' />
			</form>
		</div>
	)
}

export default Register
