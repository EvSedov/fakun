<template>
  <footer id="contact" class="bg-[#2A2A2A] pt-10 pb-6 px-4 relative">
    <!-- Зеленая линия сверху -->
    <div class="absolute top-0 left-0 w-full h-[2px] bg-[#72C95E]"></div>
    <div
      class="max-w-6xl md:mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-center"
    >
      <!-- Контакты (по левому краю) -->
      <div
        class="flex flex-col gap-5 md:gap-2.5 min-w-[260px] items-center md:items-start px-4 md:px-0"
      >
        <img
          :src="footerCompanyLogo"
          alt="Fakun logo"
          class="w-[268px] h-auto mb-2"
        />
        <span class="font-bold text-[16px] text-white font-evolventa"
          >Контакты</span
        >
        <div
          class="flex items-center justify-center md:justify-start gap-2 text-center md:text-left flex-wrap"
        >
          <a href="tel:+79932811265" class="flex items-center gap-2">
            <img
              :src="flagRussia"
              alt="Флаг России"
              class="w-6 h-4 rounded-sm"
            />
            <span
              class="text-[20px] text-[#72C95E] font-evolventa font-normal hover:text-white"
              >+7 993 281 12 65</span
            >
          </a>
          <div class="flex gap-2 text-center md:text-left">
            <a
              href="tel:+79932811265"
              target="_blank"
              class="flex items-center"
            >
              <img
                :src="phone"
                alt="Phone"
                class="w-5 h-5 hover:brightness-0 hover:invert cursor-pointer"
              />
            </a>
            <a
              href="https://wa.me/79932811265"
              target="_blank"
              class="flex items-center"
            >
              <img
                :src="whatsapp"
                alt="WhatsApp"
                class="w-5 h-5 hover:brightness-0 hover:invert cursor-pointer"
              />
            </a>
            <a
              href="https://t.me/PadelFakun"
              target="_blank"
              class="flex items-center"
            >
              <img
                :src="telegram"
                alt="Telegram"
                class="w-5 h-5 hover:brightness-0 hover:invert cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div
          class="flex items-center justify-center md:justify-start gap-2 text-center md:text-left flex-wrap"
        >
          <a href="tel:+34636063866" class="flex items-center gap-2">
            <img
              :src="flagSpain"
              alt="Флаг Испании"
              class="w-6 h-4 rounded-sm"
            />
            <span
              class="text-[20px] text-[#72C95E] font-evolventa font-normal hover:text-white"
              >+34 636 06 38 66</span
            >
          </a>
          <div class="flex gap-2 text-center md:text-left">
            <a
              href="https://wa.me/34636063866"
              target="_blank"
              class="flex items-center"
            >
              <img
                :src="whatsapp"
                alt="WhatsApp"
                class="w-5 h-5 hover:brightness-0 hover:invert cursor-pointer"
              />
            </a>
            <a
              href="http://t.me/jordi_gonzales2024"
              target="_blank"
              class="flex items-center"
            >
              <img
                :src="telegram"
                alt="Telegram"
                class="w-5 h-5 hover:brightness-0 hover:invert cursor-pointer"
              />
            </a>
            <span class="text-[14px] text-white font-evolventa text-nowrap"
              >(говорим по-русски)</span
            >
          </div>
        </div>
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <a
            href="mailto:padelfakun@yandex.ru"
            class="m-0 p-0 text-white text-[14px]"
          >
            Email:
            <span class="text-[#72C95E] font-evolventa hover:text-white"
              >padelfakun@yandex.ru</span
            >
          </a>
          <span class="text-[14px] text-white font-evolventa"
            >Часы работы: Пн-Пт 9:00-21:00, Сб-Вс 10:00-19:00</span
          >
        </div>
      </div>
      <!-- Компания -->
      <div
        class="flex flex-col gap-4 min-w-[120px] items-center md:items-start text-center md:text-left"
      >
        <span class="font-bold text-[16px] text-white font-evolventa"
          >Компания</span
        >
        <nav class="flex flex-col gap-2 text-[14px] text-white font-evolventa">
          <a
            href="#about"
            @click="scrollToSection"
            class="hover:text-[#72C95E] transition"
            >О нас</a
          >
          <a
            href="#products"
            @click="scrollToSection"
            class="hover:text-[#72C95E] transition"
            >Ракетки</a
          >
          <a
            href="#production"
            @click="scrollToSection"
            class="hover:text-[#72C95E] transition"
            >Производство</a
          >
          <a
            href="#reviews"
            @click="scrollToSection"
            class="hover:text-[#72C95E] transition"
            >Отзывы</a
          >
        </nav>
      </div>

      <!-- Социальные сети и маркетплейс -->
      <div
        class="flex flex-col gap-7.5 min-w-[180px] items-center md:items-start"
      >
        <div
          class="flex flex-col gap-2.5 items-center md:items-start text-center md:text-left"
        >
          <span class="font-bold text-[16px] text-white font-evolventa"
            >Социальные сети</span
          >
          <a
            href="https://t.me/Padel_Fakun"
            target="_blank"
            class="flex items-center gap-2"
          >
            <img
              :src="telegram"
              alt="Telegram"
              class="w-5 h-5 hover:brightness-0 hover:invert"
            />
          </a>
        </div>
        <div
          class="flex flex-col gap-2.5 items-center md:items-start text-center md:text-left"
        >
          <span class="font-bold text-[16px] text-white font-evolventa"
            >Наши ракетки на маркетплейс</span
          >
          <a
            href="https://www.ozon.ru/seller/fakun-padel-10940/"
            target="_blank"
            class="max-w-18 inline-block border border-[#005BFF] rounded-[5px] px-2.5 py-0.5 text-white font-evolventa text-base/normal hover:bg-[#005BFF] hover:text-white transition"
            >OZON</a
          >
        </div>
      </div>
    </div>
    <!-- Копирайт -->
    <div
      class="flex gap-2.5 justify-center items-center mt-8 text-center text-[12px] text-white/80 font-evolventa border-t-[1px] border-white/30 pt-7"
    >
      <span>
        © 2025 Fakun. Все права защищены. Информация сайта защищена законом об
        авторских правах.
      </span>
      <img
        :src="footerLogoFakun"
        alt="Логотип компании Fakun"
        class="w-7.5 h-7.5"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerCompanyLogo from "@/assets/images/footer-company-logo.png";
import footerLogoFakun from "@/assets/images/footer-logo-fakun.svg";
import flagRussia from "@/assets/images/flag-russia.svg";
import flagSpain from "@/assets/images/flag-spain.svg";
import phone from "@/assets/images/phone.svg";
import whatsapp from "@/assets/images/footer-whatsapp.svg";
import telegram from "@/assets/images/telegram.svg";
import instagram from "@/assets/images/instagram.svg";
import { scrollToSection } from "../utils/scroll";
</script>

<style scoped></style>
