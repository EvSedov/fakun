<template>
  <section id="products" class="relative py-16 px-4 bg-[#181818]">
    <div class="rackets-content mx-auto">
      <h2 class="text-center text-[24px] font-prosto text-[#72C95E] mb-10">
        РАКЕТКИ
      </h2>

      <div
        class="relative flex items-center justify-center gap-2 md:gap-6 max-w-[1200px] mx-auto z-10"
      >
        <button
          class="flex items-center justify-center min-w-10 h-10 md:min-w-[56px] md:h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md mr-2"
          :class="[
            currentIndex === 0
              ? 'cursor-not-allowed'
              : 'cursor-pointer hover:bg-[#72C95E33]',
          ]"
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
        <div
          class="flex overflow-hidden"
          :style="{
            width: `${
              itemsPerPage * cardWidth + (itemsPerPage - 1) * gapWidth
            }px`,
          }"
        >
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{
              transform: `translateX(${translateX}px)`,
              gap: `${gapWidth}px`,
            }"
          >
            <div
              v-for="(racket, idx) in rackets"
              :key="racket.id"
              :ref="idx === 0 ? setCardRef : undefined"
              class="card-racket-wrapper"
            >
              <CardRacket
                :racket="racket"
                @open-details="openRacketDetails"
                @open-order-modal="handleOpenOrderModal"
              />
            </div>
          </div>
        </div>
        <button
          class="flex items-center justify-center min-w-10 h-10 md:min-w-[56px] md:h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md ml-2"
          :class="[
            currentIndex === rackets.length - itemsPerPage
              ? 'cursor-not-allowed'
              : 'cursor-pointer hover:bg-[#72C95E33]',
          ]"
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
      @open-order-modal="handleOpenOrderModalFromDetails"
    />

    <OrderFormModal
      :isVisible="showOrderModal"
      :racketData="selectedRacketForOrder"
      @close="showOrderModal = false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, shallowRef, computed, onMounted } from "vue";
import CardRacket from "./CardRacket.vue";
import RacketDetailsModal from "./RacketDetailsModal.vue";
import OrderFormModal from "./OrderFormModal.vue";
import { type IRacket, racketsData } from "@/assets/data";
import type { ComponentPublicInstance } from "vue";

const rackets = ref<IRacket[]>(racketsData);
const isModalOpen = ref(false);
const selectedRacket = ref<IRacket | null>(null);
const cardRef = ref<HTMLElement | null>(null);
const cardWidth = ref(310);
const showOrderModal = ref(false);
const selectedRacketForOrder = shallowRef<IRacket | null>(null);
let observer: ResizeObserver | null = null;
const currentIndex = ref(0);
const itemsPerPage = ref(1);

const updateItemsPerPage = () => {
  const width = window.innerWidth;
  if (width >= 1250) {
    itemsPerPage.value = 3;
  } else if (width >= 860) {
    itemsPerPage.value = 2;
  } else {
    itemsPerPage.value = 1;
  }
};

function setCardRef(el: Element | ComponentPublicInstance | null) {
  // Если это компонент, получаем его $el, иначе сам элемент
  if (el && "$el" in el) {
    cardRef.value = (el as ComponentPublicInstance).$el as HTMLElement;
  } else {
    cardRef.value = el as HTMLElement | null;
  }
}

const gapWidth = computed(() => {
  if (itemsPerPage.value === 3) return 24;
  if (itemsPerPage.value === 2) return 16;
  return 8;
});

const translateX = computed(() => {
  return -(currentIndex.value * (cardWidth.value + gapWidth.value));
});

const nextRackets = () => {
  if (currentIndex.value < rackets.value.length - itemsPerPage.value) {
    currentIndex.value++;
  }
};

const prevRackets = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const openRacketDetails = (racket: IRacket) => {
  selectedRacket.value = racket;
  isModalOpen.value = true;
};

const closeRacketDetails = () => {
  isModalOpen.value = false;
  selectedRacket.value = null;
};

const handleRacketUpdate = (updatedRacket: IRacket) => {
  const index = rackets.value.findIndex((r) => r.id === updatedRacket.id);
  if (index !== -1) {
    rackets.value[index] = updatedRacket;
  }
};

const handleOpenOrderModal = (racket: IRacket) => {
  selectedRacketForOrder.value = racket;
  showOrderModal.value = true;
};

const handleOpenOrderModalFromDetails = (racket: IRacket) => {
  selectedRacketForOrder.value = racket;
  isModalOpen.value = false;
  showOrderModal.value = true;
};

watch(itemsPerPage, () => {
  currentIndex.value = 0;
});

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

watch(
  showOrderModal,
  () => {
    if (showOrderModal.value) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  },
  { deep: true }
);

onMounted(() => {
  if (cardRef.value) {
    observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        cardWidth.value = entry.contentRect.width;
      }
    });
    observer.observe(cardRef.value);
  }

  updateItemsPerPage();
  window.addEventListener("resize", updateItemsPerPage);
});

onUnmounted(() => {
  if (observer && cardRef.value) {
    observer.unobserve(cardRef.value);
  }

  window.removeEventListener("resize", updateItemsPerPage);
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

.card-racket-wrapper {
  width: 310px;
}
@media (max-width: 1023px) {
  .card-racket-wrapper {
    width: 260px;
  }
}
@media (max-width: 699px) {
  .card-racket-wrapper {
    width: 200px;
  }
}
</style>
