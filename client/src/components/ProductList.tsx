/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Isuggestions } from './SuggestionsList'

interface ProductListProps {
  product: Isuggestions
}

export const ProductList: React.FC<ProductListProps> = ({
  product,
}): React.ReactElement => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 500px;
        grid-gap: 1rem;
      `}
    >
      <img
        src={product.imageUrl}
        css={css`
          width: 200px;
        `}
        alt='productimage'
      />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>
          <button>Add to cart</button>
        </p>
      </div>
    </div>
  )
}
export default ProductList
