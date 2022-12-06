<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterRickMorty } from '../interfaces/character';

rickAndMortyApi.get<CharacterRickMorty[]>('/character').then((res) => {
  console.log(res.data);
});
</script>

<template>
  <ul>
    <li>Hola</li>
    <li>Hola</li>
    <li>Hola</li>
  </ul>
</template>

<style scoped></style>
