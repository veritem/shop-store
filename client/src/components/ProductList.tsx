import React from 'react'
import { Isuggestions } from './SuggestionsList'

interface ProductListProps {
  product: Isuggestions
}

export const ProductList: React.FC<ProductListProps> = ({
  product,
}): React.ReactElement => {
  return <div>{product.name}</div>
}
export default ProductList
