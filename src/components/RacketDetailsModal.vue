<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  type PropType,
  ref,
  watch,
  onMounted,
  onUnmounted,
} from "vue";

import { type Racket } from "@/assets/data";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  racket: {
    type: Object as PropType<Racket>,
    required: true,
  },
});

const emit = defineEmits(["close", "update:racket"]);

const currentRacket = ref<Racket>({ ...props.racket });

// Обновляем currentRacket при изменении пропса racket
watch(
  () => props.racket,
  (newVal) => {
    currentRacket.value = { ...newVal };
  },
  { deep: true, immediate: true }
);

// Управление прокруткой body и html

const closeModal = () => {
  emit("close");
};

const selectColor = (color: string | [string, string]) => {
  currentRacket.value.selectedColor = color;
  emit("update:racket", currentRacket.value);
};

// Обработка Esc для закрытия модального окна
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    @click.self="closeModal"
  >
    <div class="p-3 relative">
      <!-- Кнопка закрытия -->
      <button
        class="absolute top-0.5 right-0.5 text-white w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-900 transition-colors z-55 border-white border-2"
        @click="closeModal"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div
        class="bg-[#2A2A2A] rounded-[10px] shadow-lg max-w-[1000px] w-full max-h-[90vh] flex flex-col md:flex-row gap-12.5 px-10 py-15 overflow-y-auto"
      >
        <!-- Левая часть: Изображение ракетки, кнопки, описание -->
        <div
          class="max-w-[398px] flex flex-col items-center justify-start min-h-0"
        >
          <div
            class="bg-white w-full h-auto flex items-center justify-center mb-6 rounded-[10px]"
          >
            <img
              :src="racket.image"
              :alt="racket.name"
              class="max-w-[282px] w-full h-auto"
            />
          </div>

          <div class="flex gap-4 mb-6 justify-start items-center w-full">
            <button
              class="px-5 py-3 rounded-[5px] border border-[#72C95E] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#72C95E] hover:text-black transition-colors duration-200"
            >
              Добавить в корзину
            </button>
            <a
              :href="racket.ozonLink"
              target="_blank"
              class="px-5 py-3 rounded-[5px] border border-[#005BFF] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#005BFF] transition-colors duration-200"
            >
              OZON
            </a>
          </div>

          <p class="text-white font-evolventa text-[14px]">
            {{ racket.description }}
          </p>
        </div>

        <!-- Правая часть: Детали и характеристики -->
        <div class="w-full text-white min-h-0">
          <div class="flex justify-between items-center mb-2.5">
            <h2 class="text-[#72C95E] text-[20px]">
              {{ racket.name }}
            </h2>
            <!-- Цветовые опции -->
            <div class="flex gap-3">
              <div
                v-for="(colorOption, index) in racket.colors"
                :key="index"
                class="relative w-7 h-7 rounded-full shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center"
                :class="{
                  'border-2 border-white':
                    (Array.isArray(colorOption) &&
                      Array.isArray(racket.selectedColor) &&
                      colorOption[0] === racket.selectedColor[0] &&
                      colorOption[1] === racket.selectedColor[1]) ||
                    (!Array.isArray(colorOption) &&
                      !Array.isArray(racket.selectedColor) &&
                      colorOption === racket.selectedColor),
                }"
                @click="selectColor(colorOption)"
              >
                <div
                  v-if="!Array.isArray(colorOption)"
                  class="w-full h-full rounded-full"
                  :style="{ backgroundColor: colorOption }"
                ></div>
                <div
                  v-else
                  class="relative w-full h-full rounded-full flex items-center justify-center"
                  :style="{ backgroundColor: colorOption[0] }"
                >
                  <div
                    class="w-4 h-4 rounded-full"
                    :style="{ backgroundColor: colorOption[1] }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-[#72C95E] text-[20px] mb-5">{{ racket.price }} ₽</h3>
          <!-- Секции характеристик -->
          <div v-if="racket.characteristics" class="space-y-2.5 text-[14px]">
            <div v-for="item of racket.characteristics">
              <p class="text-[#72C95E] text-[16px]">{{ item.title }}</p>
              <ul class="list-disc pl-5 text-[14px]">
                <li v-for="desc of item.setCharacteristics">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
