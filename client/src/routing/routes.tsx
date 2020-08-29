import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../components/auth/Register/Register'
import Login from '../components/auth/Login/Login'
import Cart from '../containers/Cart/Cart'

export const routes = () => {
	return (
		<>
			<Switch>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</>
	)
}
