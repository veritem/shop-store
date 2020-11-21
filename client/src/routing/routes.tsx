import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Category from 'src/Pages/Category'
import ProductDetails from 'src/Pages/ProductDetails'
import SearchResults from 'src/Pages/SearchResults'
import Cart from '../Pages/Cart'
import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'

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
        <Route path='/s'>
          <SearchResults />
        </Route>
        <Route path='/p/:id'>
          <ProductDetails />
        </Route>
        <Route path='/c/:id'>
          <Category />
        </Route>
      </Switch>
    </>
  )
}
