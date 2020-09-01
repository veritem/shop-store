import React from 'react'

function ProductDetails() {
	return (
		<section>
			<div className='product'>
				<h1>Product photo</h1>
			</div>

			<div>
				<p>Product className</p>
				<p>Product Description</p>
				<div>
					<input type='number' name='prod_num' value='1' min='1' max='1000' />
				</div>
				<button>Add to cart</button>
			</div>

			<h1>More products </h1>
		</section>
	)
}

export default ProductDetails
