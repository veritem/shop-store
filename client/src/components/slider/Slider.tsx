import React, { useState } from 'react'
import { images } from './imageData'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

function Slider() {
  const [position, setPosition] = useState(0)

  const handleSwipeRight = () => {
    if (position < images.length - 1) {
      setPosition(position + 1)
    }
  }

  const handleSwipeLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => handleSwipeRight(),
    onSwipedLeft: () => handleSwipeLeft(),
  })

  return (
    <div
      style={{
        height: '50vh',
        width: '90vw',
        overflow: 'hidden',
        padding: '30px 20px',
        margin: '0px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        {...swipeHandlers}
        style={{
          position: 'relative',
        }}
      >
        {images.map((url, index) => (
          <motion.div
          // style={{
          //   position: 'absolute',
          //   width: '100vw',
          //   height: '100vh',
          //   overflow: 'hidden',
          //   background: 'white',
          //   borderRadius: '30px',
          //   top: '-45px',
          // }}
          // key={index}
          // initial={{ scale: 0, rotate: -180 }}
          // animate={{
          //   rotate: 0,
          //   left: `${(index - position) * 60 - 30}vw`,
          //   scale: index - position ? 1 : 0.8,
          // }}
          // transition={{
          //   type: 'spring',
          //   stiffness: 260,
          //   damping: 20,
          // }}
          >
            <img
              src={url}
              style={{
                height: '100%',
                width: '100%',
              }}
              alt={`${url}-${index}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slider
