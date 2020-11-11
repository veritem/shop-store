/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'

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
      suggestion =>
        suggestion.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
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
        <div
          css={css`
            background-color: #fff;
            width: 100%;
            position: absolute;
            top: 4rem;
            max-height: 15rem;
            min-height: min-content;
            overflow-y: auto;
            z-index: 2;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
            padding: 10px;
            border-radius: 2px;
          `}
        >
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
        <div
          css={css`
            background-color: #fff;
            width: 100%;
            position: absolute;
            top: 4rem;
            max-height: 15rem;
            min-height: min-content;
            overflow-y: auto;
            z-index: 2;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
            padding: 10px;
            border-radius: 2px;
          `}
        >
          <div className='no suggestion'>
            <em>No suggestion</em>
          </div>
        </div>
      )
    }
  }

  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
      `}
    >
      <input
        type='search'
        value={searchQuery}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          onchange(ev.target.value)
        }
        onKeyDown={(ev: React.KeyboardEvent<HTMLInputElement>): void =>
          onkeydown(ev.keyCode)
        }
        css={css`
          input[type='search'] {
            padding: 10px 5px;
            font-size: 1.5rem;
            color: #1f5350;
            border: none;
            background-color: #ffff;
          }
        `}
      />
      {listsuggestion}
    </section>
  )
}

export default Search
