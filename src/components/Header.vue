<template>
  <header
    class="bg-white bg-opacity-10 backdrop-blur-md text-dark py-4 px-10 border-b border-gray-200"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Логотип Fakun -->
      <h1 class="text-2xl font-bold font-['Prosto_One']">Fakun</h1>

      <!-- Разделы навигации -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8 font-['Prosto_One'] text-sm">
          <li><a href="#about" class="hover:text-secondary">О НАС</a></li>
          <li><a href="#products" class="hover:text-secondary">РАКЕТКИ</a></li>
          <li>
            <a href="#production" class="hover:text-secondary">ПРОИЗВОДСТВО</a>
          </li>
          <li><a href="#reviews" class="hover:text-secondary">ОТЗЫВЫ</a></li>
          <li><a href="#contact" class="hover:text-secondary">КОНТАКТЫ</a></li>
        </ul>
      </nav>

      <!-- Контакты и соцсети -->
      <div class="flex items-center space-x-6">
        <div
          class="flex items-center space-x-2 text-dark font-['Prosto_One'] text-sm"
        >
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>+7 993 281 12 65</span>
        </div>
        <div class="flex space-x-3">
          <!-- Заглушки для иконок соцсетей -->
          <a href="#" class="text-dark hover:text-green-500 text-lg"
            ><font-awesome-icon :icon="['fab', 'whatsapp']"
          /></a>
          <a href="#" class="text-dark hover:text-blue-500 text-lg"
            ><font-awesome-icon :icon="['fab', 'telegram']"
          /></a>
          <!-- Кнопка OZON -->
          <a
            href="#"
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-['Evolventa'] text-base"
            >OZON</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Скрипт для компонента Header
</script>

<style scoped>
/* Стили для компонента Header */
</style>
