/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Header from '../components/Header'
import { Product } from 'src/store/types/product'
import { Link } from 'react-router-dom'

export function Category(): React.ReactElement {
  const { id } = useParams<{ id: string }>()
  const [products, setproducts] = useState<Product[]>()
  const [category, setCategory] = useState<{
    name: string
    _id: string
    photo_url: string
  }>()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/category/${id}`
        )
        const catresp = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/category/${id}`
        )
        setCategory(catresp.data.data)
        setproducts(resp.data.data)
      } catch (error) {}
    }

    getProducts()
  }, [id])

  return (
    <>
      <Header />
      <div
        css={css`
          margin-top: 1rem;
          margin-left: 1rem;
          margin-right: 1rem;
          display: grid;
          grid-template-columns: 20% 80%;
          gap: 1rem;
        `}
      >
        <div>
          <img
            src={category?.photo_url}
            alt={category?.name}
            css={css`
              width: 200px;
            `}
          />
          <h3>{category?.name}</h3>
          <p>{products?.length} products found</p>
        </div>
        <div>
          {products?.map(prod => (
            <div
              key={prod._id}
              css={css`
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <img
                src={prod.imageUrl}
                alt={prod.name}
                css={css`
                  width: 200px;
                `}
              />
              <Link
                to={`/p/${prod._id}`}
                css={css`
                  text-decoration: none;
                  display: flex;
                  color: #000;
                  flex-direction: column;
                  justify-content: space-evenly;
                `}
              >
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Category
