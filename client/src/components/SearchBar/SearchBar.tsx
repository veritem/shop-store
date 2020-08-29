import React, { MouseEvent } from 'react'
import './SearchBar.css'

function SearchBar() {
	function handleCatList() {
		const categoriesList = document.querySelector('.searchCat ul')
		categoriesList?.classList.toggle('showList')
	}

	function handleToggle(event: MouseEvent<HTMLLIElement>) {
		const selectedValue = event.currentTarget.innerText
		document.querySelector<HTMLSpanElement>('.current_cat span')!.innerText = selectedValue
		document.querySelector('.searchCat ul')?.classList.remove('showList')
	}

	return (
		<div className='searchBar'>
			<div className='searchCat'>
				<div className='current_cat' onClick={handleCatList}>
					<span>All</span> <i className='fas fa-caret-down'></i>
				</div>
				<ul>
					<li onClick={handleToggle}>All</li>
					<li onClick={handleToggle}>Food</li>
					<li onClick={handleToggle}>Fashion</li>
					<li onClick={handleToggle}>Tvs</li>
					<li onClick={handleToggle}>Electronics</li>
					<li onClick={handleToggle}>Hardware</li>
					<li onClick={handleToggle}>Food</li>
					<li onClick={handleToggle}>Fashion</li>
					<li onClick={handleToggle}>Tvs</li>
					<li onClick={handleToggle}>Electronics</li>
					<li onClick={handleToggle}>Hardware</li>
					<li onClick={handleToggle}>Food</li>
					<li onClick={handleToggle}>Fashion</li>
					<li onClick={handleToggle}>Tvs</li>
					<li onClick={handleToggle}>Electronics</li>
					<li onClick={handleToggle}>Hardware</li>
				</ul>
			</div>
			<input
				type='text'
				name='searchbox'
				id='searching'
				autoFocus
				placeholder='Search in more 200000 products'
			/>
			{/* <i className='fas fa-search'></i> */}
		</div>
	)
}

export default SearchBar
