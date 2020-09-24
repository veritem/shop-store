import React from 'react'
import './Cart.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { cartStateType } from '../../store/types/cart'
import { removeFromCart } from '../../store/actionsCreators/cartsActions'

function Cart() {
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

  return (
    <section className='Cart'>
      <div className='card_list'>
        <div className='cart_list_header'>
          <h2>Shopping Cart</h2>
          <h2>{items.length} Items</h2>
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
                  <button>+</button>
                  <p>0</p>
                  <button>-</button>
                </div>
              </div>
            ))
          ) : (
            <h1>Nothing in your cart</h1>
          )}
        </div>

        <div className='back'>
          <Link to='/'>
            {' '}
            <i className='fas fa-arrow-left' /> Continue Shopping
          </Link>
        </div>
      </div>

      <div className='order_summary'>
        <div className='order_summ_header'>
          <h2>Order summary</h2>
        </div>
        <div className='order_summary_header'>
          <h3>3 Items</h3>
          <h3>$2040</h3>
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
          <p>$20200</p>
        </div>

        <button className='checkout'>CHECKOUT</button>
      </div>
    </section>
  )
}

export default Cart
