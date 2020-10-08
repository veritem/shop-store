import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../Pages/Cart'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'

export const routes = () => {
  return (
    <>
      <Switch>
        <Route path='/cart'>
          <Cart />
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
