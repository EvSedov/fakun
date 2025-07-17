<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-2"
  >
    <!-- Контейнер для уведомлений -->
    <transition name="fade">
      <div
        v-if="showNotification"
        :class="notificationClasses"
        class="fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg text-white font-semibold z-55 flex items-center justify-between gap-4 max-w-sm w-full"
      >
        <span>{{ notificationMessage }}</span>
        <button
          @click="showNotification = false"
          class="ml-auto text-white/70 hover:text-white"
        >
          <svg
            class="w-4 h-4"
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
      </div>
    </transition>

    <!-- Контейнер для содержимого модального окна -->
    <div class="p-3 relative mt-10 lg:mt-0">
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
        class="bg-[#2A2A2A] rounded-lg p-[40px_60px] flex flex-col items-center gap-5 max-w-[622px] overflow-y-auto max-h-[80vh] lg:max-h-[90vh]"
      >
        <!-- Заголовок модального окна -->
        <h2 class="text-[#72C95E] text-2xl font-['Prosto_One'] text-center">
          ВАШ ЗАКАЗ
        </h2>

        <!-- Первая разделительная линия -->
        <div class="w-full h-0 border-t-2 border-[#72C95E]"></div>

        <!-- Блок информации о товаре с динамическими данными -->
        <div
          v-if="currentRacket"
          class="flex items-center gap-7.5 w-full flex-wrap relative"
        >
          <!-- Изображение и название ракетки-->
          <div class="flex items-center justify-between gap-x-5">
            <!-- Изображение ракетки-->
            <div
              class="w-[96px] h-[98px] rounded-lg flex items-center justify-center overflow-hidden bg-white"
            >
              <img
                :src="racketImage"
                :alt="racketName"
                class="object-contain w-full h-full"
              />
            </div>
            <!-- Название ракетки -->
            <p
              class="text-white text-base font-['Evolventa'] w-[126px] leading-[1.33]"
            >
              {{ racketName }}
            </p>
          </div>

          <!-- Количество товара и цена -->
          <div
            class="flex items-center justify-between h-[21px] gap-10 flex-nowrap mr-10"
          >
            <!-- Количество товара -->
            <div
              class="flex items-center justify-center h-[21px] gap-x-2 flex-nowrap"
            >
              <button
                @click="decrementQuantity"
                class="w-[15px] h-[15px] rounded-full border border-white/50 flex items-center justify-center hover:bg-white/20 cursor-pointer"
              >
                <svg
                  class="w-2 h-0.5 text-white/50"
                  fill="none"
                  viewBox="0 0 10 2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
                class="w-[15px] h-[15px] rounded-full border border-white/50 border-opacity-50 flex items-center justify-center hover:bg-white/20 cursor-pointer"
              >
                <svg
                  class="w-2 h-2 text-white/50"
                  fill="none"
                  viewBox="0 0 10 10"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M5 1v8M1 5h8"
                  />
                </svg>
              </button>
            </div>
            <!-- Цена товара -->
            <p class="text-white text-base font-['Evolventa'] leading-[1.33]">
              {{ racketPrice }}
            </p>
          </div>
          <!-- Кнопка удаления товара -->
          <button
            @click="removeItem"
            class="w-5 h-5 rounded-full border border-white/50 border-opacity-50 flex items-center justify-center cursor-pointer absolute top-10 right-0 hover:bg-white/20"
          >
            <svg
              class="w-2 h-2 text-white/50"
              fill="none"
              viewBox="0 0 10 10"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
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
        <div class="w-full h-0 border-t-2 border-[#72C95E]"></div>

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
                v-model="userName"
                type="text"
                id="name"
                placeholder="Иван"
                class="bg-transparent border p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
                :class="userNameError ? 'border-red-500' : 'border-[#72C95E]'"
                @input="validateUserName"
                @blur="validateUserName"
              />
              <!-- {{ edit_1 }} Отображение ошибки для имени -->
              <p v-if="userNameError" class="text-red-500 text-sm mt-1">
                {{ userNameError }}
              </p>
            </div>
            <!-- Поле "Ваш номер телефона" -->
            <div class="flex flex-col w-full gap-y-[10px]">
              <label
                for="phone"
                class="text-white text-base font-['Evolventa'] leading-[1.33]"
                >Ваш номер телефона</label
              >
              <input
                v-model="userPhone"
                type="tel"
                id="phone"
                placeholder="+7 (999) 999-99-99"
                class="bg-transparent border p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
                :class="userPhoneError ? 'border-red-500' : 'border-[#72C95E]'"
                @input="validateUserPhone"
                @blur="validateUserPhone"
              />
              <!-- {{ edit_2 }} Отображение ошибки для телефона -->
              <p v-if="userPhoneError" class="text-red-500 text-sm mt-1">
                {{ userPhoneError }}
              </p>
            </div>
            <!-- Поле "Ваш электронная почта" -->
            <div class="flex flex-col w-full gap-y-[10px]">
              <label
                for="email"
                class="text-white text-base font-['Evolventa'] leading-[1.33]"
                >Ваш электронная почта</label
              >
              <input
                v-model="userEmail"
                type="email"
                id="email"
                placeholder="example@gmail.com"
                class="bg-transparent border p-[20px_15px] text-white text-sm font-['Evolventa'] leading-[1.33] placeholder:text-white/50 focus:outline-none"
                :class="userEmailError ? 'border-red-500' : 'border-[#72C95E]'"
                @input="validateUserEmail"
                @blur="validateUserEmail"
              />
              <!-- {{ edit_3 }} Отображение ошибки для email -->
              <p v-if="userEmailError" class="text-red-500 text-sm mt-1">
                {{ userEmailError }}
              </p>
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
              <a
                :href="PDFfile"
                target="_blank"
                download="Соглашение_на_обработку_персональных_данных.pdf"
                class="text-[#72C95E] underline"
                >соглашения</a
              >
            </p>
          </div>

          <!-- {{ edit_4 }} Добавляем обработчик submitOrder к кнопке и отключаем ее при невалидных данных -->
          <button
            @click="submitOrder"
            :disabled="!isFormValid"
            class="bg-[#72C95E] rounded-lg p-[20px_15px] flex items-center justify-center w-full text-black text-xl font-prosto"
            :class="
              !isFormValid
                ? 'bg-[#72C95E]/50 cursor-not-allowed'
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
import PDFfile from "/docs/Соглашение_на_обработку_персональных_данных.pdf";

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

// {{ edit_5 }} Новые реактивные переменные для полей формы
const userName = ref<string>("");
const userPhone = ref<string>("");
const userEmail = ref<string>("");

// {{ edit_5 }} Новые реактивные переменные для хранения ошибок валидации
const userNameError = ref<string>("");
const userPhoneError = ref<string>("");
const userEmailError = ref<string>("");

// {{ edit_6 }} Функции валидации
const validateUserName = () => {
  if (userName.value.trim() === "") {
    userNameError.value = "Имя не может быть пустым.";
  } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/u.test(userName.value)) {
    userNameError.value = "Имя может содержать только буквы, пробелы и дефисы.";
  } else {
    userNameError.value = "";
  }
};

const validateUserPhone = () => {
  if (userPhone.value.trim() === "") {
    userPhoneError.value = "Телефон не может быть пустым.";
  } else {
    // Regex для формата XXXXXXXXXXX (11 цифр)
    const pattern11Digits = /^\d{11}$/;
    // Regex для формата +7 (XXX) XXX-XX-XX с учетом опциональных пробелов, скобок и дефисов
    const patternPlus7Flexible =
      /^\+7\s*(\(\d{3}\)|\d{3})\s*\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

    if (
      !pattern11Digits.test(userPhone.value) &&
      !patternPlus7Flexible.test(userPhone.value)
    ) {
      userPhoneError.value =
        "Некорректный формат телефона. Ожидается: 11 цифр (например, 89XXXXXXXXX) или формат +7 (XXX) XXX-XX-XX.";
    } else {
      userPhoneError.value = "";
    }
  }
};

const validateUserEmail = () => {
  if (userEmail.value.trim() === "") {
    userEmailError.value = "Email не может быть пустым.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    userEmailError.value = "Некорректный формат email.";
  } else {
    userEmailError.value = "";
  }
};

// {{ edit_7 }} Computed-свойство для общей валидации формы
const isFormValid = computed(() => {
  return (
    checked.value &&
    userName.value.trim() !== "" &&
    userPhone.value.trim() !== "" &&
    userEmail.value.trim() !== "" &&
    !userNameError.value &&
    !userPhoneError.value &&
    !userEmailError.value
  );
});

// {{ edit_3 }} Новые реактивные переменные для уведомлений
const showNotification = ref<boolean>(false);
const notificationMessage = ref<string>("");
const notificationType = ref<"success" | "error" | "warning">("success");
let notificationTimeout: ReturnType<typeof setTimeout> | null = null; // Для очистки предыдущих таймаутов

// {{ edit_4 }} Computed-свойство для динамических классов уведомлений
const notificationClasses = computed(() => {
  return {
    "bg-green-600": notificationType.value === "success",
    "bg-red-600": notificationType.value === "error",
    "bg-yellow-600": notificationType.value === "warning",
  };
});

// {{ edit_5 }} Функция для отображения уведомлений
const displayNotification = (
  message: string,
  type: "success" | "error" | "warning",
  duration: number = 4000
) => {
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }
  notificationMessage.value = message;
  notificationType.value = type;
  showNotification.value = true;
  notificationTimeout = setTimeout(() => {
    showNotification.value = false;
  }, duration);
};

const closeModal = () => {
  emit("close");
  // {{ edit_8 }} Очищаем форму и ошибки при закрытии модального окна
  userName.value = "";
  userPhone.value = "";
  userEmail.value = "";
  checked.value = false;
  userNameError.value = "";
  userPhoneError.value = "";
  userEmailError.value = "";
  // {{ edit_6 }} Скрываем уведомление при закрытии модального окна
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }
  showNotification.value = false;
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
    ? `Ракетка ${props.racketData.name} в ${
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

// {{ edit_9 }} Функция для отправки данных заказа
const submitOrder = async () => {
  // Вызываем все валидации перед отправкой
  validateUserName();
  validateUserPhone();
  validateUserEmail();

  // Дополнительная проверка на согласие и общая валидация
  if (!checked.value) {
    // {{ edit_7 }} Заменяем alert на displayNotification
    displayNotification(
      "Пожалуйста, дайте согласие на обработку персональных данных.",
      "warning"
    );
    return;
  }

  if (!isFormValid.value) {
    // {{ edit_8 }} Заменяем alert на displayNotification
    displayNotification("Пожалуйста, заполните все поля корректно.", "error");
    return;
  }

  const orderData = {
    userName: userName.value,
    userPhone: userPhone.value,
    userEmail: userEmail.value,
    racket: {
      name: racketName.value,
      quantity: itemQuantity.value,
      totalPrice: totalPrice.value,
    },
  };

  try {
    const response = await fetch(
      "http://localhost/backend/api/send_order.php", // нужно настроить отправку почты на сервер со скриптом, заменить URL на реальный
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    );

    const result = await response.json();

    if (result.success) {
      // {{ edit_9 }} Заменяем alert на displayNotification
      displayNotification("Ваш заказ успешно отправлен!", "success");
      closeModal();
    } else {
      // {{ edit_10 }} Отображение ошибок, полученных от сервера
      let errorMessage = `Произошла ошибка при отправке заказа: ${
        result.message || "Неизвестная ошибка"
      }`;
      if (result.errors && Array.isArray(result.errors)) {
        errorMessage += "\n\nДетали:\n" + result.errors.join("\n");
      }
      displayNotification(errorMessage, "error", 7000); // Даем больше времени для подробной ошибки
      console.error("Ошибка при отправке заказа:", result);
    }
  } catch (error) {
    console.error("Ошибка при отправке заказа:", error);
    // {{ edit_11 }} Заменяем alert на displayNotification
    displayNotification(
      "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте еще раз.",
      "error"
    );
  }
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
    } else if (!newVal) {
      // {{ edit_11 }} Очищаем форму и ошибки при скрытии модального окна
      userName.value = "";
      userPhone.value = "";
      userEmail.value = "";
      checked.value = false;
      userNameError.value = "";
      userPhoneError.value = "";
      userEmailError.value = "";
    }
  }
);
</script>

<style scoped>
/* {{ edit_12 }} Добавляем стили для анимации перехода */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
