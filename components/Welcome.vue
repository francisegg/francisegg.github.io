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
          <img :src="project.image" :alt="project.title" loading="lazy">
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
    title: '永安國小樂高機器人課程',
    description: '協助校方規劃並執行樂高機器人課程，從基礎組裝到程式設計，激發學生對科技的興趣與創造力。',
    image: '/S__27082908_0.jpg', 
    link: '#'
  },
  {
    title: '頭前國中無人機社團課程',
    description: '協助校方規劃並執行無人機社團課程，從基礎飛行到應用開發，培養學生的科技素養與團隊合作精神。',
    image: '/頭前無人機社團.jpg',
    link: '#'
  }
]

onMounted(async () => { 
  // 解決重新整理頁面跳轉問題
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  await nextTick();
  window.scrollTo(0, 0);

  // 開場動畫期間鎖定滾動
  document.body.style.overflow = 'hidden';

  // 1.8秒後隱藏開場動畫
  setTimeout(() => { 
    showWelcome.value = false;
    document.body.style.overflow = '';
  }, 1800);

  // 建立 Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }); 

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');

/* --- 基礎容器與背景質感 --- */
.song-theme-wrapper {
  /* 💡 修改：加深背景色 */
  background-color: #F2EDE4; 
  /* 💡 修改：增強向心圓漸層（0.1 -> 0.2） */
  background-image: radial-gradient(circle, transparent 50%, rgba(184, 166, 150, 0.2) 100%);
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
  /* 💡 修改：加深紋路透明度（0.08 -> 0.15） */
  opacity: 1; 
  mix-blend-mode: multiply;
}

/* 💡 已移除：裝飾性大字浮水印 (::after) */

/* --- 開場動畫與 Hero 區 --- */
#welcome-screen {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-color: #F2EDE4; z-index: 9999; display: flex; justify-content: center; align-items: center;
  transition: opacity 1.2s ease, visibility 1.2s ease;
}
#welcome-screen.fade-out { opacity: 0; visibility: hidden; }
.welcome-text { 
  font-size: 1.5rem;
  letter-spacing: 0.8em;
  writing-mode: vertical-rl;
  /* 💡 增加一個優先顯示的屬性 */
  color: #4A4641;
  z-index: 10000; 
}

.hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.bg-image {
position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  /* 💡 先顯示一個與圖片相近的深色底色，避免白閃 */
  background-color: #2C2925; 
  /* 💡 換成壓縮後的 WebP 格式 */
  background-image: linear-gradient(rgba(247, 244, 237, 0.3), rgba(247, 244, 237, 0.3)), url('/cover_cup.webp');
  background-size: cover;
  background-position: center;
  z-index: 0;
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

/* --- 作品集佈局 --- */
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
  flex: 0 0 50%;
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
  background-color: #EFECE5;
}
.work-card:hover .work-image img { transform: scale(1.03); }

.work-info {
  flex: 1;
  min-width: 320px;
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

@media (max-width: 1000px) {
  .work-card, .is-reverse { flex-direction: column !important; gap: 2.5rem; padding: 0 1rem; }
  .work-image { flex: none; width: 100%; max-width: 100%; }
  .work-info { min-width: auto; text-align: center; }
  .work-title { font-size: 1.5rem; }
}
</style>