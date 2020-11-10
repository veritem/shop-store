/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {css,jsx} from '@emotion/core'
import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  const [product,setProduct] = useState({
    _id:'',
    price:0,
    name:'',
    inStock:0,
    imageUrl:'',
    description:'',
    category:{
      name:''
    }
  })

  const { id }:{ id:string } = useParams()


  useEffect(() => {
     async  function getProduct(){
       try {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/${id}`)

        console.log(result.data.data)

        setProduct(result.data.data)

       } catch (error) {
       console.log(error)
       }
     }
      getProduct()
    }, [id])




  return (

      <section
        css={css`
          display:flex;
            align-items:center;
            justify-content:center;
            height:100vh;
        `}
      >
        <div
          css={css`
          margin-right:2rem;
          `}
        >
          <img
            src={product.imageUrl}
            alt='imac'
            id='prod_img'
            css={css`
            width:400px;
            `}
          />
        </div>
        <div
          className='product_info'
        >
          <h1>{product.name} </h1>
           <h2 css={css`
              font-style: italic;
                  font-weight: normal;
                  font-size: 1rem;
                  margin-bottom:30px;
           `}>{product.category.name}</h2>
           <p css={css`
           margin-bottom:1rem;
           `}>${product.price}</p>
          <p
            css={css`
              margin-bottom: 2rem;
            `}
          >
            {product.description}
          </p>
          <button
            css={css`
              padding: 0.5rem;
              border-radius: 1rem;
              background-color: #ec0101;
              outline: none;
              border: none;
              color: #fff;
              font-size: 1rem;
              cursor: pointer;
            `}
          >
            <i className='fas fa-cart-plus' /> Add to cart
          </button>
        </div>
      </section>

  )
}

export default ProductDetails
