<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HomePage from "./views/HomePage.vue";
</script>

<template>
  <Header />
  <main class="flex-grow">
    <HomePage />
  </main>
  <Footer />
</template>

<style scoped>
/* Здесь будут ваши общие стили App.vue, если они понадобятся */
</style>
