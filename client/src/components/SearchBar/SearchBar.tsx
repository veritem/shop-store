import React, { MouseEvent, useRef } from 'react'
import './SearchBar.css'

function SearchBar() {
	const cat_list = useRef<HTMLUListElement | null>(null)
	const cat_curr = useRef<HTMLSpanElement | null>(null)

	function handleCatList() {
		cat_list.current?.classList.toggle('showList')
	}

	function handleToggle(event: MouseEvent<HTMLLIElement>) {
		const selectedValue = event.currentTarget.innerText
		cat_curr.current!.innerText = selectedValue
		cat_list.current?.classList.remove('showList')
	}

	return (
		<div className='searchBar'>
			<div className='searchCat'>
				<div className='current_cat' onClick={handleCatList}>
					<span ref={cat_curr}>All</span> <i className='fas fa-caret-down'></i>
				</div>
				<ul ref={cat_list}>
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
