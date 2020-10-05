import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Intro from '../../components/Intro'
import './Home.css'
import Fromfavbarnd from '../../components/Fromfavbarnd'
import ShopByCat from '../../components/ShopByCat'
import Footer from '../../components/Footer'
import Slider from '../../components/slider/Slider'
import MartkettingBanner from '../../components/MartkettingBanner'
import PopularProducts from '../../components/PopularProducts'
import { appDispatch } from 'src/store'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'src/store/actions/productAction'
import { fetchCategories } from 'src/store/actions/categoriesActions'

export default function Home() {
  const dispatch: appDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <>
      <Header />
      <Slider />
      <div className='container'>
        <Intro />
        <Fromfavbarnd />
        <ShopByCat />
        <MartkettingBanner />
        <PopularProducts />
      </div>
      <Footer />
    </>
  )
}
