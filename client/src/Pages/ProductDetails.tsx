// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {css,jsx} from '@emotion/core'
import React from 'react'
import { useState, useRef, Fragment,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  const [quantity, setQuantity] = useState<string>('1')
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


  const resultZoom = useRef<HTMLDivElement | null>(null)
  // const productImg = useRef<HTMLImageElement | null>(null)

  // function handleMouseMove(e: MouseEvent<HTMLImageElement>) {
  //   resultZoom.current?.classList.add('active')
  // }

  // function handleMouseLeave(e: MouseEvent<HTMLImageElement>) {
  //   resultZoom.current?.classList.remove('active')
  // }


  return (
    <Fragment>
      <section
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        `}
      >
        <div
          className='product'
          css={css`
            position: relative;
          `}
        >
          <p>{product.name}</p>
          <p>{product.category.name}</p>
          {/* <img
            src={imac}
            alt='imac'
            id='prod_img'
            ref={productImg}
            css={css`
              width: 400px;
            `}
            onMouseMove={(event: MouseEvent<HTMLImageElement>): void =>
              handleMouseMove(event)
            }
            onMouseLeave={(event: MouseEvent<HTMLImageElement>): void =>
              handleMouseLeave(event)
            }
          /> */}
          <div className='zoom_results' ref={resultZoom}></div>
        </div>
        <div
          className='product_info'
          css={css`
            width: 500px;
          `}
        >
          <h1
            css={css`
              padding-bottom: 2rem;
            `}
          >
            Product className rating
          </h1>
          <p
            css={css`
              margin-bottom: 2rem;
            `}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi id
            asperiores iusto itaque nemo inventore qui, doloremque dolorum
            pariatur harum dignissimos? Quaerat illo repellendus temporibus!
            Voluptate rem aliquid illum odio.
          </p>
          <div>
            <input
              type='number'
              name='prod_num'
              min='1'
              max='1000'
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              css={css`
                margin-bottom: 2rem;
                font-size: 1rem;
                padding: 10px 20px;
              `}
            />
          </div>
          <button
            css={css`
              width: 100%;
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
    </Fragment>
  )
}

export default ProductDetails
