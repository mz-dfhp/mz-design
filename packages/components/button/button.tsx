/** @jsxImportSource @emotion/react */

import classNames from 'classnames'
import React, { useContext } from 'react'
import { DesignTokenContext } from '../theme'
import { getButtonStyle } from './style'

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?:
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'link'
    | 'dashed'
  disabled?: boolean
  block?: boolean
  loading?: boolean
}

const button: React.FC<ButtonProps> = (props) => {
  const { children, className, onClick, type, disabled, block, loading } = props
  const { token } = useContext(DesignTokenContext)
  const classes = classNames(
    'mz-btn',
    `mz-btn-${type || 'default'}`,
    `${block ? 'mz-btn-block' : ''}`,
    className
  )
  const style = getButtonStyle(token)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled || loading) return
    ;(onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e)
  }
  return (
    <button
      className={classes}
      css={style}
      onClick={handleClick}
      disabled={disabled || loading || false}
    >
      {loading ? <span className="mz-btn-loading"></span> : null}
      <span style={{ marginLeft: loading ? '5px' : 0 }}>{children}</span>
    </button>
  )
}
export default button
