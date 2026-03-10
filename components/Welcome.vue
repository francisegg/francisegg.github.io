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
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './NavBar.vue'
import FooterSection from './FooterSection.vue'
const showWelcome = ref(true)
onMounted(() => { setTimeout(() => { showWelcome.value = false }, 1800) })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;600&display=swap');
.song-theme-wrapper {
  background-color: #F7F4ED; font-family: 'Noto Serif TC', serif; color: #4A4641;
}
#welcome-screen {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-color: #F7F4ED; z-index: 9999; display: flex; justify-content: center; align-items: center;
  transition: opacity 1.2s ease, visibility 1.2s ease;
} #welcome-screen.fade-out { opacity: 0; visibility: hidden; }
.welcome-text { font-size: 1.5rem; letter-spacing: 0.8em; writing-mode: vertical-rl; }
.hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.bg-image {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: linear-gradient(rgba(247, 244, 237, 0.3), rgba(247, 244, 237, 0.3)), url('/bg.jpg');
  background-size: cover; background-position: center; z-index: 0;
}
.hero-content {
  position: relative; z-index: 1; background: rgba(247, 244, 237, 0.85); padding: 4rem;
  writing-mode: vertical-rl; height: 55vh; border-left: 1px solid #B8A696;
}
.hero-title { font-size: 2.5rem; letter-spacing: 0.5em; margin: 0 !important; line-height: 1.5 !important; margin-left: 2.5rem !important; }
.hero-subtitle { font-size: 1rem; color: #869D96; margin: 0 !important; }
</style>