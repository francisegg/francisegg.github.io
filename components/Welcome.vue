<template>
  <div class="song-theme-wrapper">
    <NavBar />
    
    <div id="welcome-screen" :class="{ 'fade-out': !showWelcome }">
      <div class="welcome-text">清風徐來，水波不興</div>
    </div>

    <section class="hero">
      <div class="bg-image"></div>
      <div class="hero-content">
        <h1 class="hero-title">記錄生活與哲思</h1>
        <p class="hero-subtitle">留白・靜思・觀復</p>
      </div>
    </section>

    <section id="about" class="content-section">
      <div class="section-container reveal">
        <h2 class="section-title">關於我</h2>
        <div class="bio-text">
          <p>於數位喧囂中尋求一抹清靜。</p>
          <p>專注於前端開發與生活美學的結合，致力於打造簡約且有溫度的數位體驗。</p>
        </div>
      </div>
    </section>

    <section id="works" class="works-section">
      <div v-for="(project, index) in projects" :key="index" 
           class="work-card reveal" :class="{ 'is-reverse': index % 2 !== 0 }">
        
        <div class="work-image">
          <img :src="project.image" :alt="project.title">
        </div>

        <div class="work-info">
          <span class="work-category">{{ project.category }}</span>
          <h3 class="work-title">{{ project.title }}</h3>
          <p class="work-desc">{{ project.description }}</p>
          <a :href="project.link" class="more-link">詳情進入 →</a>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <div class="quote-text">
        「萬物靜觀皆自得，四時佳興與人同。」
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import NavBar from './NavBar.vue'
import FooterSection from './FooterSection.vue'

const showWelcome = ref(true)

// 作品資料清單
const projects = [
  {
    title: '作品標題一',
    category: '# website',
    description: '這裡寫一段關於作品的簡短介紹。例如：這是一個為某某品牌設計的官方網站，強調極簡與直覺的交互體驗。',
    image: '/品茶要錄.jpg', 
    link: '#'
  },
  {
    title: '作品標題二',
    category: '# design',
    description: '介紹你的第二個作品，描述你解決了什麼問題，或是設計的核心理念是什麼。',
    image: '/頭前無人機社團.jpg',
    link: '#'
  }
]

onMounted(async () => { 
  // 解決重新整理頁面跳轉問題：強制手動控制捲動恢復並立刻置頂
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  await nextTick();
  window.scrollTo(0, 0);

  // 開場動畫期間鎖定滾動，增加儀式感
  document.body.style.overflow = 'hidden';

  // 1.8秒後隱藏開場動畫並恢復捲動
  setTimeout(() => { 
    showWelcome.value = false;
    document.body.style.overflow = '';
  }, 1800);

  // 建立 Intersection Observer 觀察器處理「浮現」動畫
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 直接將 active 類別加在觀察對象上
        entry.target.classList.add('active');
        // 觸發過一次後即停止觀察，節省效能
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }); 

  // 啟動觀察所有帶有 .reveal 類別的元素
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');

/* --- 基礎容器與背景質感 --- */
.song-theme-wrapper {
  background-color: #F7F4ED;
  /* 加入微弱的向心圓漸層，增加紙張深度感 */
  background-image: radial-gradient(circle, transparent 50%, rgba(184, 166, 150, 0.1) 100%);
  font-family: 'Noto Serif TC', serif;
  color: #4A4641;
  position: relative;
  overflow-x: hidden;
}

/* 宣紙纖維紋理層 */
.song-theme-wrapper::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  opacity: 0.08; /* 調高透明度讓紋理更清晰 */
  mix-blend-mode: multiply; /* 讓紋理與底色融合 */
}

/* 裝飾性大字浮水印 (觀復) */
.song-theme-wrapper::after {
  content: "觀復";
  position: fixed;
  right: 5%;
  top: 20%;
  font-size: 20rem;
  font-weight: 600;
  color: #B8A696;
  opacity: 0.04; /* 極淡的視覺效果 */
  writing-mode: vertical-rl;
  letter-spacing: 0.5em;
  pointer-events: none;
  z-index: 0;
}

/* --- 開場動畫與 Hero 區 --- */
#welcome-screen {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-color: #F7F4ED; z-index: 9999; display: flex; justify-content: center; align-items: center;
  transition: opacity 1.2s ease, visibility 1.2s ease;
}
#welcome-screen.fade-out { opacity: 0; visibility: hidden; }
.welcome-text { font-size: 1.5rem; letter-spacing: 0.8em; writing-mode: vertical-rl; }

.hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.bg-image {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: linear-gradient(rgba(247, 244, 237, 0.3), rgba(247, 244, 237, 0.3)), url('/cover_cup.jpg');
  background-size: cover; background-position: center; z-index: 0;
}
.hero-content {
  position: relative; z-index: 1; background: rgba(247, 244, 237, 0.85); padding: 4rem;
  writing-mode: vertical-rl; height: 55vh; border-left: 1px solid #B8A696;
}
.hero-title { font-size: 2.5rem; letter-spacing: 0.5em; margin: 0 !important; line-height: 1.5 !important; margin-left: 2.5rem !important; }
.hero-subtitle { font-size: 1rem; color: #869D96; margin: 0 !important; }

/* --- 通用內容區塊設定 --- */
.content-section, .works-section, .quote-section {
  background-color: transparent !important;
  position: relative;
  z-index: 2;
}

/* 關於我區塊 */
.content-section { padding: 8rem 2rem; display: flex; justify-content: center; }
.section-container { max-width: 800px; text-align: center; }
.section-title { font-size: 2rem; letter-spacing: 0.3em; margin-bottom: 3rem; color: #869D96; }
.bio-text p { line-height: 2; letter-spacing: 0.1em; margin-bottom: 1.5rem; font-size: 1.1rem; }

/* 語錄區塊 */
.quote-section { padding: 10rem 2rem; text-align: center; }
.quote-text { font-size: 1.5rem; color: #B8A696; letter-spacing: 0.5em; font-style: italic; opacity: 0.8; }

/* --- 捲動浮現動畫 (Reveal Animation) --- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  pointer-events: none;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* --- 作品集佈局 (交錯式圖文) --- */
.works-section {
  padding: 6rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}
.work-card {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 10rem;
}
.is-reverse { flex-direction: row-reverse; }

.work-image {
  flex: 0 0 50%; /* 💡 固定圖片寬度佔比 */
  max-width: 550px;
  overflow: hidden;
  border-radius: 8px;
  line-height: 0;
}
.work-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.work-card:hover .work-image img { transform: scale(1.03); }

.work-info {
  flex: 1;
  min-width: 320px; /* 💡 確保文字不被過度擠壓 */
  text-align: left;
}
.work-category { font-size: 0.9rem; color: #869D96; letter-spacing: 0.1em; }
.work-title { font-size: 1.8rem; margin: 0.8rem 0 1.5rem; color: #4A4641; letter-spacing: 0.15em; line-height: 1.4; }
.work-desc { font-size: 1rem; line-height: 1.8; color: #666; margin-bottom: 2rem; text-align: justify; }
.more-link {
  text-decoration: none; color: #4A4641; border-bottom: 1px solid #4A4641;
  padding-bottom: 5px; font-size: 0.9rem; transition: all 0.3s ease;
}
.more-link:hover { color: #869D96; border-color: #869D96; letter-spacing: 0.15em; }

/* RWD 手機版適應 */
@media (max-width: 1000px) {
  .work-card, .is-reverse { flex-direction: column !important; gap: 2.5rem; padding: 0 1rem; }
  .work-image { flex: none; width: 100%; max-width: 100%; }
  .work-info { min-width: auto; text-align: center; }
  .work-title { font-size: 1.5rem; }
  .song-theme-wrapper::after { font-size: 10rem; right: 2%; } /* 手機版縮小浮水印 */
}
</style>