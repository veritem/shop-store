/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Fromfavbarnd from '../components/Fromfavbarnd'
import ShopByCat from '../components/ShopByCat'
import Footer from '../components/Footer'
import Slider from '../components/slider/Slider'
import MartkettingBanner from '../components/MartkettingBanner'
import PopularProducts from '../components/PopularProducts'
import { appDispatch } from 'src/store'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'src/store/actions/productAction'
import React from 'react'

export default function Home() {
  const dispatch: appDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Fragment>
      <Header />
      <Slider />
      <div
        css={css`
          width: 70rem;
          margin: auto;
        `}
      >
        <Intro />
        <Fromfavbarnd />
        <ShopByCat />
        <MartkettingBanner />
        <PopularProducts />
      </div>
      <Footer />
    </Fragment>
  )
}
