import React, { createContext, useContext } from 'react'
import { merge as mergeDeep, cloneDeep } from 'lodash-es'
import { DesignTokenContext, ThemeConfig, defaultConfig } from '../theme'

export interface ConfigProviderProps {
  children: React.ReactNode
  theme?: ThemeConfig
}

const ConfigContext = createContext({
  theme: defaultConfig
})

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, theme }) => {
  const parentContext = useContext(ConfigContext)
  // 合并theme
  const mergedTheme: ThemeConfig = mergeDeep(
    cloneDeep(parentContext.theme || defaultConfig),
    cloneDeep(theme)
  )!

  return (
    <ConfigContext.Provider value={{ ...parentContext }}>
      {theme ? (
        <DesignTokenContext.Provider value={mergedTheme}>
          {children}
        </DesignTokenContext.Provider>
      ) : (
        children
      )}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
