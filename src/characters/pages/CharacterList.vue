<script setup lang="ts">
import useCharacters from '@/characters/composables/useCharacters';
import CardList from '../components/CardList.vue';

defineProps<{ title: string; visible: boolean }>();
const { characters, count, errorMessage, hasError, isLoading } =
  useCharacters();
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>

  <h1 v-else-if="hasError">Error: {{ errorMessage }}</h1>

  <template v-else>
    <h2>{{ title }} - ({{ count }})</h2>
    <CardList :characters="characters"></CardList>
  </template>
</template>

<style scoped></style>
