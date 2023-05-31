import { createContext } from 'react'

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

export type AliasToken = Partial<typeof defaultSeedToken>

export const defaultConfig = {
  token: defaultSeedToken
}

export interface ThemeConfig {
  token: Partial<AliasToken>
}

export const DesignTokenContext = createContext<{
  token: Partial<AliasToken>
}>(defaultConfig)
