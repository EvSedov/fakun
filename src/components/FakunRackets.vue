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
import { ref, computed, watch, onUnmounted } from "vue";
import CardRacket from "./CardRacket.vue";
import RacketDetailsModal from "./RacketDetailsModal.vue";

import racketX31Img from "@/assets/images/racket-x31.png";
import racketAbaddonImg from "@/assets/images/racket-abaddon.png";
import racketAzraelImg from "@/assets/images/racket-azrael.png";
import racketAstarothImg from "@/assets/images/racket-astaroth.png";
import racketJerichoImg from "@/assets/images/racket-jericho.png";

interface Racket {
  id: string;
  name: string;
  price: string;
  image: string;
  colors: (string | [string, string])[];
  selectedColor: string | [string, string];
  ozonLink: string;
  description: string;
  characteristics: {
    geometry: string;
    profile: string;
    balance: string;
    weight: string;
    level: string;
    [key: string]: string;
  };
  materials: {
    mainMaterial: string;
    coreComposition: string;
    productionTechnology: string;
    drilling: string;
    protector: string;
    [key: string]: string;
  };
  gameFeatures: {
    control: string;
    power: string;
    accuracy: string;
    durability: string;
    [key: string]: string;
  };
  advantages: {
    technological: string;
    versatility: string;
    efficiency: string;
    longevity: string;
    [key: string]: string;
  };
}

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

const rackets = ref<Racket[]>([
  {
    id: "racket-x31",
    name: "FAKUN X31",
    image: racketX31Img,
    colors: ["#000000", ["#FFFFFF", "#FF0000"], ["#0000FF", "#FFD700"]],
    selectedColor: "#000000",
    ozonLink:
      "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-x31-black-edition-s-sherohovatoy-poverhnostyu-2060278771/?at=GRt2rol94TX6k5BZCoXLr5FVxWXvoI70X463iANkY2Z",
    price: "35 000",
    description: `FAKUN X31 представляет собой флагманскую модель
                  компании FAKUN, существующую на рынке более 10 лет. В
                  версии "ABADDON" модель достигла совершенства
                  благодаря десятилетнему развитию и тщательной
                  проработке каждой детали, превратившись в настоящее
                  произведение функционального искусства.`,
    characteristics: {
      geometry: "каплевидная / негабаритная",
      profile: "38 мм",
      balance: "Центральный",
      weight: "360 грамм",
      level: "высокий / профессиональный",
    },
    materials: {
      mainMaterial: "цельный CARBON SMT + 6 слоев стекловолокна FIBERGLASS",
      coreComposition: "EVA SOFT",
      productionTechnology: `DOUBLE REVERSE LAMINATION - уникальная система
                             производства, обеспечивающая идеальный динамический
                             баланс благодаря точному соотношению смолы и волокон`,
      drilling: `SIMETRIC ORBIT CONCEPT - орбитальная центровка
                 сверления, разработанная на основе детального анализа
                 гибкости и реакции`,
      protector: "периферийная защита (в комплекте)",
      reinforcement: `Углеродное усиление - стратегически расположенные
                      элементы, обеспечивающие жесткость в ключевых точках,
                      предотвращающие деформацию при ударе и увеличивающие
                      долговечность ракетки`,
    },
    gameFeatures: {
      control: "отличная маневренность",
      power: "высокая скорость передвижения",
      accuracy: "точное размещение мяча",
      durability:
        "очень высокая благодаря используемой технологии производства",
    },
    advantages: {
      technological: `Эволюционный дизайн (EVOLUTION + REVOLUTION)`,
      versatility: `Маневренность и взрывная сила удара`,
      efficiency: `Мощность и точность`,
      longevity: `Идеальное соотношение формы и функциональности`,
    },
  },
  {
    id: "racket-abaddon",
    name: "FAKUN ABADDON",
    image: racketAbaddonImg,
    colors: [["#FF0000", "#FFD700"], ["#FFFFFF", "#FF0000"], "#FFC62A"],
    selectedColor: ["#FF0000", "#FFD700"],
    ozonLink: "#",
    price: "32 990",
    description: `Ракетка FAKUN ASTAROTH представляет собой
                  высокотехнологичное решение для игроков высокого
                  уровня, стремящихся к максимальной эффективности в
                  игре, благодаря инновационным материалам и продуманной
                  конструкции.`,
    characteristics: {
      geometry: "Каплевидная / Негабаритная",
      profile: "38 мм",
      balance: "Центральный",
      weight: "355 г",
      level: "Высокий / Профессиональный",
      protectiveCoating: "Встроенная периферийная защита",
    },
    materials: {
      mainMaterial: "Цельный карбон SMT + 6 слоев стекловолокна",
      coreComposition: "EVA Soft Attack",
      productionTechnology: "Double Reverse Lamination",
      drilling: "Symmetric Orbit Concept",
      protector: "Встроенная периферийная защита",
    },
    gameFeatures: {
      control: "Высокая маневренность позволяет эффективно играть в защите",
      power: "Идеальна для мощных и точных ударов",
      accuracy: "Позволяет точно размещать мяч в желаемых зонах корта",
      durability:
        "Очень высокая благодаря используемой технологии производства",
    },
    advantages: {
      technological: "Использование материалов военной промышленности",
      versatility: "Идеальное сочетание для агрессивной игры",
      efficiency: "Высокая скорость передвижения ракетки",
      longevity: "Исключительная надежность конструкции",
    },
  },
  {
    id: "racket-azrael",
    name: "FAKUN AZRAEL",
    image: racketAzraelImg,
    colors: [
      ["#FF0000", "#FFC62A"],
      ["#000000", "#FFFFFF"],
    ],
    selectedColor: ["#FF0000", "#FFC62A"],
    ozonLink: "#",
    price: "34 990",
    description: `FAKUN AZRAEL - это высокотехнологичное решение для
                  игроков высокого уровня, ценящих тактическую игру и
                  точность. Инновационные материалы и продуманная
                  конструкция делают эту ракетку идеальным выбором для
                  профессионалов, стремящихся к максимальной
                  эффективности на корте.`,
    characteristics: {
      geometry: "Круглая",
      profile: "38 мм",
      balance: "Центральный",
      weight: "360-365 грамм",
      level: "Высокий/профессиональный",
    },
    materials: {
      mainMaterial:
        "Высококачественные материалы из авиакосмической промышленности",
      coreComposition: "Оптимальное распределение упругости",
      productionTechnology: "DOUBLE REVERSE LAMINATION",
      drilling: "Орбитальное центровочное с симметричной концепцией",
      protector: "Встроенные периферийные протекторные элементы",
    },
    gameFeatures: {
      control: "Максимально тактичная",
      power: "Оптимальное распределение упругости",
      accuracy: "Простая в использовании",
      durability: "Очень высокая благодаря системе производства",
    },
    advantages: {
      technological:
        "Уникальная особенность ракетки заключается в отсутствии дополнительной косметики.",
      versatility:
        "Ракетка сохраняет первоначальный вид благодаря интегрированной технологии печати.",
      efficiency: "Орбитальное центровочное с симметричной концепцией",
      longevity: "Встроенные периферийные протекторные элементы",
    },
  },
  {
    id: "racket-astaroth",
    name: "FAKUN ASTAROTH",
    image: racketAstarothImg,
    colors: [
      "#000000",
      ["#156824", "#FFC62A"],
      ["#FF0000", "#FFFFFF"],
      ["#005BFF", "#FFC62A"],
    ],
    selectedColor: "#000000",
    ozonLink:
      "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-astaroth-s-sherohovatoy-poverhnostyu-2060298115/?at=Brtzx3mNKSOElqKMTzrvVl9Ty5ArkOtNMkXKguVE7RM6",
    price: "35 000",
    description: `Ракетка FAKUN ASTAROTH представляет собой
                  высокотехнологичное решение для игроков высокого
                  уровня, стремящихся к максимальной эффективности в
                  игре, благодаря инновационным материалам и продуманной
                  конструкции.`,
    characteristics: {
      geometry: "Каплевидная / Негабаритная",
      profile: "38 мм",
      balance: "Центральный",
      weight: "360 грамм",
      level: "Высокий / Профессиональный",
    },
    materials: {
      mainMaterial: "Цельный CARBON SMT + 6 слоев стекловолокна FIBERGLASS",
      coreComposition:
        "Смесь ADVANCE (EVA SOFT ATACK + NEW RED PRO + EVA SOFT ATACK)",
      productionTechnology: "DOUBLE REVERSE LAMINATION",
      drilling: "Орбитальное центровочное с симметричной концепцией",
      protector: "Периферийная защита (в комплекте)",
    },
    gameFeatures: {
      control: "Точный",
      power: "Экстраординарная благодаря центру RED PRO",
      accuracy: "Высокая, с возможностью выполнения быстрых подач и эффектов",
      durability: "Очень высокая благодаря системе производства",
    },
    advantages: {
      technological:
        "Использование материалов последнего поколения из авиакосмической промышленности",
      versatility:
        "Подходит как для профессиональных игроков, так и для продвинутых любителей",
      efficiency:
        "Обеспечивает максимальную мощность при сохранении точного контроля",
      longevity:
        "Отсутствие внешних покрытий гарантирует сохранение первоначального вида.",
    },
  },
  {
    id: "racket-jericho",
    name: "FAKUN JERICHO",
    image: racketJerichoImg,
    colors: ["#000000"],
    selectedColor: "#000000",
    ozonLink:
      "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-jericho-2055755219/?at=qQtJgGrvNc3k6ZGWCAkR1P2u9zEmy7IJV41v0TrDrJRM",
    price: "31 500",
    description: `Ракетка FAKUN JERICHO - это результат многолетнего
                  развития модели, которая с 2012 года остается верной
                  своему принципу быть "ракеткой, которая нравится
                  всем". Она не специализируется на каком-то одном типе
                  удара, но демонстрирует отличные характеристики во
                  всех аспектах игры.`,
    characteristics: {
      geometry: "Круглая",
      profile: "38 мм",
      balance: "Низкий",
      weight: "330 г",
      level: "Подходит для всех уровней",
      protectiveCoating: "Встроенная периферийная защита",
    },
    materials: {
      mainMaterial: "Интегральный карбон SMT + 6 слоев стекловолокна",
      coreComposition: "Сверхмягкая резина",
      productionTechnology: "Tubular FIBERFIRE + CARBON AXIAL",
      drilling: "Стратегические карбоновые стойки",
      protector: "Встроенные периферийные протекторные элементы",
    },
    gameFeatures: {
      control:
        "Пятно по центру обеспечивает сбалансированное ощущение при каждом ударе",
      power: "Универсальность: Подходит для любого стиля игры",
      accuracy: "Широкая зона поражения для надежной защиты и атаки",
      durability: "Использование материалов аэрокосмической промышленности",
    },
    advantages: {
      technological:
        "Отсутствие дополнительных покрытий (шпатлевок, красок, наклеек) сохраняет идеальный вес и баланс.",
      versatility:
        "Идеальное распределение веса благодаря точному соотношению смолы и волокон",
      efficiency: "Оптимальное соотношение жесткости и гибкости",
      longevity: "Благодаря продуманной балансировке в кулаке",
    },
  },
]);

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
