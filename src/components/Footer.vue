<template>
  <footer class="bg-[#2A2A2A] pt-10 pb-6 px-4 relative">
    <!-- Зеленая линия сверху -->
    <div class="absolute top-0 left-0 w-full h-[2px] bg-[#72C95E]"></div>
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0"
    >
      <!-- Контакты (по левому краю) -->
      <div class="flex flex-col gap-4 min-w-[260px] items-start">
        <img
          :src="footerCompanyLogo"
          alt="Fakun logo"
          class="w-[268px] h-auto mb-2"
        />
        <span class="font-bold text-[16px] text-white font-evolventa"
          >Контакты</span
        >
        <div class="flex items-center gap-2">
          <img :src="flagRussia" alt="Флаг России" class="w-6 h-4 rounded-sm" />
          <span class="text-[20px] text-[#72C95E] font-evolventa font-normal"
            >+7 993 281 12 65</span
          >
          <img :src="whatsapp" alt="WhatsApp" class="w-5 h-5" />
          <img :src="telegram" alt="Telegram" class="w-5 h-5" />
        </div>
        <div class="flex items-center gap-2">
          <img :src="flagSpain" alt="Флаг Испании" class="w-6 h-4 rounded-sm" />
          <span class="text-[20px] text-[#72C95E] font-evolventa font-normal"
            >+34 636 06 38 66</span
          >
          <img :src="whatsapp" alt="WhatsApp" class="w-5 h-5" />
          <img :src="telegram" alt="Telegram" class="w-5 h-5" />
          <span class="text-[14px] text-white font-evolventa"
            >(говорим по-русски)</span
          >
        </div>
        <span class="text-[14px] text-white font-evolventa"
          >Email: padelfakun@yandex.ru</span
        >
        <span class="text-[14px] text-white font-evolventa"
          >Часы работы: Пн-Пт 9:00-21:00, Сб-Вс 10:00-19:00</span
        >
      </div>
      <!-- Компания -->
      <div class="flex flex-col gap-4 min-w-[120px]">
        <span class="font-bold text-[16px] text-white font-evolventa"
          >Компания</span
        >
        <nav class="flex flex-col gap-2 text-[14px] text-white font-evolventa">
          <a href="#about" class="hover:text-[#72C95E] transition">О нас</a>
          <a href="#products" class="hover:text-[#72C95E] transition"
            >Ракетки</a
          >
          <a href="#production" class="hover:text-[#72C95E] transition"
            >Производство</a
          >
          <a href="#reviews" class="hover:text-[#72C95E] transition">Отзывы</a>
        </nav>
      </div>

      <!-- Социальные сети и маркетплейс -->
      <div class="flex flex-col gap-4 min-w-[180px] items-start">
        <span class="font-bold text-[16px] text-white font-evolventa"
          >Социальные сети</span
        >
        <div class="flex items-center gap-2">
          <img :src="telegram" alt="Telegram" class="w-5 h-5" />
          <img :src="instagram" alt="Instagram" class="w-5 h-5" />
        </div>
        <span class="font-bold text-[16px] text-white font-evolventa mt-4"
          >Наши ракетки на маркетплейс</span
        >
        <a
          href="#"
          class="inline-block border border-[#005BFF] rounded-[5px] px-4 py-2 text-[#005BFF] font-evolventa text-[16px] hover:bg-[#005BFF] hover:text-white transition"
          >OZON</a
        >
      </div>
    </div>
    <!-- Копирайт -->
    <div class="mt-8 text-center text-[12px] text-white/80 font-evolventa">
      © 2025 Fakun. Все права защищены. Информация сайта защищена законом об
      авторских правах.
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerCompanyLogo from "@/assets/images/footer-company-logo.png";
import flagRussia from "@/assets/images/flag-russia.svg";
import flagSpain from "@/assets/images/flag-spain.svg";
import whatsapp from "@/assets/images/footer-whatsapp.svg";
import telegram from "@/assets/images/telegram.svg";
import instagram from "@/assets/images/instagram.svg";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Evolventa:wght@400;700&display=swap");
.font-evolventa {
  font-family: "Evolventa", sans-serif;
}
</style>
