import React, { useState } from 'react'
import imac from '../../assets/products/imac.png'
import './ProductDetails.css'

function ProductDetails() {
	const [quantity, setQuantity] = useState<string>('0')

	return (
		<>
			<section className='product_description'>
				<div className='product'>
					<img src={imac} alt='imac' />
				</div>
				<div className='product_info'>
					<h1>Product className rating</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi id
						asperiores iusto itaque nemo inventore qui, doloremque dolorum pariatur
						harum dignissimos? Quaerat illo repellendus temporibus! Voluptate rem
						aliquid illum odio.
					</p>
					<div>
						<input
							type='number'
							name='prod_num'
							min='1'
							max='1000'
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>
					<button>
						<i className='fas fa-cart-plus' /> Add to cart
					</button>
				</div>
			</section>
		</>
	)
}

export default ProductDetails
