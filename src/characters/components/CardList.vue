<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import { ref } from 'vue';
import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from '../interfaces/character';

const characters = ref<CharacterRickMorty[]>([]);
rickAndMortyApi.get<CharacterRickMortyResp>('/character').then((res) => {
  console.log(res.data);
  characters.value = res.data.results;
});
</script>

<template>
  <ul>
    <li v-for="character of characters" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>

<style scoped></style>
