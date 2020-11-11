/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'

interface SuggestionsListProps {
  isSuggestionOpen: boolean
}

export const SuggestionsList: React.FC<SuggestionsListProps> = ({
  isSuggestionOpen,
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
          Hello
        </div>
      )}
    </>
  )
}
export default SuggestionsList
