import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Category from 'src/Pages/Category'
import ProductDetails from 'src/Pages/ProductDetails'
import SearchResults from 'src/Pages/SearchResults'
import Cart from '../Pages/Cart'
import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import Admin from '../Pages/admin'
import Order from 'src/Pages/admin/orders'
import Products from 'src/Pages/admin/products'
import Users from 'src/Pages/admin/users'
import NotFound from 'src/Pages/NotFound'

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
