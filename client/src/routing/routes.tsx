import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Category from 'src/pages/Category'
import ProductDetails from 'src/pages/ProductDetails'
import SearchResults from 'src/pages/SearchResults'
import Cart from '../pages/Cart'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import Admin from '../pages/admin'
import Order from 'src/pages/admin/orders'
import Products from 'src/pages/admin/products'
import Users from 'src/pages/admin/users'
import NotFound from 'src/pages/NotFound'

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
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route path='/admin/orders'>
          <Order />
        </Route>
        <Route path='/admin/products'>
          <Products />
        </Route>
        <Route path='/admin/users'>
          <Users />
        </Route>
        <Route path='/***'>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}
