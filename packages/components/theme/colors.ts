import { TinyColor } from '@ctrl/tinycolor'

/**
 * @description 使颜色鲜艳
 * @param color 颜色
 * @param percent 值
 * @returns 颜色
 */
export const getColorToDarken = (color: string, percent: number) => {
  const tc = new TinyColor(color)
  return tc.darken(percent).toString()
}

/**
 * @description 使颜色浅
 * @param color 颜色
 * @param percent 值
 * @returns 颜色
 */
export const getColorToLighten = (color: string, percent: number) => {
  const tc = new TinyColor(color)
  return tc.lighten(percent).toString()
}
