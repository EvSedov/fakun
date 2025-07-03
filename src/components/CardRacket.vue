<template>
  <div class="w-[310px] rounded-[10px] overflow-hidden shadow-lg">
    <!-- Верхняя часть карточки (изображение) -->
    <div
      class="bg-white flex justify-center items-center h-[315px] rounded-t-[10px]"
    >
      <img
        :src="racket.image"
        :alt="racket.name"
        class="w-[236px] h-[315px] object-contain"
      />
    </div>
    <!-- Нижняя часть карточки (детали) -->
    <div
      class="bg-[#2A2A2A] p-5 flex flex-col gap-[15px] rounded-b-[10px] h-[240px]"
    >
      <h3 class="text-white font-prosto text-[20px] leading-[1.235em]">
        {{ racket.name }}
      </h3>
      <!-- Цветовые кружки -->
      <div class="flex gap-[15px] items-center">
        <div
          v-for="color in racket.colors"
          :key="color"
          class="w-7 h-7 rounded-full shadow-md"
          :style="{ backgroundColor: color }"
        ></div>
      </div>
      <!-- Блок "Также доступно: OZON" -->
      <div class="flex items-center gap-[10px]">
        <span class="text-white font-evolventa text-[14px]">
          Также доступно:
        </span>
        <a
          :href="racket.ozonLink"
          target="_blank"
          class="px-[10px] py-0 rounded-[5px] border border-[#005BFF] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#005BFF]"
        >
          OZON
        </a>
      </div>
      <!-- Цена -->
      <p class="text-[#72C95E] font-prosto text-[20px] leading-[1.235em]">
        {{ racket.price }} ₽
      </p>
      <!-- Кнопка "В корзину" -->
      <button
        class="w-29.5 px-[15px] py-[10px] rounded-[5px] border border-[#72C95E] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#72C95E] hover:text-black hover:border-[#72C95E] transition-colors duration-200"
      >
        В корзину
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  racket: {
    type: Object,
    required: true,
    default: () => ({
      name: "Название ракетки",
      image: "",
      colors: [],
      ozonLink: "#",
      price: "0",
    }),
  },
});
</script>

<style scoped></style>
