import React, { useState } from 'react'
import './Slider.css'
// import watch from '../../assets/products/watch.png'
// import { motion, AnimatePresence } from 'framer-motion'
import { images } from './imageData'

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const handlePrev = () => {
		currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(currentSlide - 1)
		console.log(images[currentSlide], currentSlide)
	}
	const handleNext = () => {
		currentSlide === images.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
		console.log(images[currentSlide], currentSlide)
	}
	return (
		<div className='slider'>
			<img src={images[currentSlide]} alt='hoe' />
			<div className='controllers'>
				<button className='previous' onClick={handlePrev}>
					<i className='fas fa-arrow-left'></i>
				</button>
				<button className='next' onClick={handleNext}>
					<i className='fas fa-arrow-right'></i>
				</button>
			</div>
			<ul className='slide_indicators'>
				{images.map((im, i) => (
					<li key={`${i}`}></li>
				))}
			</ul>
		</div>
	)
}

export default Slider
