/** @jsxImportSource @emotion/react */

import classNames from 'classnames'
import React, { useContext, useState, forwardRef } from 'react'
import { DesignTokenContext } from '../theme'
import { getStyle } from './style'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  disabled?: boolean
  block?: boolean
  dashed?: boolean
  link?: boolean
  loading?: boolean
  round?: boolean
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    children,
    className,
    type,
    disabled,
    block,
    loading,
    dashed,
    link,
    round,
    style,
    onClick
  } = props
  const { token, prefixClass } = useContext(DesignTokenContext)

  const [animation, setAnimation] = useState(false)

  const classes = classNames(
    `${prefixClass}-btn`,
    `${prefixClass}-btn-${type || 'default'}`,
    `${block ? `${prefixClass}-btn-block` : ''}`,
    `${dashed ? `${prefixClass}-btn-dashed` : ''}`,
    `${link ? `${prefixClass}-btn-link` : ''}`,
    `${loading ? `${prefixClass}-btn-loading` : ''}`,
    `${animation && !link ? `${prefixClass}-btn-animation` : ''}`,
    `${round ? `${prefixClass}-btn-round` : ''}`,
    className
  )
  const emotionCss = getStyle(token, prefixClass)

  const handleAnimation = () => {
    if (!animation) {
      setAnimation(true)
      setTimeout(() => {
        setAnimation(false)
      }, 600)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled || loading) return
    handleAnimation()
    ;(onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e)
  }
  const buttonRef = (ref as any) || React.createRef<HTMLButtonElement>()
  return (
    <button
      className={classes}
      css={emotionCss}
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled || false}
      style={style}
    >
      {loading ? <span></span> : null}
      <span>{children}</span>
    </button>
  )
}

const button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton
)
export default button
