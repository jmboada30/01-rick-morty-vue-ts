<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import characterStore from '@/store/characters.store';

import CardList from '@/characters/components/CardList.vue';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterRickMortyResp } from '@/characters/interfaces/character';

const props = defineProps<{ title: string; visible: boolean }>();

const getCharactersCacheFirst = async () => {
  if (characterStore.characters.count > 0) {
    return characterStore.characters.list;
  }

  const { data } = await rickAndMortyApi.get<CharacterRickMortyResp>(
    'character'
  );

  return data.results;
};

useQuery(['characters'], getCharactersCacheFirst, {
  onSuccess: (data) => characterStore.loadedCharacters(data),
});
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
