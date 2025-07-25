<script lang="ts" setup>
import { onMounted, ref } from "vue";
import spainFlag from "@/assets/images/flag-spain.svg";

const videoProduction = ref<HTMLVideoElement | null>(null);
const STORAGE_KEY = "production-video-time";

// Функция безопасного автоплея
function tryPlay() {
  const playPromise = videoProduction.value?.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.warn("Автоплей заблокирован", error);
    });
  }
}

// Восстановить время из localStorage
onMounted(() => {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime && videoProduction.value) {
    videoProduction.value.currentTime = parseFloat(savedTime);
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
    if (document.visibilityState === "hidden" && videoProduction.value) {
      localStorage.setItem(
        STORAGE_KEY,
        videoProduction.value.currentTime.toString()
      );
    }

    if (document.visibilityState === "visible" && videoProduction.value) {
      const savedTime = localStorage.getItem(STORAGE_KEY);

      if (savedTime) {
        videoProduction.value.currentTime = parseFloat(savedTime);
      }

      tryPlay();
    }
  });

  // Также сохраним при паузе
  if (videoProduction.value) {
    videoProduction.value.addEventListener("pause", () => {
      localStorage.setItem(
        STORAGE_KEY,
        videoProduction.value!.currentTime.toString()
      );
    });
  }
});
</script>

<template>
  <!-- {{ block_1 }} Контейнер секции -->
  <section id="production" class="bg-[#2A2A2A] py-10 px-4">
    <!-- Заголовок -->
    <h2
      class="font-prosto text-2xl text-[#72C95E] text-center mb-10"
      style="line-height: 1.23"
    >
      ПРОИЗВОДСТВО
    </h2>
    <div
      class="max-w-[1152px] mx-auto flex flex-col-reverse lg:flex-row gap-[81px] items-start"
    >
      <!-- {{ block_2 }} Левая часть: текст -->
      <div class="flex-1 flex flex-col gap-[30px]">
        <!-- {{ block_2_1 }} Флаг и подпись -->
        <div
          class="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start"
        >
          <img :src="spainFlag" alt="Испания" class="w-[49px] h-[37px]" />
          <div class="text-center sm:text-left">
            <span class="text-[#72C95E] font-bold">
              Город Реус, провинция Таррагона, Испания
            </span>
            <div class="text-white text-base">
              - именно здесь мы производим ракетки Fakun
            </div>
          </div>
        </div>
        <!-- {{ block_2_2 }} Текстовые абзацы с акцентами -->
        <div
          class="flex flex-col gap-[30px] text-white text-base font-normal leading-[1.33] font-evolventa text-center md:text-left"
        >
          <p>
            Тщательно продуманный процесс производства в сочетании с
            использованием сертифицированного
            <span class="text-[#72C95E] font-semibold">
              европейского сырья
            </span>
            позволяет нам создавать падел-ракетки непревзойденного качества. Мы
            закупаем карбоновое волокно и смолу у тех же производителей, которые
            поставляют материалы для Ferrari, Lamborghini и истребителей
            Eurofighter.
          </p>
          <p>
            Fakun производит ракетки всех типов весом от 300 до 360 граммов.<br />
            По специальному заказу мы изготавливаем ракетки меньшего веса.
          </p>
          <p>
            Мы делаем
            <span class="text-[#72C95E] font-semibold">индивидуальные</span>
            падел-ракетки, каждая из которых обладает уникальными
            характеристиками.<br />
            Эти ракетки разработаны с учетом индивидуальных потребностей
            игроков, включая их физические данные и уровень профессионализма.
            Каждая модель оптимизирована для максимального комфорта и
            эффективности на корте, обеспечивая
            <span class="text-[#72C95E] font-semibold"
              >превосходный контроль и мощность</span
            >.
          </p>
          <p>
            Все ракетки производятся с интегрированным покрытием, что делает их
            неподверженными износу и гарантирует
            <span class="text-[#72C95E] font-semibold"
              >неизменный внешний вид</span
            >. Всех их объединяет одно — встроенная система антивибрации. С
            ракетками <span class="text-[#72C95E] font-semibold">FAKUN</span> вы
            надежно защищены от риска развития тендинита! Забота о вашем
            <span class="text-[#72C95E] font-semibold">здоровье</span> — это наш
            приоритет!
          </p>
        </div>
      </div>
      <!-- {{ block_3 }} Правая часть: фото производства -->
      <div
        class="w-[314px] h-[526px] border border-[#72C95E] rounded-md overflow-hidden flex-shrink-0 mx-auto"
      >
        <video
          ref="videoProduction"
          poster="/images/poster-production-video.png"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          class="w-full h-full object-cover"
        >
          <source src="/video/production-process.mp4" type="video/mp4" />
          <source src="/video/production-process.webm" type="video/webm" />
          Ваш браузер не поддерживает видео фон.
        </video>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
