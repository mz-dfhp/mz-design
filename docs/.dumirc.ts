import { defineConfig } from 'dumi'
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    base: process.env.base || '/',
    publicPath: process.env.base || '/',
    name: 'design',
    socialLinks: { github: 'https://github.com/mz-dfhp/mz-design' },
    monorepoRedirect: {},
    footer: false
  }
})
