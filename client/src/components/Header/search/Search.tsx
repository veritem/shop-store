import React, { useState } from 'react'

interface SearchProps {
	searchSuggestions: string[]
}

type EventHandlerProps = {
	onchange: (e: React.FormEvent<HTMLInputElement>) => void
	onkeydown: (e: React.FormEvent<HTMLInputElement>) => void
}

function Search(searchProp: SearchProps, eventFunc: EventHandlerProps) {
	const [activeSugg, setActiveSugg] = useState(0)
	const [filteredSuggestion, setFilteredSuggestion] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const [searchQuery, setSearchQuery] = useState('makuza')

	//  onchange  (e: React.FormEvent<HTMLInputElement>) => {
	// 	const { searchSuggestions } = searchProp
	// 	// setSearchQuery(e.currentTarget.value)
	// }
	// onkeydown = (e) => {
	// 	console.log(e)
	// }

	onchange: eventFunc.onchange = (e) => {
		console.log(e)
	}

	onkeydown: eventFunc.onkeydown = (e) => {
		console.log(e)
	}

	return (
		<>
			<input type='text' onChange={onchange} onKeyDown={onkeydown} value={searchQuery} />
		</>
	)
}

export default Search
