<template>
  <div class="song-theme-wrapper list-page">
    <NavBar />
    
    <main class="list-content">
      <section class="detail-container">
        <h1 class="page-title reveal active">文章集錦</h1>
        
        <div class="articles-grid">
          <a :href="article.url" class="article-card reveal active" v-for="article in data" :key="article.url">
            <div class="card-inner">
              <span class="article-date">{{ article.date }}</span>
              <h2 class="article-title">{{ article.title }}</h2>
              <div class="read-more">閱讀 <span>→</span></div>
            </div>
          </a>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
// 引入剛剛寫好的資料載入器
import { data } from '../.vitepress/articles.data.js'
import NavBar from './NavBar.vue'
import FooterSection from './FooterSection.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');

.list-page {
  min-height: 100vh;
  font-family: 'Noto Serif TC', serif;
  padding-top: 120px;
  position: relative;
  display: flex;         /* 💡 啟用 Flex 佈局 */
  flex-direction: column; /* 💡 垂直排列 */
  background-color: #F2EDE4;
}

.list-page::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  opacity: 0.15;
  mix-blend-mode: multiply;
  z-index: 1;
}

.list-content {
  flex: 1;               /* 💡 關鍵：自動撐開剩餘空間，將頁腳推到底部 */
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-title {
  font-size: 2.5rem;
  letter-spacing: 0.5em;
  color: #869D96;
  text-align: center;
  margin-bottom: 4rem;
}

/* 區塊樣式 */
.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  text-decoration: none;
  background: rgba(247, 244, 237, 0.6);
  border: 1px solid rgba(184, 166, 150, 0.3);
  padding: 2.5rem;
  border-radius: 4px;
  transition: all 0.4s ease;
  display: block;
}

.article-card:hover {
  background: rgba(247, 244, 237, 0.9);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transform: translateY(-5px);
}

.article-date {
  font-size: 0.9rem;
  color: #8B7D6B;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: block;
}

.article-title {
  font-size: 1.6rem;
  color: #2C2925;
  margin: 0 0 2rem 0;
  letter-spacing: 0.1em;
}

.read-more {
  font-size: 0.9rem;
  color: #5D7069;
  letter-spacing: 0.1em;
}

.read-more span {
  transition: padding 0.3s ease;
}

.article-card:hover .read-more span {
  padding-left: 10px;
}
</style>