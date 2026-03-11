<template>
  <header class="custom-header">
    <div class="logo">霜田</div>
    <nav>
      <ul>
        <li><a href="/">首頁</a></li>
        <li><a href="#about">關於</a></li>
        <li><a href="#works">作品</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

html {
  scroll-behavior: smooth;
}

.custom-header {
  position: fixed;
  top: 0; left: 0; width: 100%;
  padding: 1.5rem 4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(247, 244, 237, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  border-bottom: 1px solid rgba(184, 166, 150, 0.2);
}
.logo { font-size: 1.2rem; font-weight: 600; letter-spacing: 0.2em; color: #4A4641; }
nav ul { list-style: none; display: flex; gap: 3rem; margin: 0; padding: 0; }
nav a { text-decoration: none; color: #4A4641; font-size: 0.95rem; letter-spacing: 0.1em; transition: color 0.3s ease; }
nav a:hover { color: #869D96; }
</style>