/** @jsxImportSource @emotion/react */

import classNames from 'classnames'
import React, { useContext } from 'react'
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
    onClick
  } = props
  const { token, prefixClass } = useContext(DesignTokenContext)
  const classes = classNames(
    `${prefixClass}-btn`,
    `${prefixClass}-btn-${type || 'default'}`,
    `${block ? `${prefixClass}-btn-block` : ''}`,
    `${dashed ? `${prefixClass}-btn-dashed` : ''}`,
    `${link ? `${prefixClass}-btn-link` : ''}`,
    `${loading ? `${prefixClass}-btn-loading` : ''}`,
    className
  )
  const style = getButtonStyle(token, prefixClass)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled || loading) return
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
