<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import { ref } from 'vue';
import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from '../interfaces/character';

const { data } = await rickAndMortyApi.get<CharacterRickMortyResp>(
  '/character'
);
const characters = ref<CharacterRickMorty[]>(data.results);
</script>

<template>
  <ul>
    <li v-for="character of characters" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>

<style scoped></style>
