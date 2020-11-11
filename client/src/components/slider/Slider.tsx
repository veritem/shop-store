/** @jsxImportSource @emotion/core */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { images } from './imageData'

export const Slider: React.FC = (): React.ReactElement => {
  return (
    <div
      css={css`
        height: 400px;
        width: 100%;
        overflow-y: hidden;
      `}
    >
      <img
        src={images[0]}
        alt='slide'
        css={css`
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  )
}
export default Slider
