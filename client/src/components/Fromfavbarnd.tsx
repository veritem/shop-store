/** @jsx jsx */

import { addtoCart } from '../store/actions/cartsActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { Product, productStateType } from '../store/types/product'
import { useHistory } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

function Fromfavbarnd() {
  const dispatch = useDispatch()
  const productsState: productStateType = useSelector(
    (state: RootState) => state.products
  )

  const { data } = productsState
  const history = useHistory()

  const addToCart = (product: Product) => {
    dispatch(addtoCart(product))
    history.push('/cart')
  }

  return (
    <section
      css={css`
        padding: 4rem 3rem;
      `}
    >
      <h1
        css={css`
          text-align: center;
          margin-bottom: 2rem;
        `}
      >
        From all of your favourite brands
      </h1>

      <div
        css={css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1rem;
        `}
      >
        {data.length > 0 ? (
          data.map(item => (
            <div
              key={item.id}
              css={css`
                background-color: #fff;
                padding: 1rem 0.5rem;
                border-radius: 2px;
                text-align: center;
              `}
            >
              <img
                src={item.imageUrl}
                alt='imac_png'
                css={css`
                  width: 100%;
                  height: 200px;
                `}
              />
              <p
                css={css`
                  text-align: left;
                `}
              >
                {item.description}
              </p>

              <div
                css={css`
                  text-align: left;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin: 10px 0;
                `}
              >
                <h3
                  css={css`
                    text-align: left;
                    font-size: 2rem;
                  `}
                >
                  ${item.price}
                </h3>
                <p
                  css={css`
                    text-align: left;
                    color: rgb(134, 134, 134);
                    text-decoration: line-through;
                    color: #ec3752;
                  `}
                >
                  from ${item.price * item.price + 100}{' '}
                </p>
              </div>
              <button
                onClick={() => addToCart(item)}
                css={css`
                  color: #fff;
                  border: none;
                  padding: 10px 20px;
                  border-radius: 10px;
                  cursor: pointer;
                  outline: none;
                  background-color: #ec3752;
                  width: 100%;
                `}
              >
                Shop now
              </button>
            </div>
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </section>
  )
}

export default Fromfavbarnd
