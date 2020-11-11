/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { FormEvent } from 'react'
import { MouseEvent, KeyboardEvent, useRef, useState } from 'react'
import { useTypedSelector } from 'src/store/reducers'
import { categoryStateType } from 'src/store/types/category'
import SuggestionsList from './SuggestionsList'

function SearchBar() {
  const cat_list = useRef<HTMLUListElement | null>(null)
  const cat_curr = useRef<HTMLSpanElement | null>(null)
  const [showList, setShowList] = useState<boolean>(false)
  const [showSuggestions, setshowSuggestions] = useState<boolean>(false)

  const CategoryState: categoryStateType = useTypedSelector(
    state => state.categories
  )

  function handleCatList() {
    setShowList(true)
  }

  function handleToggle(event: MouseEvent<HTMLLIElement>) {
    const selectedValue = event.currentTarget.innerText
    cat_curr.current!.innerText = selectedValue
    setShowList(false)
  }

  function onkeydown(e: KeyboardEvent<HTMLInputElement>): any {
    setshowSuggestions(true)
    if (e.key === 'Enter') {
      setshowSuggestions(false)
    }
  }
  function insertUrlParam(key: string, value: string) {
    let searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, value)
    let newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?' +
      searchParams.toString()
    window.history.pushState({ path: newurl }, '', newurl)
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const query = e.currentTarget.value
    insertUrlParam('query', query)
  }

  return (
    <div
      css={css`
        width: 500px;
        background-color: #ffff;
        border-radius: 2rem;
        display: flex;
        position: relative;
      `}
    >
      <div
        css={css`
          background-color: var(--whitish);
          padding: 0.5rem 1.2rem;
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
          position: relative;
          cursor: pointer;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
          onClick={handleCatList}
        >
          <span
            ref={cat_curr}
            css={css`
              margin-right: 1rem;
              width: max-content;
            `}
          >
            All
          </span>
          <i className='fas fa-caret-down'></i>
        </div>
        <ul
          ref={cat_list}
          css={css`
            display: ${showList ? 'block' : 'none'};
            position: absolute;
            background-color: #fff;
            list-style-type: none;
            left: 0rem;
            top: 2.5rem;
            width: 200%;
            text-align: center;
            padding: 0.5rem 0.5rem;
            overflow-y: auto;
            height: 200px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            border-radius: 0.1rem;
            z-index: 100;
          `}
        >
          <li onClick={handleToggle}>All</li>
          {CategoryState.categories.map((cat, index) => (
            <li
              key={`${index}`}
              onClick={handleToggle}
              css={css`
                &:hover {
                  background-color: var(--second-whitish);
                  color: #f1f1f1;
                  cursor: pointer;
                }
              `}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <input
        type='text'
        name='searchbox'
        id='searching'
        autoFocus
        placeholder='Search in more 200000 products'
        onKeyDown={onkeydown}
        onChange={handleChange}
        css={css`
          width: 100%;
          padding: 0 1rem;
          font-size: 1rem;
          outline: none;
          border: none !important;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        `}
      />
      <SuggestionsList isSuggestionOpen={showSuggestions} />
    </div>
  )
}

export default SearchBar
