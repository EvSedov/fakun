<template>
  <header
    id="main-header"
    ref="headerElement"
    class="backdrop-blur-md text-white py-4 px-4 sm:px-10 fixed top-0 left-0 w-full z-20"
  >
    <div class="container mx-auto flex justify-around items-center flex-wrap">
      <!-- Разделы навигации -->
      <nav class="hidden md:block">
        <ul class="flex space-x-7.5 font-prosto text-[17px]/13">
          <li>
            <a
              href="#about"
              @click="scrollToSection"
              class="hover:text-[#72C95E] transition font-prosto"
              >О НАС</a
            >
          </li>
          <li>
            <a
              href="#products"
              @click="scrollToSection"
              class="hover:text-[#72C95E] transition font-prosto"
              >РАКЕТКИ</a
            >
          </li>
          <li>
            <a
              href="#production"
              @click="scrollToSection"
              class="hover:text-[#72C95E] transition font-prosto"
              >ПРОИЗВОДСТВО</a
            >
          </li>
          <li>
            <a
              href="#reviews"
              @click="scrollToSection"
              class="hover:text-[#72C95E] transition font-prosto"
              >ОТЗЫВЫ</a
            >
          </li>
          <li>
            <a
              href="#contact"
              @click="scrollToSection"
              class="hover:text-[#72C95E] transition font-prosto"
              >КОНТАКТЫ</a
            >
          </li>
        </ul>
      </nav>

      <!-- Контакты и соцсети -->
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6"
      >
        <a
          href="tel:+79932811265"
          class="flex items-center space-x-2 text-white font-prosto text-[17px] hover:text-[#72C95E] transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9688 12.5938L15.2188 15.75C15.125 16.2188 14.75 16.5312 14.2812 16.5312C6.40625 16.5 0 10.0938 0 2.21875C0 1.75 0.28125 1.375 0.75 1.28125L3.90625 0.53125C4.34375 0.4375 4.8125 0.6875 5 1.09375L6.46875 4.5C6.625 4.90625 6.53125 5.375 6.1875 5.625L4.5 7C5.5625 9.15625 7.3125 10.9062 9.5 11.9688L10.875 10.2812C11.125 9.96875 11.5938 9.84375 12 10L15.4062 11.4688C15.8125 11.6875 16.0625 12.1562 15.9688 12.5938Z"
              fill="currentColor"
            />
          </svg>

          <span>+7 993 281 12 65</span>
        </a>
        <div class="flex space-x-3 justify-center items-center">
          <!-- Иконки соцсетей -->
          <a
            href="https://wa.me/79932811265"
            target="_blank"
            class="flex justify-center items-center text-white transition text-lg w-5 h-5"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 17"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="hover:fill-[#72C95E]"
            >
              <path
                d="M0 17L1.26525 12.6345C0.484499 11.3567 0.0742498 9.90817 0.0749998 8.42279C0.0772498 3.77896 4.07849 0 8.99473 0C11.3805 0.000708333 13.62 0.878333 15.3045 2.47067C16.9882 4.063 17.9152 6.1795 17.9145 8.43058C17.9122 13.0751 13.911 16.8541 8.99473 16.8541C7.50223 16.8534 6.03149 16.4999 4.72874 15.8284L0 17ZM4.94774 14.3034C6.20474 15.0082 7.40473 15.4303 8.99173 15.431C13.0777 15.431 16.4062 12.2903 16.4085 8.42917C16.41 4.56025 13.0972 1.42375 8.99773 1.42233C4.90874 1.42233 1.5825 4.56308 1.581 8.4235C1.58025 9.99954 2.06925 11.1796 2.89049 12.4142L2.14125 14.9982L4.94774 14.3034ZM13.488 10.433C13.4325 10.3452 13.284 10.2928 13.0605 10.1873C12.8377 10.0817 11.742 9.57242 11.5372 9.50229C11.3332 9.43217 11.1847 9.39675 11.0355 9.60783C10.887 9.81821 10.4595 10.2928 10.3297 10.433C10.2 10.5733 10.0695 10.591 9.84673 10.4855C9.62398 10.3799 8.90548 10.1582 8.05423 9.44067C7.39198 8.8825 6.94423 8.19329 6.81448 7.98221C6.68473 7.77183 6.80098 7.65779 6.91198 7.55296C7.01248 7.45875 7.13473 7.30717 7.24648 7.18392C7.35973 7.06208 7.39648 6.97425 7.47148 6.83329C7.54573 6.69304 7.50898 6.56979 7.45273 6.46425C7.39648 6.35942 6.95098 5.32312 6.76573 4.90167C6.58424 4.49154 6.40049 4.54679 6.26399 4.54042L5.83649 4.53333C5.68799 4.53333 5.44649 4.58575 5.24249 4.79683C5.03849 5.00792 4.46249 5.51650 4.46249 6.55279C4.46249 7.58908 5.26124 8.58996 5.37224 8.73021C5.48399 8.87046 6.94348 10.9969 9.17923 11.9085C9.71098 12.1252 10.1265 12.2549 10.4497 12.3519C10.9837 12.512 11.4697 12.4893 11.8537 12.4355C12.282 12.3753 13.1722 11.9262 13.3582 11.4346C13.5442 10.9423 13.5442 10.5209 13.488 10.433Z"
              />
            </svg>
          </a>
          <a
            href="https://t.me/PadelFakun"
            target="_blank"
            class="flex justify-center items-center text-white transition text-lg w-5 h-5 hover:text-[#72C95E]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7725 6.02051C12.9353 5.98962 13.0199 5.99814 13.0596 6.01465V6.01562C13.0683 6.01948 13.0729 6.02318 13.0742 6.02441L13.0762 6.02637C13.0785 6.02865 13.101 6.04981 13.1094 6.14258C13.1182 6.24033 13.1066 6.36318 13.083 6.51855C12.7436 8.75215 12.4044 10.9863 12.0645 13.2197V13.2207C12.0414 13.3734 12.0197 13.4918 11.9854 13.5889C11.9524 13.682 11.9188 13.7218 11.8945 13.7412C11.8569 13.7712 11.7497 13.8054 11.5908 13.7617H11.5898C11.4266 13.716 11.2686 13.6174 11.0391 13.4658H11.04L8.31738 11.6641C8.21543 11.5967 8.14685 11.5433 8.10547 11.4971C8.10276 11.4941 8.10077 11.4908 8.09863 11.4883C8.11281 11.4626 8.13562 11.4286 8.17383 11.3789L8.1748 11.3779C8.53531 10.9078 8.98194 10.503 9.47168 10.0742C9.95026 9.65523 10.4775 9.20754 10.9287 8.68457C11.0322 8.56467 11.1327 8.39138 11.1709 8.2002C11.1904 8.10231 11.2005 7.96455 11.1514 7.81836C11.1105 7.69689 11.0356 7.58914 10.9316 7.50977L10.8184 7.44043C10.6072 7.33757 10.406 7.37288 10.2822 7.41602C10.1638 7.45731 10.0676 7.52232 10.0166 7.55762H10.0156C9.45625 7.94607 8.89703 8.33508 8.33789 8.72363C7.77875 9.11218 7.21937 9.50033 6.66016 9.88867C6.27837 10.1538 5.99145 10.3379 5.68848 10.3809H5.6875C5.41723 10.4194 5.12258 10.3465 4.72852 10.2305C4.41168 10.1374 4.09554 10.0417 3.78125 9.94336H3.78027C3.7175 9.92387 3.6695 9.90502 3.63086 9.89062C4.00535 9.71866 4.38511 9.55523 4.77148 9.38965C4.77982 9.38691 4.78755 9.38578 4.79297 9.38379C4.82715 9.3712 4.85498 9.35781 4.86914 9.35059C4.87698 9.34659 4.88407 9.3423 4.88867 9.33984H4.88672C4.899 9.33454 4.91243 9.3303 4.92676 9.32422C4.94253 9.31752 4.96032 9.30965 4.97852 9.30176L4.97754 9.30078C5.03261 9.27703 5.1035 9.24708 5.16406 9.2207C5.22531 9.19458 5.28683 9.16956 5.34766 9.14355C5.40968 9.11704 5.47227 9.09085 5.53418 9.06445V9.06348C5.7819 8.95757 6.02996 8.85093 6.27832 8.74414C6.52617 8.63818 6.77454 8.53283 7.02246 8.42676L10.7432 6.83496C10.9912 6.72891 11.2402 6.62277 11.4883 6.5166C11.7363 6.41048 11.9847 6.30417 12.2324 6.19824H12.2334C12.2708 6.18214 12.3068 6.16483 12.335 6.15137C12.3659 6.13662 12.3887 6.1253 12.4111 6.11523C12.4568 6.09476 12.4715 6.09149 12.4697 6.0918H12.4707C12.5443 6.07871 12.6133 6.06033 12.6602 6.04785L12.7725 6.02051Z"
                fill="currentColor"
                stroke="currentColor"
              />
              <circle
                cx="9"
                cy="9.5"
                r="8.35"
                stroke="currentColor"
                stroke-width="1.3"
              />
            </svg>
          </a>

          <!-- Кнопка OZON -->
          <a
            href="https://www.ozon.ru/seller/fakun-padel-10940/"
            target="_blank"
            class="text-white px-4 py-2 rounded-md hover:bg-[#0046C7] font-evolventa text-base/normal transition border-2 border-[#005BFF]"
            >OZON</a
          >
        </div>
      </div>

      <!-- Мобильное меню (пока скрыто) -->
      <div class="md:hidden flex items-center">
        <Drawer
          direction="right"
          :open="isDrawerOpen"
          @close="isDrawerOpen = false"
        >
          <DrawerTrigger as-child>
            <button
              @click="isDrawerOpen = true"
              class="text-white focus:outline-none"
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </DrawerTrigger>
          <DrawerContent class="bg-[#2A2A2A]">
            <DrawerHeader>
              <DrawerTitle class="text-[#72C95E] text-lg">Меню</DrawerTitle>
            </DrawerHeader>
            <nav>
              <ul class="flex flex-col space-y-4 p-4 text-[#72C95E]">
                <li>
                  <a
                    href="#about"
                    @click="scrollToSectionAndCloseDrawer"
                    class="block py-2 text-lg hover:text-white"
                    >О НАС</a
                  >
                </li>
                <li>
                  <a
                    href="#products"
                    @click="scrollToSectionAndCloseDrawer"
                    class="block py-2 text-lg hover:text-white"
                    >РАКЕТКИ</a
                  >
                </li>
                <li>
                  <a
                    href="#production"
                    @click="scrollToSectionAndCloseDrawer"
                    class="block py-2 text-lg hover:text-white"
                    >ПРОИЗВОДСТВО</a
                  >
                </li>
                <li>
                  <a
                    href="#reviews"
                    @click="scrollToSectionAndCloseDrawer"
                    class="block py-2 text-lg hover:text-white"
                    >ОТЗЫВЫ</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    @click="scrollToSectionAndCloseDrawer"
                    class="block py-2 text-lg hover:text-white"
                    >КОНТАКТЫ</a
                  >
                </li>
              </ul>
            </nav>
            <DrawerFooter>
              <DrawerClose as-child>
                <button
                  @click="isDrawerOpen = false"
                  class="px-4 py-2.5 rounded-[5px] border border-[#72C95E] text-white font-evolventa text-[16px] flex items-center justify-center hover:bg-[#72C95E] hover:text-black hover:border-[#72C95E] transition-colors duration-200 cursor-pointer font-semibold"
                >
                  Закрыть
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { scrollToSection } from "../utils/scroll";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const isDrawerOpen = ref(false);

const scrollToSectionAndCloseDrawer = (event: Event) => {
  scrollToSection(event);
  isDrawerOpen.value = false;
};
</script>

<style scoped></style>
