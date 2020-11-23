/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { useEffect } from 'react'
import CatHeader from './CatHeader'
import SearchBar from './SearchBar'
import SubHeader from './SubHeader'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { appDispatch } from 'src/store'
import { fetchCategories } from 'src/store/actions/categoriesActions'

function Header() {
  const dispatch: appDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <>
      <SubHeader />
      <nav
        css={css`
          background-color: #ef464d;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: Lato, sans-serif;
          padding: 0.4rem 0rem;
        `}
      >
        <Link
          to={'/'}
          css={css`
            color: var(--whitish);
            font-weight: 800;
            font-size: 1.5rem;
            text-decoration: none;
          `}
        >
          Rustique
        </Link>
        <div className='searchbar'>
          <SearchBar />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            text-align: center;
          `}
        >
          <Link
            to='#'
            css={css`
              text-decoration: none;
              margin-right: 1rem;
              color: #fff;
            `}
          >
            <i
              className='far fa-heart'
              css={css`
                font-size: 1.5rem;
                color: #fff;
                text-align: center;
              `}
            />
            <p>Your wish list</p>
          </Link>
          <Link
            to='cart'
            css={css`
              text-decoration: none;
              margin-right: 1rem;
              color: #fff;
            `}
          >
            <i
              className='fas fa-cart-plus'
              css={css`
                font-size: 1.5rem;
                color: #fff;
                text-align: center;
              `}
            />
            <p>Your cart</p>
          </Link>
        </div>
      </nav>
      <CatHeader />
    </>
  )
}

export default Header
