---
layout: false
---

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<div class="song-theme-wrapper about-detail-page">

<NavBar></NavBar>

<main class="about-content">

<section class="about-hero reveal active">
<div class="hero-image">
<img src="/profile_cover.jpg" alt="霜田形象照">
</div>

<div class="hero-info">
<h1 class="my-name">霜田</h1>
<p class="my-title">科技與美學教育工作者</p>

<div class="experience-list">
<div class="exp-item">
<span class="year">2024 - 至今</span>
<p class="exp-text">永安國小樂高機器人課程講師</p>
</div>
<div class="exp-item">
<span class="year">2023 - 至今</span>
<p class="exp-text">頭前國中無人機社團指導教練</p>
</div>
</div>
</div>
</section>

<section class="bio-section reveal active">
<div class="bio-content">
<p>於數位喧囂中尋求一抹清靜。</p>
<p>專注於前端開發與生活美學的結合，致力於打造簡約且有溫度的數位體驗。我深信科技不應只是冰冷的工具，而是一種能夠傳遞情感與美感的載體。</p>

<div class="horizontal-decoration">
<p>行到水窮處，坐看雲起時。</p>
</div>
</div>
</section>

</main>

<FooterSection></FooterSection>

</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');

.about-detail-page {
  min-height: 100vh;
  background-color: #F2EDE4; /* 延續加深背景色 */
  font-family: 'Noto Serif TC', serif;
  padding-top: 120px;
  position: relative;
}

/* 宣紙質感紋理 */
.about-detail-page::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  opacity: 1;
  mix-blend-mode: multiply;
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  max-width: 1000px; /* 💡 稍微放寬總寬度，避免過於擠壓 */
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* --- 形象排版區樣式 --- */
.about-hero {
  display: flex;
  align-items: center;
  gap: 6rem; /* 💡 增加圖文間距 */
  margin-bottom: 8rem; /* 💡 增加與下個區塊的距離 */
}

.hero-image {
  flex: 1;
  max-width: 450px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08); /* 💡 微調陰影深度 */
}

.hero-info {
  flex: 1.2;
}

.my-name {
  font-size: 3.2rem; /* 💡 放大姓名 */
  letter-spacing: 0.3em;
  margin-bottom: 0.8rem;
  color: #2C2925; /* 💡 加深顏色，增強對比 */
}

.my-title {
  font-size: 1.3rem;
  color: #5D7069; /* 💡 改用深青色，對比更強 */
  letter-spacing: 0.15em;
  margin-bottom: 3rem;
}

.experience-list {
  border-top: 1.5px solid rgba(184, 166, 150, 0.4); /* 💡 加深分隔線 */
  padding-top: 2.5rem;
}

.exp-item {
  margin-bottom: 2.5rem; /* 💡 增加經歷項目的垂直距離 */
}

.year {
  font-size: 1rem;
  color: #8B7D6B; /* 💡 加深年份顏色 */
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.exp-text {
  font-size: 1.1rem;
  color: #3A3631; /* 💡 加深文字顏色 */
  margin: 0;
}

/* --- 詳細文字區樣式 --- */
.bio-content {
  line-height: 2.5; /* 💡 增加行高，提升閱讀舒適度 */
  color: #2C2925; /* 💡 加深顏色 */
  font-size: 1.15rem;
}

.horizontal-decoration {
  margin-top: 6rem;
  text-align: center;
  color: #8B7D6B; /* 💡 加深顏色 */
  letter-spacing: 0.5em;
  font-size: 1.25rem;
}

/* 進入動畫 */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.5s ease;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* 手機版適應 */
@media (max-width: 850px) {
  .about-hero {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .hero-info {
    text-align: center;
  }
}
</style>