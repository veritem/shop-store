/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Isuggestions } from 'src/components/SuggestionsList'
import Header from '../components/Header'
import ProductList from 'src/components/ProductList'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const SearchResults: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setquery] = useState<string>(useQuery().toString())

  const [searchResults, setSearchResults] = useState<Isuggestions[]>([
    {
      _id: '',
      name: '',
      price: 0,
      slug: '',
      inStock: '',
      imageUrl: '',
      category: '',
      description: '',
    },
  ])

  useEffect(() => {
    async function searchProduct(query: string) {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/search/?product=${query}`
        )
        setSearchResults(result.data.data)
      } catch (error) {}
    }
    searchProduct((query as unknown) as string)
  }, [query])

  return (
    <>
      <Header />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h2
          css={css`
            margin: 2rem 0rem;
          `}
        >
          Search result found {searchResults.length}{' '}
          {searchResults.length > 1 ? 'Items' : 'Item'} for "
          {query.split('=')[1]}"
        </h2>

        {searchResults.map((product, index) => (
          <ProductList key={`${index}`} product={product} />
        ))}
      </div>
    </>
  )
}

export default SearchResults
