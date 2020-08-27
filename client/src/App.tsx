import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/products'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Register from './components/auth/Register/Register'
import Login from './components/auth/Login/Login'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Products />
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
