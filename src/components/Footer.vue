<template>
  <footer class="bg-dark text-light p-4 mt-8">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} Fakun. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Styles for Footer component */
</style>
