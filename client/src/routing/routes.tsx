import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../containers/Cart/Cart'
import LoginPage from '../containers/Login/LoginPage'
import RegisterPage from '../containers/RegisterPage/RegisterPage'
import ProductDetails from '../containers/ProductDetails/ProductDetails'

export const routes = () => {
	return (
		<>
			<Switch>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route>
					<ProductDetails />
				</Route>
				<Route path='/register'>
					<RegisterPage />
				</Route>
				<Route path='/login'>
					<LoginPage />
				</Route>
			</Switch>
		</>
	)
}
