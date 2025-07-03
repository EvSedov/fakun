<script setup lang="ts">
import { defineProps, ref } from "vue";

interface Review {
  name: string;
  text: string;
  image: string;
}

const props = defineProps<{
  review: Review;
}>();

const isLightboxOpen = ref(false);

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<template>
  <div
    class="w-[350px] h-auto flex flex-col items-center justify-center gap-2.5 p-2.5 border-t-[#72C95E] rounded-[10px] border-t-4 bg-[#2A2A2A]"
  >
    <p
      class="text-[#72C95E] text-left font-evolventa-bold text-base leading-[1.33em] w-full"
    >
      {{ review.name }}
    </p>
    <p
      class="text-[#FFFFFF] text-left font-evolventa-regular text-sm leading-[1.33em] w-full"
    >
      {{ review.text }}
    </p>
    <div>
      <img
        :src="review.image"
        :alt="review.name + ' review image'"
        class="w-[170px] h-[170px] object-cover rounded-md cursor-pointer"
        @click="openLightbox"
      />
    </div>
  </div>

  <div
    v-if="isLightboxOpen"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-5"
    @click="closeLightbox"
  >
    <button
      class="absolute top-4 right-4 text-white text-3xl p-2 rounded-full cursor-pointer z-50"
      @click.stop="closeLightbox"
    >
      &times;
    </button>
    <img
      :src="review.image"
      :alt="review.name + ' enlarged image'"
      class="max-w-full max-h-full object-contain cursor-pointer"
      @click.stop
    />
  </div>
</template>

<style scoped></style>
