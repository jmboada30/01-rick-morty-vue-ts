<script setup lang="ts">
// USANDO COMPOSABLES
// import { useCharacters } from '@/characters/composables/useCharacters';
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

// USANDO @tanstack/vue-query
// refrescar la data cada vez que se conecte a internet y el cacheTime es de 1 minuto
import { useQuery } from '@tanstack/vue-query';

const getCharacterSlow = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
};

const {
  data: characters,
  isError,
  error,
  isLoading,
} = useQuery(['characters'], getCharacterSlow, {
  cacheTime: 1000 * 60,
  refetchOnReconnect: 'always'
});
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-if="isError">{{ error }}</h1>
  <ul>
    <li v-for="character of characters" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>

<style scoped></style>
