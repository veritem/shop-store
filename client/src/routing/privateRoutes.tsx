import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const privateRoutes: React.FC<{ component: React.FC; path: string; exact: boolean }> = (props) => {
	const isAuth = false

	return isAuth ? (
		<Route path={props.path} exact={props.exact} component={props.component} />
	) : (
		<Redirect to='/login' />
	)
}

export default privateRoutes
