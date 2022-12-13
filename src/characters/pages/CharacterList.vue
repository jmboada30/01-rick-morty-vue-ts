<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import characterStore from '@/store/characters.store';

import CardList from '@/characters/components/CardList.vue';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterRickMortyResp } from '@/characters/interfaces/character';

const props = defineProps<{ title: string; visible: boolean }>();

useQuery(['characters'], () =>
  rickAndMortyApi.get<CharacterRickMortyResp>('character'),
  {
    onSuccess: (data) => characterStore.loadedCharacters(data.data.results),
  }
);
</script>

<template>
  <h1 v-if="characterStore.characters.hasError">
    {{ characterStore.characters.errorMessage }}
  </h1>

  <h1 v-if="characterStore.characters.isLoading">Loading...</h1>

  <template v-else>
    <h2>{{ props.title }}</h2>
    <CardList :characters="characterStore.characters.list"></CardList>
  </template>
</template>

<style scoped></style>
