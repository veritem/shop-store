import { css } from '@emotion/core'
import React from 'react'
import { Link } from 'react-router-dom'

export interface Isuggestions {
  _id: string
  name: string
  price: number
  slug: string
  inStock: string
  imageUrl: string
  category: string
  description: string
}

interface SuggestionsListProps {
  isSuggestionOpen: boolean
  suggestionResults: Isuggestions[]
}

export const SuggestionsList: React.FC<SuggestionsListProps> = ({
  isSuggestionOpen,
  suggestionResults,
}): React.ReactElement => {
  return (
    <>
      {isSuggestionOpen && (
        <div
          css={css`
            position: absolute;
            top: 3rem;
            width: 100%;
            background: #fff;
            height: 300px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
            border-radius: 0.2rem;
          `}
        >
          <div>
            {suggestionResults.map(suggestion => (
              <Link
                to={`/p/${suggestion._id}`}
                key={`${suggestion._id}`}
                css={css`
                  display: block;
                  color: #000;
                  margin: 1rem;
                  text-decoration: none;
                  padding: 0.75rem;
                  border-bottom: 1px solid #ccc;
                  &:hover {
                    background-color: #ccc;
                  }
                `}
              >
                <h5>{suggestion.name}</h5>
                <p>{suggestion.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default SuggestionsList
