<template>
  <template v-if="frontmatter.layout === false">
    <Content />
  </template>

  <div v-else class="song-theme-wrapper article-page">
    <NavBar />
    
    <main class="article-content">
      <article class="paper-container">
        <header class="article-header">
          <h1 class="article-title">{{ frontmatter.title }}</h1>
          <p class="article-date">{{ formatDate(frontmatter.date) }}</p>
        </header>
        
        <div class="markdown-body">
          <Content />
        </div>
      </article>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import NavBar from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'

// 取得當前 Markdown 檔案的屬性
const { frontmatter } = useData()

// 💡 定義格式化函式
function formatDate(rawDate) {
  if (!rawDate) return ''
  const date = new Date(rawDate)
  if (isNaN(date)) return rawDate
  
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');

.article-page {
  min-height: 100vh;
  background-color: #F2EDE4;
  font-family: 'Noto Serif TC', serif;
  padding-top: 120px;
  position: relative;
}

.article-page::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  opacity: 0.15;
  mix-blend-mode: multiply;
  z-index: 1;
}

.article-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.article-header {
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(184, 166, 150, 0.4);
  padding-bottom: 2rem;
}

.article-title {
  font-size: 2.2rem;
  color: #2C2925;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.article-date {
  font-size: 1rem;
  color: #8B7D6B;
  letter-spacing: 0.2em;
}

/* 針對 Markdown 轉換後的 HTML 進行宋式排版 */
.markdown-body :deep(p) {
  line-height: 2.2;
  color: #4A4641;
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.markdown-body :deep(h2) {
  font-size: 1.6rem;
  color: #5D7069;
  margin: 3rem 0 1.5rem;
  letter-spacing: 0.1em;
}

.markdown-body :deep(img) {
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin: 2rem 0;
}
</style>