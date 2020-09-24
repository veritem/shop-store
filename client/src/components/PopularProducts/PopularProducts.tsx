import React from 'react'
import imac from '../../assets/products/imac.png'
import shoe from '../../assets/products/shoe.png'
import watch from '../../assets/products/watch.png'
import fashion from '../../assets/products/fashion.png'
import './PopularProducts.css'

function PopularProducts() {
	return (
		<section className='popularProducts'>
			<h1>New and Popluar Products</h1>
			<div className='popular_products_list'>
				<div>
					<img src={imac} alt='imac_png' />
					<p className='description'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.
					</p>

					<div className='price'>
						<h3>$100</h3>
						<p>from $200</p>
					</div>
					<button>Shop now</button>
				</div>
				<div>
					<img src={shoe} alt='imac_png' />
					<p className='description'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.
					</p>

					<div className='price'>
						<h3>$100</h3>
						<p>from $200</p>
					</div>
					<button>Shop now</button>
				</div>
				<div>
					<img src={watch} alt='imac_png' />
					<p className='description'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.
					</p>

					<div className='price'>
						<h3>$100</h3>
						<p>from $200</p>
					</div>
					<button>Shop now</button>
				</div>
				<div>
					<img src={fashion} alt='imac_png' />
					<p className='description'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.
					</p>

					<div className='price'>
						<h3>$100</h3>
						<p>from $200</p>
					</div>

					<button>Shop now</button>
				</div>
			</div>
		</section>
	)
}

export default PopularProducts
