<template>
  <section class="relative py-16 px-4 bg-[#181818] overflow-x-hidden">
    <div class="rackets-content mx-auto">
      <h2 class="text-center text-[24px] font-prosto text-[#72C95E] mb-10">
        РАКЕТКИ
      </h2>

      <div
        class="flex items-center justify-center gap-6 max-w-[1200px] mx-auto relative z-10"
      >
        <button
          class="flex items-center justify-center w-14 h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md mr-2 hover:bg-[#72C95E33] cursor-pointer"
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
        <div class="flex gap-6">
          <CardRacket
            v-for="racket in rackets"
            :key="racket.name"
            :racket="racket"
          />
        </div>
        <button
          class="flex items-center justify-center w-14 h-14 rounded-full border border-[#72C95E] bg-transparent shadow-md ml-2 hover:bg-[#72C95E33] cursor-pointer"
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
  </section>
</template>

<script setup>
import CardRacket from "./CardRacket.vue";
import racketX31Img from "@/assets/images/racket-x31.png";
import racketAbaddonImg from "@/assets/images/racket-abaddon.png";
import racketAzraelImg from "@/assets/images/racket-azrael.png";

const rackets = [
  {
    name: "FAKUN X31",
    image: racketX31Img,
    colors: ["#000000"],
    ozonLink: "#",
    price: "34 990",
  },
  {
    name: "FAKUN ABADDON",
    image: racketAbaddonImg,
    colors: ["#FF0000", "#FFC62A"],
    ozonLink: "#",
    price: "32 990",
  },
  {
    name: "FAKUN AZRAEL",
    image: racketAzraelImg,
    colors: ["#FF0000", "#000000"],
    ozonLink: "#",
    price: "34 990",
  },
];
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
