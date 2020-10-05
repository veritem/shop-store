/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import { MouseEvent, useRef } from 'react'
import { useTypedSelector } from 'src/store/reducers'
import { categoryStateType } from 'src/store/types/category'

function SearchBar() {
  const cat_list = useRef<HTMLUListElement | null>(null)
  const cat_curr = useRef<HTMLSpanElement | null>(null)
  const [showList, setShowList] = useState<boolean>(false)

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

  return (
    <div
      css={css`
        width: 500px;
        background-color: #ffff;
        border-radius: 2rem;
        display: flex;
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
        css={css`
          width: 100%;
          padding: 0 1rem;
          font-size: 1rem;
          border: none !important;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        `}
      />
    </div>
  )
}

export default SearchBar
