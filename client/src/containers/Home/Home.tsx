import React from 'react'
import Header from '../Header/Header'
import Intro from '../../components/intro/Intro'
import './Home.css'
import Fromfavbarnd from '../../components/favoriteBrands/Fromfavbarnd'
import ShopByCat from '../../components/shopbyCategories/ShopByCat'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/slider/Slider'
import MartkettingBanner from '../../components/martketingBanner/MartkettingBanner'
import PopularProducts from '../../components/PopularProducts/PopularProducts'

export default function Home() {
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
