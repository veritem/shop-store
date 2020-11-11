/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'

export interface Isuggestions {
  _id: string
  name: string
  price: number
  slug: string
  inStock: string
  imageUrl: string
  category: string
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
            {suggestionResults.length > 0 ? (
              <p>{JSON.stringify(suggestionResults)}</p>
            ) : (
              <p>No product found</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default SuggestionsList
