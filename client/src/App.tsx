import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { routes } from './routing/routes'
import Home from './containers/Home/Home'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route component={routes} />
			</Switch>
		</Router>
	)
}

export default App
