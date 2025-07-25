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

import { type IRacket, ALL_RACKET_COLORS } from "@/assets/data";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  racket: {
    type: Object as PropType<IRacket>,
    required: true,
  },
});

const emit = defineEmits(["close", "update:racket", "open-order-modal"]);
const currentRacket = ref<IRacket>(props.racket);

// Управление прокруткой body и html
const closeModal = () => {
  emit("close");
};

const selectColor = (colorKey: string) => {
  currentRacket.value.selectedColorKey = colorKey;
  emit("update:racket", currentRacket.value);
};

// Добавлена вычисляемая переменная для текущей опции цвета
const currentRacketOption = ref(
  props.racket.colorOptions[props.racket.selectedColorKey]
);

// Обработка Esc для закрытия модального окна
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

watch(
  () => props.racket.selectedColorKey,
  (newKey) => {
    currentRacketOption.value = props.racket.colorOptions[newKey];
  },
  { deep: true, immediate: true }
);

// Обновляем currentRacket при изменении пропса racket
watch(
  () => props.racket,
  (newVal) => {
    currentRacket.value = newVal;
  },
  { deep: true, immediate: true }
);

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
    <div class="p-3 relative mt-10">
      <!-- Кнопка закрытия -->
      <button
        class="absolute top-[-4px] right-0 text-[#9E9E9E] bg-[#272727] w-7.5 h-7.5 rounded-full flex items-center justify-center hover:text-white hover:border-white transition-colors z-55 border-[#9E9E9E] border-2 cursor-pointer"
        @click="closeModal"
      >
        <svg
          class="w-6 h-6"
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
        class="bg-[#2A2A2A] rounded-[10px] shadow-lg max-w-[1080px] w-full max-h-[80vh] xl:max-h-[90vh] flex flex-col lg:flex-row gap-12.5 px-10 py-15 overflow-y-auto"
      >
        <!-- Левая часть: Изображение ракетки, кнопки, описание -->
        <div
          class="max-w-[398px] w-full flex flex-col items-center justify-start min-h-0 mx-auto shrink-0"
        >
          <div class="lg:hidden w-full mb-6">
            <h2 class="text-[#72C95E] text-[20px] mb-4">
              {{ racket.name }}
            </h2>

            <div
              class="flex justify-between items-center flex-wrap gap-2.5 mb-4"
            >
              <!-- Цветовые опции -->
              <div class="flex gap-3">
                <div
                  v-for="key in Object.keys(racket.colorOptions)"
                  :key="key"
                  class="w-7 h-7 rounded-full shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center hover:scale-125"
                  :class="{
                    'shadow-black/70 shadow-2xl scale-125':
                      key === currentRacket.selectedColorKey,
                  }"
                  @click="selectColor(key as string)"
                >
                  <div
                    v-if="!Array.isArray(ALL_RACKET_COLORS[key as string].colors)"
                    class="w-full h-full rounded-full"
                    :style="{ backgroundColor: ALL_RACKET_COLORS[key as string].colors as string }"
                  ></div>
                  <div
                    v-else
                    class="w-full h-full rounded-full flex items-center justify-center"
                    :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[0] }"
                  >
                    <div
                      class="w-4 h-4 rounded-full"
                      :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[1] }"
                    ></div>
                  </div>
                </div>
              </div>
              <h3 class="text-[#72C95E] text-[20px]">{{ racket.price }} ₽</h3>
            </div>
          </div>

          <div
            class="bg-white w-full h-[490px] flex items-center justify-center mb-6 rounded-[10px]"
          >
            <img
              :src="currentRacketOption.image"
              :alt="racket.name"
              class="max-w-[282px] w-full h-auto"
            />
          </div>

          <div class="flex gap-4 mb-6 justify-start items-center w-full">
            <button
              @click="emit('open-order-modal', racket)"
              class="px-5 py-3 rounded-[5px] border border-[#72C95E] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#72C95E] hover:text-black transition-colors duration-200 cursor-pointer"
            >
              Заказать
            </button>
            <a
              :href="racket.colorOptions[racket.selectedColorKey].ozonLink"
              target="_blank"
              class="px-5 py-3 rounded-[5px] border border-[#005BFF] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#005BFF] transition-colors duration-200 cursor-pointer"
            >
              OZON
            </a>
          </div>

          <p class="text-white font-evolventa text-[14px]">
            {{ racket.description }}
          </p>
        </div>

        <!-- Правая часть: Детали и характеристики -->
        <div
          class="max-w-[398px] lg:max-w-[590px] w-full text-white min-h-0 mx-auto"
        >
          <div class="hidden lg:block">
            <div class="flex justify-between items-center mb-2.5 flex-wrap">
              <h2 class="text-[#72C95E] text-[20px] mb-2.5 sm:mb-0">
                {{ racket.name }}
              </h2>
              <!-- Цветовые опции -->
              <div class="flex gap-3">
                <div
                  v-for="key in Object.keys(racket.colorOptions)"
                  :key="key"
                  class="w-7 h-7 rounded-full shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center hover:scale-125"
                  :class="{
                    'shadow-black/70 shadow-2xl scale-125':
                      key === currentRacket.selectedColorKey,
                  }"
                  @click="selectColor(key as string)"
                >
                  <div
                    v-if="!Array.isArray(ALL_RACKET_COLORS[key as string].colors)"
                    class="w-full h-full rounded-full"
                    :style="{ backgroundColor: ALL_RACKET_COLORS[key as string].colors as string }"
                  ></div>
                  <div
                    v-else
                    class="w-full h-full rounded-full flex items-center justify-center"
                    :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[0] }"
                  >
                    <div
                      class="w-4 h-4 rounded-full"
                      :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[1] }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="text-[#72C95E] text-[20px] mb-5">
              {{ racket.price }} ₽
            </h3>
          </div>

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
