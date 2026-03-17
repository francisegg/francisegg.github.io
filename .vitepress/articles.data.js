// .vitepress/articles.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', {
  transform(raw) {
    return raw
      .filter(page => page.url !== '/articles/')
      .map(page => {
        // 💡 建立格式化函式
        const rawDate = page.frontmatter.date
        let formattedDate = '未定日期'
        
        if (rawDate) {
          const date = new Date(rawDate)
          const year = date.getFullYear()
          const month = String(date.getMonth() + 1).padStart(2, '0')
          const day = String(date.getDate()).padStart(2, '0')
          formattedDate = `${year}.${month}.${day}` // 💡 格式：XXXX.XX.XX
        }

        return {
          title: page.frontmatter.title || '無標題',
          url: page.url,
          date: formattedDate, // 💡 這裡存入格式化後的字串
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})