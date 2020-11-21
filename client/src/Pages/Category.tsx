import React from 'react'
import { useParams } from 'react-router'

export function Category(): React.ReactElement {
  const { id } = useParams<{ id: string }>()

  return <div>{id}</div>
}

export default Category
