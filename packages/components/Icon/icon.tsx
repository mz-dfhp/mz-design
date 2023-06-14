/** @jsxImportSource @emotion/react */

import React, { useContext, forwardRef, CSSProperties } from 'react'
import { DesignTokenContext } from '../theme'
import classNames from 'classnames'
import { getStyle } from './style'

export type IconProps = {
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  children?: React.ReactNode
  className?: string
  style?: CSSProperties
  spin?: boolean
}

const InternalIcon: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  IconProps
> = (props, ref) => {
  const defalutSvgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 16 16',
    fill: 'currentColor'
  }
  const { onClick, children, className, style, spin } = props

  const iconRef = (ref as any) || React.createRef<HTMLButtonElement>()

  const { token, prefixClass } = useContext(DesignTokenContext)

  const classes = classNames(
    `${prefixClass}-icon`,
    `${spin ? `${prefixClass}-icon-spin` : ''}`,
    className
  )

  const emotionCss = getStyle(token, prefixClass)

  return (
    <span
      ref={iconRef}
      onClick={onClick}
      className={classes}
      css={emotionCss}
      role="img"
      style={style}
    >
      <svg {...defalutSvgProps}>{children}</svg>
    </span>
  )
}

const icon = forwardRef<HTMLSpanElement, IconProps>(InternalIcon)
export default icon
