import { defineConfig } from 'dumi'
export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.base || '/',
  publicPath: process.env.base || '/',
  themeConfig: {
    name: 'design',
    socialLinks: { github: 'https://github.com/mz-dfhp/mz-design' },
    monorepoRedirect: {},
    footer: false
  }
})
