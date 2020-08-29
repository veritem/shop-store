import React from 'react'
import './MartkettingBanner.css'
import cartImg from '../../assets/others/1cart.png'
import { Link } from 'react-router-dom'

function MartkettingBanner() {
	return (
		<div className='banner'>
			<div>
				<h2>
					What are you still waiting for its time for you to buy what you like at the
					cheapest costs you can't find anywhere.
				</h2>
				<Link to='#'>Shop now</Link>
			</div>
			<div>
				<img src={cartImg} alt='Cart' />
			</div>
		</div>
	)
}

export default MartkettingBanner
