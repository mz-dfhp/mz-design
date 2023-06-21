/** @jsxImportSource @emotion/react */

import classNames from 'classnames'
import React, { useContext } from 'react'
import { DesignTokenContext } from '../theme'
import { getStyle } from './style'

export interface SpaceProps {
  direction?: 'vertical' | 'horizontal'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
  size?: number
  block?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Space: React.FC<SpaceProps> = (props) => {
  const { token, prefixClass } = useContext(DesignTokenContext)

  const {
    align,
    direction = 'vertical',
    wrap = false,
    size = 10,
    className,
    style,
    children,
    block
  } = props

  const emotionCss = getStyle(token, prefixClass, { size })

  const classes = classNames(
    `${prefixClass}-space`,
    `${prefixClass}-space-${direction}`,
    `${align ? `${prefixClass}-space-${align}` : ''}`,
    `${wrap ? `${prefixClass}-space-wrap` : ''}`,
    `${block ? `${prefixClass}-space-block` : ''}`,
    className
  )

  return (
    <div css={emotionCss} className={classes} style={style}>
      {children}
    </div>
  )
}

export default Space
