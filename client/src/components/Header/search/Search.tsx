import React, { useState } from 'react'
import './Search.css'

interface SearchProps {
	searchSuggestions: string[]
}

function Search(searchProp: SearchProps) {
	const [activeSugg, setActiveSugg] = useState<number>(0)
	const [filteredSuggestion, setFilteredSuggestion] = useState<string[]>([])
	const [showSuggestions, setShowSuggestions] = useState<boolean>(true)
	const [searchQuery, setSearchQuery] = useState<string>('')

	const onchange = (search: string) => {
		const { searchSuggestions } = searchProp
		setSearchQuery(search)

		const filterSuggestions = searchSuggestions.filter(
			(suggestion) => suggestion.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
		)

		setActiveSugg(0)
		setFilteredSuggestion(filterSuggestions)
		setShowSuggestions(true)
		setSearchQuery(search)
	}

	const onclick = () => {
		setActiveSugg(0)
		setFilteredSuggestion([])
		setShowSuggestions(false)
	}

	const onkeydown = (keycode: number) => {
		if (keycode === 13) {
			setActiveSugg(0)
			setShowSuggestions(false)
			setSearchQuery(filteredSuggestion[activeSugg])
		} else if (keycode === 13) {
			if (activeSugg === 0) {
				return
			}
			setActiveSugg(activeSugg - 1)
		} else if (keycode === 40) {
			if (activeSugg - 1 === filteredSuggestion.length) {
				return
			}
			setActiveSugg(activeSugg + 1)
		}
	}

	let listsuggestion
	if (showSuggestions && searchQuery) {
		if (filteredSuggestion.length) {
			listsuggestion = (
				<div className='searchResults'>
					<ul className='suggestions'>
						{filteredSuggestion.map((suggestion, index) => {
							return (
								<li key={suggestion} onClick={onclick}>
									{suggestion}
								</li>
							)
						})}
					</ul>
				</div>
			)
		} else {
			listsuggestion = (
				<div className='searchResults'>
					<div className='no suggestion'>
						<em>No suggestion</em>
					</div>
				</div>
			)
		}
	}

	return (
		<section className='searchProduct'>
			<input
				type='search'
				value={searchQuery}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
					onchange(ev.target.value)
				}
				onKeyDown={(ev: React.KeyboardEvent<HTMLInputElement>): void =>
					onkeydown(ev.keyCode)
				}
			/>

			{listsuggestion}
		</section>
	)
}

export default Search
