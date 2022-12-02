<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <img src="@/assets/logo.svg" alt="Logo Vue" height="25" width="25" />
    <span>algo</span>

    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/about">Sobre</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
}

img {
  margin-right: 1rem;
}

span {
  margin-right: 1rem;
}

a {
  margin-right: 1rem;
}
</style>
