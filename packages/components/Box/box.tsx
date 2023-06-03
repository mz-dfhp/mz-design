/** @jsxImportSource @emotion/react */

import React from 'react'
import { css } from '@emotion/react'
export interface BoxProps {
  children?: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 20px;
        margin: 20px 0;
        flex-wrap: wrap;
      `}
    >
      {' '}
      {children}
    </div>
  )
}
export default Box
