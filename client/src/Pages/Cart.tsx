/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { cartStateType } from '../store/types/cart'
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from '../store/actions/cartsActions'
import { countItems, countItemsPrice } from '../utils/cartItemsHelpers'

import StripeCheckout from 'react-stripe-checkout'

function Cart() {
  const product = {
    name: 'AMAVON',
    price: 10,
    productBy: 'Amazon',
  }

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
      .then(response => {
        console.log(response)
        const { status } = response
        console.log('STATUS ', status)
      })
      .catch(error => console.log(error))
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
    <section
      css={css`
        width: 900px;
        margin: 5rem auto;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div className='card_list'>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
          `}
        >
          <h2
            css={css`
              padding-bottom: 1rem;
              margin-right: 15rem;
            `}
          >
            Shopping Cart
          </h2>
          <h2
            css={css`
              padding-bottom: 1rem;
            `}
          >
            {countItems(cartItem)} Items
          </h2>
        </div>

        <div className='product_list_items'>
          {items.length > 0 ? (
            items.map(item => (
              <div
                className='product_list_item'
                key={item.id}
                css={css`
                  display: grid;
                  width: 600px;
                  grid-template-columns: 40% 50% 10%;
                  justify-content: center;
                  align-items: center;
                  border-bottom: 1px solid #ccc;
                `}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  css={css`
                    width: 200px;
                    height: 200px;
                  `}
                />
                <div
                  className='product_desc'
                  css={css`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  {item.description}
                  <p
                    onClick={() => removeItemFromCart(item.id)}
                    css={css`
                      color: var(--dark-red);
                      margin-top: 10px;
                      cursor: pointer;
                    `}
                  >
                    Remove
                  </p>
                </div>
                <div
                  className='cart_operation'
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  `}
                >
                  <button
                    onClick={() => HandleincrementItem(item.id)}
                    css={css`
                      background-color: #d40000;
                      border: 1px solid #d40000;
                      color: #fff;
                      padding: 10px;
                      margin: 5px;
                      border-radius: 5px;
                      cursor: pointer;
                      outline: none;
                    `}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleDcrementItem(item.id)}
                    css={css`
                      background-color: #d40000;
                      border: 1px solid #d40000;
                      color: #fff;
                      padding: 10px;
                      margin: 5px;
                      border-radius: 5px;
                      cursor: pointer;
                      outline: none;
                      &:hover {
                        transition: scale(1.2);
                      }
                    `}
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>Nothing in your cart</h1>
          )}
        </div>

        <div
          className='back'
          css={css`
            margin-top: 10px;
          `}
        >
          <Link
            to='/'
            css={css`
              text-decoration: none;
              color: #d40000;
            `}
          >
            <i className='fas fa-arrow-left' /> Continue Shopping
          </Link>
        </div>
      </div>

      {items.length > 0 && (
        <div
          css={css`
            width: 15rem;
          `}
        >
          <div
            css={css`
              border-bottom: 1px solid #ccc;
            `}
          >
            <h2
              css={css`
                padding-bottom: 1rem;
                text-align: center;
              `}
            >
              Order summary
            </h2>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 2rem;
            `}
          >
            <h3>{countItems(cartItem)} Items</h3>
            <h3> ${countItemsPrice(cartItem)}</h3>
          </div>

          <div
            css={css`
              margin-bottom: 1.5rem;
              > * {
                display: block;
                margin-bottom: 10px;
                width: 100%;
              }
            `}
          >
            <label htmlFor='shipping'>Shipping adress</label>
            <input
              type='text'
              id='shipping adress'
              css={css`
                margin-left: 1rem;
                background-color: transparent;
                border: 1px solid #ccc;
                color: #fff;
                width: 100%;
                font-size: 1rem;
                padding: 5px 10px;
                border-radius: 5px;
                outline: none;
              `}
            />
          </div>

          <div
            css={css`
              > * {
                display: inline-block;
              }
            `}
          >
            <label htmlFor='promocode'>Promo code</label>
            <input
              type='text'
              id='promocode'
              css={css`
                border: 1px solid #ccc;
                background-color: transparent;
                padding: 3px;
                outline: none;
                border-radius: 5px;
              `}
            />
            <input
              type='submit'
              value='APPLY'
              css={css`
                margin-left: 1rem;
                background-color: var(--dark-red);
                border: none;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                outline: none;
              `}
            />
          </div>

          <div
            className='cost'
            css={css`
              display: flex;
              justify-content: space-between;
              margin-top: 1rem;
              margin-bottom: 1rem;
              font-weight: bolder;
              font-size: 1.5rem;
            `}
          >
            <p>Total cost</p>
            <p>${countItemsPrice(cartItem)}</p>
          </div>

          <StripeCheckout
            stripeKey={`${process.env.REACT_APP_STRIPE_KEY}`}
            token={makePayment}
            name='By this product'
            amount={product.price * 100}
          >
            <button
              className='checkout'
              css={css`
                background-color: var(--dark-red);
                color: #fff;
                width: 100%;
                padding: 10px 20px;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                outline: none;
              `}
            >
              CHECKOUT
            </button>
          </StripeCheckout>
        </div>
      )}
    </section>
  )
}

export default Cart
