<template>
  <section
    class="relative h-[1072px] flex items-center justify-center text-center overflow-hidden"
  >
    <!-- Фоновое видео -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/assets/images/hero-background.webm" type="video/webm" />
      <source src="/assets/images/hero-background.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <!-- Темное наложение -->
    <div class="absolute inset-0 w-full h-full bg-black/40 z-1"></div>

    <!-- Контент секции с размытым фоном -->
    <div
      class="relative z-10 p-5 rounded-lg backdrop-filter backdrop-blur-[20px] bg-white/10 shadow-lg flex flex-col items-center"
    >
      <!-- Логотип -->
      <div class="flex justify-center items-end mb-4">
        <img
          src="/assets/images/logo-part1.png"
          alt="Fakun Logo Part 1"
          class="h-[168px] w-[141px]"
        />
        <img
          src="/assets/images/logo-part2.png"
          alt="Fakun Logo Part 2"
          class="h-[65px] w-[581px] ml-[26px] mb-[20px]"
        />
      </div>

      <!-- Заголовок -->
      <h2
        class="text-[40px] font-bold font-prosto text-secondary mb-4 leading-tight"
      >
        РАКЕТКИ ДЛЯ ПАДЕЛ-ТЕННИСА
      </h2>

      <!-- Описание -->
      <p
        class="text-[20px] text-white font-evolventa max-w-[637px] mx-auto leading-normal"
      >
        Инновационные технологии, премиальные материалы и непревзойдённое
        качество для вашей лучшей игры
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Script for HeroSection component
</script>

<style scoped>
/* Styles for HeroSection component */
</style>
