import React from 'react'
import imac from '../../assets/products/imac.png'
import shoe from '../../assets/products/shoe.png'
import watch from '../../assets/products/watch.png'
import fashion from '../../assets/products/fashion.png'
import './Fromfavbarnd.css'

function Fromfavbarnd() {
	return (
		<section className='favouriteBrand'>
			<h1>From all of you favourite brands</h1>

			<div className='products'>
				<div>
					<img src={imac} alt='imac_png' />
					<p className='description'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.
					</p>

					<div className='price'>
						<h3>$100</h3>
						<p>from $200</p>
					</div>
					<button>Add to cart</button>
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
					<button>Add to cart</button>
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
					<button>Add to cart</button>
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

					<button>Add to cart</button>
				</div>
			</div>
		</section>
	)
}

export default Fromfavbarnd
