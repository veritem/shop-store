import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/products'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { routes } from './routing/routes'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Products />
				</Route>
				<Route component={routes} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
