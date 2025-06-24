<template>
  <section
    class="relative h-[1072px] flex items-center justify-center text-center overflow-hidden"
  >
    <!-- Фоновое изображение/видео -->
    <img
      src="/src/assets/images/hero-background.jpg"
      alt="Fakun Background"
      class="absolute inset-0 w-full h-full object-cover z-0 filter blur-sm"
    />

    <!-- Контент секции с размытым фоном -->
    <div
      class="relative z-10 p-5 rounded-lg backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white shadow-lg"
    >
      <!-- Логотип -->
      <div class="flex justify-center items-end mb-4">
        <img
          src="/src/assets/images/logo-part1.png"
          alt="Fakun Logo Part 1"
          class="h-40 mr-[-20px]"
        />
        <img
          src="/src/assets/images/logo-part2.png"
          alt="Fakun Logo Part 2"
          class="h-20 mb-4"
        />
      </div>

      <!-- Заголовок -->
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-bold font-['Prosto_One'] text-secondary mb-4"
      >
        РАКЕТКИ ДЛЯ ПАДЕЛ-ТЕННИСА
      </h2>

      <!-- Описание -->
      <p
        class="text-lg md:text-xl text-light font-['Evolventa'] max-w-2xl mx-auto"
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
