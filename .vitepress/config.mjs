import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 封裝一個安全讀取文章的函式
function getArticles() {
  // 取得 articles 資料夾的絕對路徑
  const dir = path.resolve('articles')
  
  // 檢查資料夾是否存在
  if (fs.existsSync(dir)) {
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .map(f => ({ 
        text: f.replace('.md', ''), 
        link: `/articles/${f.replace('.md', '')}` 
      }))
  }
  
  // 如果資料夾不存在（例如還沒建立任何文章），回傳空陣列避免報錯
  return []
}

export default defineConfig({
  title: "霜田的個人網頁",
  themeConfig: {
nav: [
      { text: '首頁', link: '/' }
      ]
    }
  })