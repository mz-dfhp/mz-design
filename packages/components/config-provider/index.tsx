import React, { createContext, useContext } from 'react'
import { merge as mergeDeep, cloneDeep } from 'lodash-es'
import {
  defaultConfigType,
  defaultConfig,
  DesignTokenContext,
  DesignTokenContextType
} from '../theme'

export interface ConfigProviderProps {
  children: React.ReactNode
  theme?: DesignTokenContextType
}

const ConfigContext = createContext({
  theme: defaultConfig
})

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, theme }) => {
  const parentContext = useContext(ConfigContext)
  // 合并theme
  const mergedTheme: defaultConfigType = mergeDeep(
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
