import { css } from '@emotion/react'
import { defaultConfigType } from '@mz-design/components/theme'

export function getStyle(
  token: defaultConfigType['token'],
  prefix: defaultConfigType['prefixClass'],
  options: { size: number }
) {
  return css`
    display: inline-flex;
    gap: ${options.size}px;
    max-width: 100%;
    &.${prefix}-space {
      &-vertical {
        flex-direction: row;
      }
      &-horizontal {
        flex-direction: column;
      }
      &-start {
        align-items: start;
      }
      &-end {
        align-items: end;
      }
      &-center {
        align-items: center;
      }
      &-baseline {
        align-items: baseline;
      }
      &-wrap {
        flex-wrap: wrap;
      }
      &-block {
        display: flex;
      }
    }
  `
}
