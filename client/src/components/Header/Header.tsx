import React from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'

function Header() {
	// function handleDropDown() {
	// 	document.querySelector('.dropdown ul')?.classList.toggle('active')
	// }

	// function handleDropDownItem(e: any) {
	// 	console.log(e)
	// }

	return (
		<nav>
			<div className='logo'>AMAVON</div>
			<div className='searchBar'>
				{/* <div className='search_box'>
					<div className='dropdown'>
						<div className='default_option' onClick={handleDropDown}>
							All
						</div>
						<ul>
							<li onClick={handleDropDownItem}>All</li>
							<li onClick={handleDropDownItem}>Recent</li>
							<li onClick={handleDropDownItem}>Popular</li>
						</ul>
					</div>
					<div className='search_field'>
						<input type='text' className='input' placeholder='search' />
						<i className='fas fa-search' />
					</div>
				</div>  */}
			</div>
			<div className='otherLinks'>
				<a href='makuza'>SignIn</a>
				<a href='makuza'>SignIn</a>
				<a href='makuza'>SignIn</a>
			</div>
		</nav>
	)
}

export default Header
