import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Intro from '../../components/intro/Intro'
import './Home.css'
import Fromfavbarnd from '../../components/favoriteBrands/Fromfavbarnd'
import ShopByCat from '../../components/shopbyCategories/ShopByCat'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/slider/Slider'
import MartkettingBanner from '../../components/martketingBanner/MartkettingBanner'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
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
