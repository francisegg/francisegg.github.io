import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  title: "霜田的個人網頁",
  themeConfig: {
    sidebar: {
      '/articles/': [{
        text: '文章列表',
        items: fs.readdirSync(path.resolve('articles'))
                .filter(f => f.endsWith('.md') && f !== 'index.md')
                .map(f => ({ text: f.replace('.md', ''), link: `/articles/${f.replace('.md', '')}` }))
      }]
    }
  }
})