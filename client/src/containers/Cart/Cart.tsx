import React from 'react'
import './Cart.css'

import imac from '../../assets/products/imac.png'
import { Link } from 'react-router-dom'

function Cart() {
	return (
		<section className='Cart'>
			<div className='card_list'>
				<div className='cart_list_header'>
					<h2>Shopping Cart</h2>
					<h2>3 Items</h2>
				</div>

				<div className='product_list_items'>
					<div className='product_list_item'>
						<img src={imac} alt='imac' />
						<div className='product_desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
							voluptates.
							<p> Remove </p>
						</div>
						<div className='cart_operation'>
							<button>+</button>
							<p contentEditable>0</p>
							<button>-</button>
						</div>
					</div>
				</div>

				<div className='product_list_items'>
					<div className='product_list_item'>
						<img src={imac} alt='imac' />
						<div className='product_desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
							voluptates.
							<p> Remove </p>
						</div>
						<div className='cart_operation'>
							<button>+</button>
							<p contentEditable>0</p>
							<button>-</button>
						</div>
					</div>
				</div>

				<div className='product_list_items'>
					<div className='product_list_item'>
						<img src={imac} alt='imac' />
						<div className='product_desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
							voluptates.
							<p> Remove </p>
						</div>
						<div className='cart_operation'>
							<button>+</button>
							<p contentEditable>0</p>
							<button>-</button>
						</div>
					</div>
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
