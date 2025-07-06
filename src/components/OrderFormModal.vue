<template>
  <!-- {{ edit_1 }} Добавляем v-if для управления видимостью модального окна -->
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
  >
    <!-- {{ edit_2 }} Контейнер для содержимого модального окна -->
    <div class="p-3 relative">
      <!-- {{ edit_3 }} Добавляем обработчик клика для кнопки закрытия -->
      <button
        @click="closeModal"
        class="absolute top-[-20px] right-[-20px] m-4 w-10 h-10 flex items-center justify-center rounded-full border border-white/50 z-55 bg-gray-700 hover:bg-gray-900"
      >
        <svg
          class="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        class="bg-[#2A2A2A] rounded-lg p-[40px_60px] flex flex-col items-center gap-5 max-w-[622px] overflow-y-auto max-h-[90vh]"
      >
        <!-- {{ edit_1 }} Заголовок модального окна -->
        <h2 class="text-[#72C95E] text-2xl font-['Prosto_One'] text-center">
          ВАШ ЗАКАЗ
        </h2>

        <!-- {{ edit_2 }} Первая разделительная линия -->
        <div class="w-[475px] h-0 border-t-2 border-[#72C95E]"></div>

        <!-- {{ edit_1 }} Блок информации о товаре с динамическими данными -->
        <div v-if="currentRacket" class="flex items-center gap-x-[30px] w-full">
          <div class="flex items-center gap-x-5">
            <!-- Изображение ракетки -->
            <div
              class="w-[96px] h-[98px] rounded-lg flex items-center justify-center overflow-hidden bg-white"
            >
              <img
                :src="racketImage"
                :alt="racketName"
                class="object-contain w-full h-full"
              />
            </div>
            <!-- Название товара -->
            <p
              class="text-white text-base font-['Evolventa'] w-[126px] leading-[1.33]"
            >
              {{ racketName }}
            </p>
          </div>
          <!-- Количество товара -->
          <div
            class="flex items-center justify-center w-[63px] h-[21px] gap-x-2"
          >
            <button
              @click="decrementQuantity"
              class="w-[15px] h-[15px] rounded-full border border-white/50 flex items-center justify-center hover:bg-white/50"
            >
              <svg
                class="w-[9.9px] h-[1px] text-white"
                fill="none"
                viewBox="0 0 10 2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h8"
                />
              </svg>
            </button>
            <span
              class="text-white text-base font-['Evolventa'] leading-[1.33]"
              >{{ itemQuantity }}</span
            >
            <button
              @click="incrementQuantity"
              class="w-[15px] h-[15px] rounded-full border border-white/50 border-opacity-50 flex items-center justify-center hover:bg-white/50"
            >
              <svg
                class="w-[9px] h-[9px] text-white"
                fill="none"
                viewBox="0 0 10 10"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1v8M1 5h8"
                />
              </svg>
            </button>
          </div>
          <!-- Цена товара -->
          <p class="text-white text-base font-['Evolventa'] leading-[1.33]">
            {{ racketPrice }}
          </p>
          <!-- Кнопка удаления товара -->
          <button
            @click="removeItem"
            class="w-[28.28px] h-[28.28px] rounded-full border border-white border-opacity-50 flex items-center justify-center"
          >
            <svg
              class="w-[8.49px] h-[8.49px] text-white"
              fill="none"
              viewBox="0 0 10 10"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 9l8-8M1 1l8 8"
              />
            </svg>
          </button>
        </div>
        <!-- {{ edit_2 }} Текст, если товар не выбран -->
        <div v-else class="text-white text-center">
          <p>Информация о товаре отсутствует.</p>
        </div>

        <!-- {{ edit_1 }} Вторая разделительная линия -->
        <div class="w-[475px] h-0 border-t-2 border-[#72C95E]"></div>

        <!-- {{ edit_2 }} Итоговая сумма заказа -->
        <p
          class="text-white text-base font-['Evolventa'] leading-[1.33] text-right w-full"
        >
          Сумма: {{ totalPrice }} ₽
        </p>

        <!-- {{ edit_1 }} Блок оформления заявки -->
        <div class="flex flex-col w-full gap-y-[30px]">
          <!-- Поля для ввода информации -->
          <div class="flex flex-col w-full gap-y-5">
            <!-- Поле "Ваше имя" -->
            <div class="flex flex-col w-full gap-y-[10px]">
              <label
                for="name"
                class="text-white text-base font-['Evolventa'] leading-[1.33]"
                >Ваше имя</label
              >
              <input
                type="text"
                id="name"
                placeholder="Иван"
                class="bg-transparent border border-[#72C95E] rounded-lg p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
              />
            </div>
            <!-- Поле "Ваш номер телефона" -->
            <div class="flex flex-col w-full gap-y-[10px]">
              <label
                for="phone"
                class="text-white text-base font-['Evolventa'] leading-[1.33]"
                >Ваш номер телефона</label
              >
              <input
                type="tel"
                id="phone"
                placeholder="+7 (999) 999-99-99"
                class="bg-transparent border border-[#72C95E] rounded-lg p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
              />
            </div>
            <!-- Поле "Ваш электронная почта" -->
            <div class="flex flex-col w-full gap-y-[10px]">
              <label
                for="email"
                class="text-white text-base font-['Evolventa'] leading-[1.33]"
                >Ваш электронная почта</label
              >
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                class="bg-transparent border border-[#72C95E] rounded-lg p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
              />
            </div>
          </div>

          <!-- Информационный текст -->
          <p class="text-white text-sm font-['Evolventa'] leading-[1.33]">
            Оставьте свои контактные данные и мы свяжемся с вами в ближайшее
            время. Или напишите нам на почту
            <a href="mailto:padelfakun@yandex.ru" class="m-0 p-0 text-[#72C95E]"
              >padelfakun@yandex.ru</a
            >
          </p>

          <!-- Политика соглашения -->
          <div class="flex items-center w-full gap-x-5">
            <input
              v-model="checked"
              type="checkbox"
              id="checkbox"
              class="hidden"
            />
            <label
              for="checkbox"
              class="relative flex items-center justify-center min-w-5 h-5 border border-[#72C95E] rounded-[4px] cursor-pointer"
            >
              <!-- {{ edit_2 }} Иконка чекбокса, которая появится при checked -->
              <img
                v-if="checked"
                src="@/assets/images/checkbox_check.svg"
                alt="check"
                class="w-full h-full object-contain"
              />
            </label>
            <p class="text-white text-xs font-['Evolventa'] leading-[1.33]">
              Нажимая на кнопку, я даю своё согласие на обработку персональных
              данных и принимаю условия
              <a href="#" class="text-[#72C95E] underline">соглашения</a>
            </p>
          </div>

          <!-- Кнопка "ОТПРАВИТЬ" -->
          <button
            class="bg-[#72C95E] rounded-lg p-[20px_15px] flex items-center justify-center w-full text-black text-xl font-prosto"
            :class="
              !checked
                ? 'bg-[#72C95E]/50 cursor-default'
                : 'hover:text-white cursor-pointer active:scale-90 active:shadow-2xl'
            "
          >
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  defineEmits,
  computed,
  watch,
  type PropType,
} from "vue";
import { type IRacket, ALL_RACKET_COLORS } from "@/assets/data";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  racketData: {
    type: Object as PropType<IRacket | null>,
    default: null,
  },
});

const checked = ref<boolean>(false);
const emit = defineEmits(["close"]);
const currentRacket = ref<IRacket | null>(props.racketData);

const closeModal = () => {
  emit("close");
};

const itemQuantity = ref(1);

const racketImage = computed(() => {
  return (
    props.racketData?.colorOptions[props.racketData.selectedColorKey]?.image ||
    ""
  );
});

const racketName = computed(() => {
  return props.racketData
    ? `${props.racketData.name} в ${
        ALL_RACKET_COLORS[
          props.racketData.selectedColorKey
        ]?.name?.toLowerCase() || ""
      } цвете`
    : "Название товара";
});

const racketPriceValue = computed(() => {
  if (!props.racketData || !props.racketData.price) return 0;
  return parseFloat(props.racketData.price.replace(/[^\d.]/g, ""));
});

const racketPrice = computed(() => {
  return props.racketData ? `${props.racketData.price} ₽` : "0 ₽";
});

const totalPrice = computed(() => {
  return (racketPriceValue.value * itemQuantity.value).toFixed(0);
});

const incrementQuantity = () => {
  itemQuantity.value++;
};

const decrementQuantity = () => {
  if (itemQuantity.value > 1) {
    itemQuantity.value--;
  }
};

const removeItem = () => {
  itemQuantity.value = 0;
  currentRacket.value = null;
};

watch(
  () => props.racketData,
  (newVal) => {
    if (newVal) {
      itemQuantity.value = 1;
    }
  },
  { immediate: true }
);

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal && props.racketData) {
      itemQuantity.value = 1;
      currentRacket.value = props.racketData;
    }
  }
);
</script>

<style scoped></style>
