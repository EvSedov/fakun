<template>
  <section
    id="products"
    class="relative py-16 px-4 bg-[#181818] overflow-x-hidden"
  >
    <div class="rackets-content mx-auto">
      <h2 class="text-center text-[24px] font-prosto text-[#72C95E] mb-10">
        РАКЕТКИ
      </h2>

      <div
        class="flex items-center justify-center gap-6 max-w-[1200px] mx-auto relative z-10"
      >
        <button
          class="flex items-center justify-center min-w-14 h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md mr-2 hover:bg-[#72C95E33] cursor-pointer"
          @click="prevRackets"
          :disabled="currentIndex === 0"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#72C95E"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div class="flex overflow-hidden relative">
          <div
            class="flex gap-4 transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <CardRacket
              v-for="racket in rackets"
              :key="racket.id"
              :racket="racket"
              @click="openRacketDetails(racket)"
            />
          </div>
        </div>
        <button
          class="flex items-center justify-center min-w-14 h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md ml-2 hover:bg-[#72C95E33] cursor-pointer"
          @click="nextRackets"
          :disabled="currentIndex >= rackets.length - itemsPerPage"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#72C95E"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
    <RacketDetailsModal
      v-if="selectedRacket"
      :is-open="isModalOpen"
      :racket="selectedRacket"
      @close="closeRacketDetails"
      @update:racket="handleRacketUpdate"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
import CardRacket from "./CardRacket.vue";
import RacketDetailsModal from "./RacketDetailsModal.vue";
import { type Racket, racketsData } from "@/assets/data";

const rackets = ref<Racket[]>(racketsData);
const isModalOpen = ref(false);
const selectedRacket = ref<Racket | null>(null);

const currentIndex = ref(0);
const itemsPerPage = 3;
const cardWidth = 300; // Примерная ширина карточки в px
const gapWidth = 24; // Ширина gap в px (gap-6 = 24px)
const translateX = ref(0);

const nextRackets = () => {
  if (currentIndex.value < rackets.value.length - itemsPerPage) {
    currentIndex.value++;
    translateX.value = -(currentIndex.value * (cardWidth + gapWidth));
  }
};

const prevRackets = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    translateX.value = -(currentIndex.value * (cardWidth + gapWidth));
  }
};

const openRacketDetails = (racket: Racket) => {
  selectedRacket.value = racket;
  isModalOpen.value = true;
};

const closeRacketDetails = () => {
  isModalOpen.value = false;
  selectedRacket.value = null;
};

const handleRacketUpdate = (updatedRacket: Racket) => {
  const index = rackets.value.findIndex((r) => r.id === updatedRacket.id);
  if (index !== -1) {
    rackets.value[index] = updatedRacket;
  }
};

watch(
  isModalOpen,
  () => {
    if (isModalOpen.value) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  },
  { deep: true }
);

onUnmounted(() => {
  // Важно сбросить overflow при размонтировании, если модальное окно было открыто
  document.body.classList.remove("overflow-hidden", "fixed", "inset-0");
});
</script>

<style scoped>
section {
  overflow: hidden;
}
.rackets-content {
  max-width: 1152px;
  position: relative;
}

.rackets-content::before,
.rackets-content::after {
  content: "";
  position: absolute;

  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(50px);
  opacity: 0.9;
  z-index: 0;
}

.rackets-content::before {
  width: 590px;
  height: 370px;
  background-image: url("@/assets/images/ellipse-right-top.png");
  top: -5%;
  right: -20%;
}

.rackets-content::after {
  width: 455px;
  height: 472px;
  background-image: url("@/assets/images/ellipse-left-bottom.png");
  bottom: -20%;
  left: -10%;
}
</style>
