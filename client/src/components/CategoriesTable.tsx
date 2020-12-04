/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Category {
  name: string
}

function UserTable() {
  const [category, setCategories] = useState<Category[]>()
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/category`
      )
      setCategories(resp.data.data)
    }
    fetchData()
  }, [])

  console.log(category)

  return (
    <div
      css={css`
        padding: 1rem 2rem;
      `}
    >
      <h4
        css={css`
          text-transform: capitalize;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        `}
      >
        Product Categories
      </h4>

      <div>
        {category?.map(item => (
          <p>{item.name}</p>
        ))}
      </div>
    </div>
  )
}

export default UserTable
