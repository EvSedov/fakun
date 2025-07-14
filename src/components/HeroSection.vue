<template>
  <section
    class="relative h-[100vh] w-full flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <!-- Фоновое видео -->
    <video
      ref="video"
      poster="/images/poster-hero-video.png"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/video/hero-background.mp4" type="video/mp4" />
      <source src="/video/hero-background.webm" type="video/webm" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <!-- Overlay -->
    <div class="absolute inset-0 w-full h-full bg-black/40 z-1"></div>

    <!-- Header фиксированный, но внутри секции -->
    <Header class="fixed top-0 left-0 z-20" />

    <!-- Контент: логотип и текст поверх overlay -->
    <div class="relative z-10 flex flex-col items-center w-full px-4 pt-24">
      <!-- Логотип -->
      <div class="flex justify-center items-end mb-6">
        <img
          src="/images/logo-part1.png"
          alt="Fakun Logo Part 1"
          class="w-16 h-auto sm:w-26 sm:h-auto md:h-[168px] md:w-[141px] filter-white"
        />
        <img
          src="/images/logo-part2.png"
          alt="Fakun Logo Part 2"
          class="w-50 h-auto sm:w-80 sm:h-10 md:h-[65px] md:w-[581px] ml-[26px] mb-[20px] filter-white"
        />
      </div>

      <h2
        class="text-3xl sm:text-[38px] md:text-[48px] font-bold font-prosto mb-3 leading-[1.1] drop-shadow-hero"
      >
        <span class="text-white font-prosto">РАКЕТКИ ДЛЯ </span
        ><span class="text-[#72C95E] font-prosto text-nowrap"
          >ПАДЕЛ-ТЕННИСА</span
        >
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
import { onMounted, ref } from "vue";
import Header from "./Header.vue";

const video = ref<HTMLVideoElement | null>(null);
const STORAGE_KEY = "hero-video-time";

// Функция безопасного автоплея
function tryPlay() {
  const playPromise = video.value?.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.warn("Автоплей заблокирован", error);
    });
  }
}

// Восстановить время из localStorage
onMounted(() => {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime && video.value) {
    video.value.currentTime = parseFloat(savedTime);
  }

  // Запуск при первом клике или таче
  const handleFirstInteraction = () => {
    tryPlay();
    document.removeEventListener("click", handleFirstInteraction);
    document.removeEventListener("touchstart", handleFirstInteraction);
  };

  document.addEventListener("click", handleFirstInteraction);
  document.addEventListener("touchstart", handleFirstInteraction);

  // Сохранение времени при скрытии вкладки
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && video.value) {
      localStorage.setItem(STORAGE_KEY, video.value.currentTime.toString());
    }

    if (document.visibilityState === "visible" && video.value) {
      const savedTime = localStorage.getItem(STORAGE_KEY);

      if (savedTime) {
        video.value.currentTime = parseFloat(savedTime);
      }

      tryPlay();
    }
  });

  // Также сохраним при паузе
  if (video.value) {
    video.value.addEventListener("pause", () => {
      localStorage.setItem(STORAGE_KEY, video.value!.currentTime.toString());
    });
  }
});
</script>

<style scoped>
/* Styles for HeroSection component */
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
