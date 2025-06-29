<template>
  <header
    class="backdrop-blur-md text-white py-4 px-10 fixed top-0 left-0 w-full z-20"
  >
    <div class="container mx-auto flex justify-around items-center">
      <!-- Разделы навигации -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8 font-prosto text-[17px]/13">
          <li>
            <a href="#about" class="hover:text-[#72C95E] transition">О НАС</a>
          </li>
          <li>
            <a href="#products" class="hover:text-[#72C95E] transition"
              >РАКЕТКИ</a
            >
          </li>
          <li>
            <a href="#production" class="hover:text-[#72C95E] transition"
              >ПРОИЗВОДСТВО</a
            >
          </li>
          <li>
            <a href="#reviews" class="hover:text-[#72C95E] transition"
              >ОТЗЫВЫ</a
            >
          </li>
          <li>
            <a href="#contact" class="hover:text-[#72C95E] transition"
              >КОНТАКТЫ</a
            >
          </li>
        </ul>
      </nav>

      <!-- Контакты и соцсети -->
      <div class="flex items-center space-x-6">
        <a
          href="tel:+79932811265"
          class="flex items-center space-x-2 text-white font-prosto text-[17px] hover:text-[#72C95E] transition"
        >
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="text-white hover:text-[#72C95E] transition"
          />
          <span>+7 993 281 12 65</span>
        </a>
        <div class="flex space-x-3 justify-center items-center">
          <!-- Иконки соцсетей -->
          <a
            href="#"
            class="flex justify-center items-center text-white hover:text-[#72C95E] transition text-lg w-5 h-5"
            ><font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg"
          /></a>
          <a
            href="#"
            class="flex justify-center items-center text-white hover:text-[#72C95E] transition text-lg w-5 h-5"
            ><font-awesome-icon :icon="['fab', 'telegram']" class="text-lg"
          /></a>
          <!-- Кнопка OZON -->
          <a
            href="#"
            class="text-white px-4 py-2 rounded-md hover:bg-[#0046C7] font-evolventa text-[16px] transition border-2 border-[#005BFF]"
            >OZON</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
