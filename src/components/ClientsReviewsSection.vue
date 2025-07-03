<script setup lang="ts">
import { ref } from "vue";
import reviewSergey from "../assets/images/review-sergey.png";
import reviewNatasha from "../assets/images/review-natasha.png";
import reviewKseniya from "../assets/images/review-kseniya.png";
import ReviewCard from "./ReviewCard.vue";

const reviews = ref([
  {
    name: "Сергей",
    text: `Ракеток у меня много и меня сложно удивить. Но, что касается этой конкретной ракетки (Black Edition X31) – и это совершенно искренне – она_ мне зашла. Без всякого тюнинга, и настолько, что будет моей основной (если не единственной) игровой ракеткой. Ракетка сделана на высшем уровне (да, она made in Spain, и для «испанки» у неё вполне доступная цена!). Я доволен, спасибо!`,
    image: reviewSergey,
  },
  {
    name: "Наташа",
    text: `Большинство брендов не производят детские ракетки. Мой ребенок несколько лет играл взрослыми ракетками, но, к сожалению, быстро их разбивал и появилась боль в локтевом суставе. После объяснения менеджером всех особенностей, я заказала ребёнку ракетку Fakun весом 300 грамм. Локтевой сустав перестал болеть, ребенок счастлив, побеждая новой ракеткой! Большое спасибо!`,
    image: reviewNatasha,
  },
  {
    name: "Ксения",
    text: "В клубе, в котором я играю, проходил тест-драйв ракеток Fakun. Мой тренер предложил мне рассмотреть ракетку Abaddon! Мне понравилось)) Теперь я счастливая обладательница испанской ракетки💞",
    image: reviewKseniya,
  },
]);
</script>

<template>
  <section id="reviews" class="bg-[#1D1D1D]">
    <div
      class="review-content flex flex-col items-center gap-5 py-25 max-w-[1152px] mx-auto"
    >
      <h2
        class="text-[#72C95E] text-center font-prosto text-2xl leading-[1.235em]"
      >
        ОТЗЫВЫ НАШИХ КЛИЕНТОВ
      </h2>

      <div
        class="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-10 w-full relative"
      >
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.review-content {
  position: relative;
}

.review-content::before {
  content: "";
  position: absolute;
  width: 496px;
  height: 548px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(50px);
  opacity: 0.9;
  background-image: url("@/assets/images/ellipse-right-bottom.png");
  bottom: -25%;
  right: -10%;
  z-index: 0;
}
</style>
