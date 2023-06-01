import { css } from '@emotion/react'
import { ThemeConfig } from '@mz-design/components/theme'

export function getButtonStyle(token: ThemeConfig['token'], prefix: string) {
  const {
    colorDefault,
    colorPrimary,
    colorSuccess,
    colorWarning,
    colorError,
    colorInfo,
    borderRadius,
    colorBorder,
    colorDisabled,
    colorText,
    colorDisabledText
  } = token
  return css`
    appearance: none;
    border: none;
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: pointer;
    overflow: visible;
    margin: 0;
    padding: 0;
    line-height: normal;

    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: none;
    }

    &.${prefix}-btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      align-self: flex-start;
      padding: 8.5px 15px;
      border-width: 1px;
      border-color: transparent;
      border-style: solid;
      border-radius: ${borderRadius};
      color: ${colorDefault};
      span {
        display: inline-block;
      }
    }

    &.${prefix}-btn-default {
      background-color: ${colorDefault};
      border-color: ${colorBorder};
      color: ${colorText};
      &:hover:not(:disabled, .${prefix}-btn-link) {
        color: ${colorPrimary};
        border-color: ${colorPrimary};
      }
    }

    &.${prefix}-btn-primary {
      ${getTypeColor(colorPrimary, colorDefault)}
    }

    &.${prefix}-btn-success {
      ${getTypeColor(colorSuccess, colorDefault)}
    }

    &.${prefix}-btn-warning {
      ${getTypeColor(colorWarning, colorDefault)}
    }

    &.${prefix}-btn-error {
      ${getTypeColor(colorError, colorDefault)}
    }

    &.${prefix}-btn-info {
      ${getTypeColor(colorInfo, colorDefault)}
    }

    &.${prefix}-btn-link {
      color: ${colorPrimary};
      background-color: transparent !important;
      border: none;
    }

    &.${prefix}-btn-dashed {
      border-style: dashed;
      background-color: ${colorDefault};
      border-color: ${colorBorder};
      color: ${colorText};
      &:hover:not(:disabled, .${prefix}-btn-link) {
        color: ${colorPrimary};
        border-color: ${colorPrimary};
      }
    }

    &.${prefix}-btn-block {
      display: flex;
      text-align: center;
      width: 100%;
    }

    &:disabled {
      border-color: ${colorBorder};
      background-color: ${colorDisabled};
      color: ${colorDisabledText};
      cursor: not-allowed;
    }
    .${prefix}-btn-loading {
      width: 14.5px;
      height: 14.5px;
      border-radius: 50%;
      border: 2px solid #fff;
      border-bottom-color: ${colorPrimary};
      animation: rotate 1s linear infinite;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  `
}

function getTypeColor(color?: string, colorDefault?: string) {
  return css`
    background-color: ${color};
    &:hover {
      opacity: 0.7;
    }
    &:disabled {
      opacity: 0.7;
      border-color: ${color};
      background-color: ${color};
      color: ${colorDefault};
    }
  `
}
