import { css } from '@emotion/react'
import { defaultConfigType } from '@mz-design/components/theme'

export function getStyle(
  _token: defaultConfigType['token'],
  prefix: defaultConfigType['prefixClass']
) {
  return css`
    cursor: pointer;
    &.${prefix}-icon-spin {
      svg {
        animation: infinite-rotation 1.5s linear infinite;
        @keyframes infinite-rotation {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  `
}
