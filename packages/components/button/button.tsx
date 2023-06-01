/** @jsxImportSource @emotion/react */

import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { DesignTokenContext } from '../theme'
import { getButtonStyle } from './style'

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  disabled?: boolean
  block?: boolean
  dashed?: boolean
  link?: boolean
  loading?: boolean
  round?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const button: React.FC<ButtonProps> = (props) => {
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
  const style = getButtonStyle(token, prefixClass)

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

  return (
    <button
      className={classes}
      css={style}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {loading ? <span></span> : null}
      <span>{children}</span>
    </button>
  )
}
export default button
