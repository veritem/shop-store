import React from 'react'
import './Header.css'
import CatHeader from '../../components/Categories/CatHeader'
// import logo from './cart.svg'
// import accountIcon from './account.svg'
import SearchBar from '../../components/SearchBar/SearchBar'
import SubHeader from '../../components/subheader/SubHeader'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<SubHeader />
			<nav>
				<div className='logo'>Rustique</div>
				<div className='searchbar'>
					<SearchBar />
				</div>
				<div className='more'>
					<Link to='#'>
						<i className='far fa-heart' />
						<p>Your wish list</p>
					</Link>
					<Link to='cart'>
						<i className='fas fa-cart-plus' />
						<p>Your cart</p>
					</Link>
				</div>
			</nav>
			<CatHeader />
		</>
	)
}

export default Header
