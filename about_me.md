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
<img src="/profile_cover2.jpg" alt="霜田形象照">
</div>

<div class="hero-info">
<h1 class="my-name">霜田</h1>
<p class="my-title">科技與美學教育工作者</p>

<div class="intro-short">
<p>於數位喧囂中尋求一抹清靜，致力於打造簡約且有溫度的數位體驗。</p>
</div>
</div>
</section>

<section class="credentials-section reveal active">

<div class="credential-group">
<h2 class="group-title">證照</h2>
<ul class="credential-list">
<li>民航局普通無人機操作證</li>
<li>業餘無線電一等人員</li>
<li>初級救護技術員 EMT-1</li>
</ul>
</div>

<div class="credential-group">
<h2 class="group-title">獲獎</h2>
<ul class="credential-list">
<li>2025 | AWS 雲涌智生黑客松 長春集團組 優選第一</li>
<li>2022 | 教育部第十七屆技職之光 競賽卓越獎</li>
<li>2022 | 決賽 8 強 暨 最佳人氣獎 台灣三星第三屆創意提案競賽</li>
<li>2021 | IBM  Call for  Code P-Tech Challenge 2021 全球總冠軍</li>
</ul>
</div>

<div class="credential-group">
<h2 class="group-title">經歷</h2>
<ul class="credential-list">
<li>技術顧問實習生, IBM Taiwan (2024.09 - 2025.08)</li>
<li>課程講師, 嘉義東石自造中心 (2023 - 至今)</li>
<li>大數據工程實習生, IBM Taiwan (2022.07 - 2022.08)</li>
</ul>
</div>

</section>

<section class="bio-section reveal active">
<div class="bio-content">
<!-- <p>我深信科技不應只是冰冷的工具，而是一種能夠傳遞情感與美感的載體。在永安國小與頭前國中的教學過程中，我不僅傳授程式與飛行技巧，更引導學生觀察物體運作的律動美學。</p> -->

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
  background-color: #F2EDE4;
  font-family: 'Noto Serif TC', serif;
  padding-top: 120px;
  position: relative;
}

.about-detail-page::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  opacity: 0.15;
  mix-blend-mode: multiply;
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* --- 形象區樣式 --- */
.about-hero {
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 6rem;
}

.hero-image { flex: 1; max-width: 450px; }
.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.my-name {
  font-size: 3.2rem;
  letter-spacing: 0.3em;
  margin-bottom: 0.8rem;
  color: #2C2925;
}

.my-title {
  font-size: 1.3rem;
  color: #5D7069;
  letter-spacing: 0.15em;
  margin-bottom: 2rem;
}

.intro-short { color: #4A4641; line-height: 1.8; }

/* --- 💡 修改重點：強制由上到下排列 --- */
.credentials-section {
  display: flex;            /* 改為 flex 佈局 */
  flex-direction: column;   /* 強制垂直排列 */
  gap: 5rem;                /* 增加區塊間的間隔，讓垂直排版更大氣 */
  margin-bottom: 8rem;
  padding: 5rem 0;          /* 增加內邊距 */
  border-top: 1.5px solid rgba(184, 166, 150, 0.4);
  border-bottom: 1.5px solid rgba(184, 166, 150, 0.4);
}

.credential-group {
  width: 100%;
  max-width: 800px;         /* 限制寬度讓文字不要拉得太長，方便閱讀 */
}

.group-title {
  font-size: 1.6rem;
  color: #5D7069;
  letter-spacing: 0.3em;
  margin-bottom: 1.8rem;
  position: relative;
}

.group-title::after {
  content: "";
  position: absolute;
  left: 0; bottom: -8px;
  width: 40px; height: 1.5px;
  background-color: #B8A696;
}

.credential-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.credential-list li {
  font-size: 1.1rem;
  color: #3A3631;
  line-height: 2.2;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.credential-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #B8A696;
}

/* --- 詳細內容樣式 --- */
.bio-content { line-height: 2.5; color: #2C2925; font-size: 1.15rem; }
.horizontal-decoration {
  margin-top: 6rem;
  text-align: center;
  color: #8B7D6B;
  letter-spacing: 0.5em;
  font-size: 1.25rem;
}

.reveal { opacity: 0; transform: translateY(20px); transition: all 1.5s ease; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 850px) {
  .about-hero { flex-direction: column; text-align: center; gap: 3rem; }
  .credentials-section { gap: 4rem; }
}
</style>