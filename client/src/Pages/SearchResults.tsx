import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Isuggestions } from 'src/components/SuggestionsList'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const SearchResults: React.FC = () => {
  const query = useQuery()
  const [searchResults, setSearchResults] = useState<Isuggestions[]>([
    { _id: '', name: '' },
  ])

  useEffect(() => {
    async function searchProduct(query: string) {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/search/?product=${query}`
        )
        console.log(result)
        setSearchResults(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    searchProduct((query as unknown) as string)
  }, [query])

  return <div>searchResults{JSON.stringify(searchResults)}</div>
}

export default SearchResults
