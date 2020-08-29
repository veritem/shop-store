import React from 'react'
import './Slider.css'
import watch from '../../assets/products/watch.png'
// import { motion, AnimatePresence } from 'framer-motion'
// import { images } from './imageData'
// import { wrap } from '@popmotion/popcorn'

// const variants = {
// 	enter: (direction: number) => {
// 		return {
// 			x: direction > 0 ? 1000 : -1000,
// 			opacity: 0,
// 		}
// 	},
// 	center: {
// 		zIndex: 1,
// 		x: 0,
// 		opacity: 1,
// 	},
// 	exit: (direction: number) => {
// 		return {
// 			zIndex: 0,
// 			x: direction < 0 ? 1000 : -1000,
// 			opacity: 0,
// 		}
// 	},
// }

function Slider() {
	// const [[page, direction], setpage] = useState([0, 0])

	// const imageIndex = wrap(0, images.length, page)

	// const pagenate = (newDirection: number) => {
	// 	setpage([page + newDirection, newDirection])
	// }

	// return (
	// 	<div className='slider'>
	// 		<AnimatePresence initial={false} custom={direction}>
	// 			<motion.img
	// 				key={page}
	// 				src={images[imageIndex]}
	// 				custom={direction}
	// 				variants={variants}
	// 				initial='enter'
	// 				animate='center'
	// 				exit='exit'
	// 				transition={{
	// 					x: {
	// 						type: 'spring',
	// 						stiffness: 300,
	// 						damping: 200,
	// 						opacity: { duration: 0.2 },
	// 					},
	// 				}}
	// 				drag='x'
	// 				dragConstraints={{ left: 0, right: 0 }}
	// 				dragElastic={1}
	// 				onDragEnd={(e, { offset, velocity }) => {
	// 					const swipe = swipePower(offset.x, velocity.x)

	// 					if (swipe < -swipeconfidenceThreshold) {
	// 						pagenate(1)
	// 					} else if (swipe > swipeconfidenceThreshold) {
	// 						pagenate(-1)
	// 					}
	// 				}}
	// 			/>
	// 		</AnimatePresence>
	// 		<div className='next' onClick={() => pagenate(1)}>
	// 			next
	// 		</div>

	// 		<div className='prev' onClick={() => pagenate(-1)}>
	// 			Previous
	// 		</div>
	// 	</div>
	// )
	return (
		<div className='slider'>
			<img src={watch} alt='hoe' />
		</div>
	)
}

// const swipeconfidenceThreshold = 1000
// const swipePower = (offset: number, velocity: number) => {
// 	return Math.abs(offset) * velocity
// }

export default Slider
