import { createContext } from 'react'

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export const defaultSeedToken = {
  fontSize: '14px',
  colorDefault: '#ffffff',
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorDisabled: '#f5f5f5',
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorDisabledText: 'rgba(0, 0, 0, 0.25)',
  colorBorder: '#d9d9d9',
  borderRadius: '6px'
}

export const defaultConfig = {
  prefixClass: 'mz',
  token: defaultSeedToken
}

export type defaultConfigType = typeof defaultConfig

export type DesignTokenContextType = RecursivePartial<defaultConfigType>

export const DesignTokenContext =
  createContext<defaultConfigType>(defaultConfig)
