/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css,jsx} from '@emotion/core'

import imac from '../assets/products/imac.png'
import shoe from '../assets/products/shoe.png'
import watch from '../assets/products/watch.png'
import fashion from '../assets/products/fashion.png'
import React from 'react'

function PopularProducts() {
  return (
    <section
      css={css`
        margin-bottom: 50px;
      `}
    >
      <h1
        css={css`
          text-align: center;
          margin-bottom: 50px;
        `}
      >
        New and Popluar Products
      </h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
        `}
      >
        <div
          css={css`
            background-color: #fff;
            padding: 1rem;
          `}
        >
          <img
            src={imac}
            alt='imac_png'
            css={css`
              width: 100%;
              height: 200px;
            `}
          />
          <p className='description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            recusandae.
          </p>

          <div className='price'>
            <h3>$100</h3>
            <p>from $200</p>
          </div>
          <button
            css={css`
              background-color: #ec3752;
              width: 100%;
              padding: 10px 20px;
              border: none;
              border-radius: 10px;
              color: #fff;
              outline: none;
              cursor: pointer;
            `}
          >
            Shop now
          </button>
        </div>
        <div
          css={css`
            background-color: #fff;
            padding: 1rem;
          `}
        >
          <img
            src={shoe}
            alt='imac_png'
            css={css`
              width: 100%;
              height: 200px;
            `}
          />
          <p className='description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            recusandae.
          </p>

          <div className='price'>
            <h3>$100</h3>
            <p>from $200</p>
          </div>
          <button
            css={css`
              background-color: #ec3752;
              width: 100%;
              padding: 10px 20px;
              border: none;
              border-radius: 10px;
              color: #fff;
              outline: none;
              cursor: pointer;
            `}
          >
            Shop now
          </button>
        </div>
        <div
          css={css`
            background-color: #fff;
            padding: 1rem;
          `}
        >
          <img
            src={watch}
            alt='imac_png'
            css={css`
              width: 100%;
              height: 200px;
            `}
          />
          <p className='description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            recusandae.
          </p>

          <div className='price'>
            <h3>$100</h3>
            <p>from $200</p>
          </div>
          <button
            css={css`
              background-color: #ec3752;
              width: 100%;
              padding: 10px 20px;
              border: none;
              border-radius: 10px;
              color: #fff;
              outline: none;
              cursor: pointer;
            `}
          >
            Shop now
          </button>
        </div>
        <div
          css={css`
            background-color: #fff;
            padding: 1rem;
          `}
        >
          <img
            src={fashion}
            alt='imac_png'
            css={css`
              width: 100%;
              height: 200px;
            `}
          />
          <p className='description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            recusandae.
          </p>

          <div className='price'>
            <h3>$100</h3>
            <p>from $200</p>
          </div>

          <button
            css={css`
              background-color: #ec3752;
              width: 100%;
              padding: 10px 20px;
              border: none;
              border-radius: 10px;
              color: #fff;
              outline: none;
              cursor: pointer;
            `}
          >
            Shop now
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
