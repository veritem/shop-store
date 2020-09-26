import React from 'react'
import './Fromfavbarnd.css'
import { addtoCart } from '../../store/actionsCreators/cartsActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { Product, productStateType } from '../../store/types/product'
import { useHistory } from 'react-router-dom'

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
    <section className='favouriteBrand'>
      <h1>From all of your favourite brands</h1>

      <div className='products'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt='imac_png' />
              <p className='description'>{item.description}</p>

              <div className='price'>
                <h3>${item.price}</h3>
                <p>from ${item.price * item.price + 100} </p>
              </div>
              <button onClick={() => addToCart(item)}>Shop now</button>
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
