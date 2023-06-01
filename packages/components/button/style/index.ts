import { css } from '@emotion/react'
import { defaultConfigType } from '@ant-design/components/theme'
import {
  getColorToDarken,
  getColorToLighten
} from '@ant-design/components/theme/colors'

export function getButtonStyle(
  token: defaultConfigType['token'],
  prefix: defaultConfigType['prefixClass']
) {
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

    &.${prefix}-btn-link {
      background-color: ${colorDefault} !important;
      color: ${colorPrimary};
      border: none;

      &.${prefix}-btn-loading {
        span:first-of-type {
          display: none;
        }
      }
    }

    &.${prefix}-btn-dashed {
      border-style: dashed !important;
      background-color: ${colorDefault}!important;
      border-color: ${colorBorder};
      color: ${colorText};
    }

    &.${prefix}-btn-primary {
      ${getTypeColor(colorPrimary, colorDefault, prefix)}
    }

    &.${prefix}-btn-success {
      ${getTypeColor(colorSuccess, colorDefault, prefix)}
    }

    &.${prefix}-btn-warning {
      ${getTypeColor(colorWarning, colorDefault, prefix)}
    }

    &.${prefix}-btn-error {
      ${getTypeColor(colorError, colorDefault, prefix)}
    }

    &.${prefix}-btn-info {
      ${getTypeColor(colorInfo, colorDefault, prefix)}
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

    &.${prefix}-btn-loading {
      span:first-of-type {
        margin-right: 5px;
        width: 14.5px;
        height: 14.5px;
        border-radius: 50%;
        border: 2px solid ${colorPrimary};
        border-bottom-color: transparent;
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
    }
  `
}

function getTypeColor(color: string, colorDefault: string, prefix: string) {
  return css`
    background-color: ${color};
    border-color: ${color};

    &.${prefix}-btn-link {
      color: ${color};
    }

    &.${prefix}-btn-loading {
      span:first-of-type {
        border: 2px solid ${colorDefault};
        border-bottom-color: ${color};
      }
    }

    &.${prefix}-btn-dashed {
      color: ${color};
      &.${prefix}-btn-loading {
        span:first-of-type {
          border: 2px solid ${color};
          border-bottom-color: ${colorDefault};
        }
      }
    }

    &:hover {
      background-color: ${getColorToLighten(color, 8)};
    }

    &:active {
      background-color: ${getColorToDarken(color, 8)};
    }

    &:disabled {
      border-color: ${color};
      background-color: ${getColorToLighten(color, 8)};
      color: ${colorDefault};
    }
  `
}
