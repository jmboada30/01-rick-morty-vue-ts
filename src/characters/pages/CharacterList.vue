<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import CardList from '@/characters/components/CardList.vue';
import { useQuery } from '@tanstack/vue-query';
import type { CharacterRickMortyResp } from '../interfaces/character';
const props = defineProps<{ title: string; visible: boolean }>();

const {
  data: charactersResp,
  isError,
  error,
  isLoading,
} = useQuery(['characters'], () =>
  rickAndMortyApi.get<CharacterRickMortyResp>('character')
);
</script>

<template>
  <h1 v-if="isError">{{ error }}</h1>

  <h1 v-if="isLoading">Loading...</h1>

  <template v-else>
    <h2>{{ props.title }}</h2>
    <CardList :characters="charactersResp!.data.results"></CardList>
  </template>
</template>

<style scoped></style>
