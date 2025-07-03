<template>
  <section
    class="relative min-h-[1072px] w-full flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <!-- Фоновое видео -->
    <video
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/images/hero-background.webm" type="video/webm" />
      <source src="/images/hero-background.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <!-- Overlay -->
    <div class="absolute inset-0 w-full h-full bg-black/40 z-1"></div>

    <!-- Header фиксированный, но внутри секции -->
    <Header class="fixed top-0 left-0 w-full z-20" />

    <!-- Контент: логотип и текст поверх overlay -->
    <div class="relative z-10 flex flex-col items-center w-full px-4 pt-24">
      <!-- Логотип -->
      <div class="flex justify-center items-end mb-6">
        <img
          src="/images/logo-part1.png"
          alt="Fakun Logo Part 1"
          class="h-[168px] w-[141px] filter-white"
        />
        <img
          src="/images/logo-part2.png"
          alt="Fakun Logo Part 2"
          class="h-[65px] w-[581px] ml-[26px] mb-[20px] filter-white"
        />
      </div>

      <h2
        class="text-[48px] font-bold font-prosto mb-3 leading-[1.1] drop-shadow-hero"
      >
        <span class="text-white">РАКЕТКИ ДЛЯ </span
        ><span class="text-[#72C95E]">ПАДЕЛ-ТЕННИСА</span>
      </h2>

      <!-- Описание: светло-серый, тень -->
      <p
        class="text-[20px] font-evolventa text-gray-300 max-w-[637px] mx-auto leading-[1.5] drop-shadow-hero"
      >
        Инновационные технологии, премиальные материалы и непревзойдённое
        качество для вашей лучшей игры
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
// Script for HeroSection component
</script>

<style scoped>
/* Styles for HeroSection component */
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
