<script setup lang="ts">
// import rickAndMortyApi from '@/api/rickAndMortyApi';
// import { ref } from 'vue';
// import type {
//   CharacterRickMorty,
//   CharacterRickMortyResp,
// } from '../interfaces/character';

import { useCharacters } from '../composables/useCharacters';

const { isLoading, characters } = useCharacters();
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul>
    <li v-for="character of characters" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>

<style scoped></style>
