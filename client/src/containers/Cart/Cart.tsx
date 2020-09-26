import React, { useState } from 'react'
import './Cart.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { cartStateType } from '../../store/types/cart'
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from '../../store/actionsCreators/cartsActions'
import { countItems, countItemsPrice } from '../../utils/cartItemsHelpers'

import StripeCheckout from 'react-stripe-checkout'

function Cart() {
  const [product, setproduct] = useState({
    name: 'AMAVON',
    price: 10,
    productBy: 'Amazon',
  })

  console.log(process.env.REACT_APP_STRIPE_KEY)

  const makePayment = (token: any) => {
    console.log(token)
    const body = {
      token,
      product,
    }
    const headers = {
      'Content-Type': 'application/json',
    }

    return fetch(`http://localhost:5000/api/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response)
        const { status } = response
        console.log('STATUS ', status)
      })
      .catch((error) => console.log(error))
  }

  const cartItem: cartStateType = useSelector(
    (state: RootState) => state.cartItem
  )

  const history = useHistory()

  const dispatch = useDispatch()

  const { items } = cartItem.data

  const removeItemFromCart = (id: string) => {
    dispatch(removeFromCart(id))
    history.push('/cart')
  }

  const HandleincrementItem = (id: string) => {
    dispatch(incrementItem(id))
  }

  const handleDcrementItem = (id: string) => {
    dispatch(decrementItem(id))
  }

  return (
    <section className='Cart'>
      <div className='card_list'>
        <div className='cart_list_header'>
          <h2>Shopping Cart</h2>
          <h2>{countItems(cartItem)} Items</h2>
        </div>

        <div className='product_list_items'>
          {items.length > 0 ? (
            items.map((item) => (
              <div className='product_list_item' key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <div className='product_desc'>
                  {item.description}
                  <p onClick={() => removeItemFromCart(item.id)}> Remove </p>
                </div>
                <div className='cart_operation'>
                  <button onClick={() => HandleincrementItem(item.id)}>
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleDcrementItem(item.id)}>-</button>
                </div>
              </div>
            ))
          ) : (
            <h1>Nothing in your cart</h1>
          )}
        </div>

        <div className='back'>
          <Link to='/'>
            <i className='fas fa-arrow-left' /> Continue Shopping
          </Link>
        </div>
      </div>

      {items.length > 0 && (
        <div className='order_summary'>
          <div className='order_summ_header'>
            <h2>Order summary</h2>
          </div>
          <div className='order_summary_header'>
            <h3>{countItems(cartItem)} Items</h3>
            <h3> ${countItemsPrice(cartItem)}</h3>
          </div>

          <div className='order_shipping_adress'>
            <label htmlFor='shipping'>Shipping adress</label>
            <input type='text' id='shipping adress' />
          </div>

          <div className='promo__code'>
            <label htmlFor='promocode'>Promo code</label>
            <input type='text' id='promocode' />
            <input type='submit' value='APPLY' />
          </div>

          <div className='cost'>
            <p>Total cost</p>
            <p>${countItemsPrice(cartItem)}</p>
          </div>

          <StripeCheckout
            stripeKey={`${process.env.REACT_APP_STRIPE_KEY}`}
            token={makePayment}
            name='By this product'
            amount={product.price * 100}
          >
            <button className='checkout'>CHECKOUT</button>
          </StripeCheckout>
        </div>
      )}
    </section>
  )
}

export default Cart
