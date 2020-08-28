import React from 'react'
import './Header.css'
import CatHeader from '../../components/Categories/CatHeader'
import logo from './cart.svg'
import accountIcon from './account.svg'

function Header() {
	return (
		<>
			<nav>
				<div className='logo'>Rustique</div>
				<div className='searchbar'>search</div>
				<div className='more'>
					<img src={logo} alt='cart' />
					<img src={accountIcon} alt='account' />
				</div>
			</nav>
			<CatHeader />
		</>
	)
}

export default Header
