<template>
  <div class="w-[310px] rounded-[10px] overflow-hidden shadow-lg">
    <!-- Верхняя часть карточки (изображение) -->
    <div
      class="bg-white flex justify-center items-center h-[315px] rounded-t-[10px]r"
    >
      <img
        :src="racket.colorOptions[racket.selectedColorKey].image"
        :alt="racket.name"
        class="w-[236px] h-[315px] object-contain cursor-pointer"
        @click="emit('open-details', racket)"
      />
    </div>
    <!-- Нижняя часть карточки (детали) -->
    <div
      class="bg-[#2A2A2A] p-5 flex flex-col gap-[15px] rounded-b-[10px] h-[240px]"
    >
      <h3
        class="text-white font-prosto text-[20px] leading-[1.235em] hover:text-[#72C95E] cursor-pointer"
        @click="emit('open-details', racket)"
      >
        {{ racket.name }}
      </h3>
      <!-- Цветовые кружки -->
      <div class="flex gap-3">
        <div
          v-for="key in Object.keys(racket.colorOptions)"
          :key="key"
          class="relative w-7 h-7 rounded-full shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center hover:scale-125"
          :class="{
            'shadow-black/70 shadow-2xl scale-125':
              key === racket.selectedColorKey,
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
            class="relative w-full h-full rounded-full flex items-center justify-center"
            :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[0] }"
          >
            <div
              class="w-4 h-4 rounded-full"
              :style="{ backgroundColor: (ALL_RACKET_COLORS[key as string].colors as [string, string])[1] }"
            ></div>
          </div>
        </div>
      </div>
      <!-- Блок "Также доступно: OZON" -->
      <div class="flex items-center gap-[10px]">
        <span class="text-white font-evolventa text-[14px]">
          Также доступно:
        </span>
        <a
          :href="racket.colorOptions[racket.selectedColorKey].ozonLink"
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

<script setup lang="ts">
import { defineProps, ref, type PropType, defineEmits } from "vue";
import { type IRacket, ALL_RACKET_COLORS } from "@/assets/data";

const props = defineProps({
  racket: {
    type: Object as PropType<IRacket>,
    required: true,
    default: () => ({
      id: "",
      name: "Название ракетки",
      colorOptions: {},
      selectedColorKey: "",
      ozonLink: "#",
      price: "0",
      description: "",
      characteristics: [],
    }),
  },
});

const emit = defineEmits(["open-details", "update:racket"]);
const currentRacket = ref<IRacket>(props.racket);

const selectColor = (colorKey: string) => {
  currentRacket.value.selectedColorKey = colorKey;
  emit("update:racket", currentRacket.value);
};
</script>

<style scoped></style>
