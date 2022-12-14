<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import characterStore from '@/store/characters.store';
import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';
import type { CharacterRickMorty } from '../interfaces/character';

const route = useRoute();
const { id } = route.params as { id: string };

const getCharacterCacheFirst = async (characterId: string) => {
  if (characterStore.checkIdInStore(characterId)) {
    return characterStore.ids.list[characterId];
  }

  const { data } = await rickAndMortyApi.get<CharacterRickMorty>(
    `/character/${characterId}`
  );
  return data;
};

const { data } = useQuery(
  ['characters', id],
  () => getCharacterCacheFirst(id),
  {
    onSuccess: (character) => {
      characterStore.loadedCharacter(character);
    },
  }
);
</script>

<template>
  <h1>Character # {{ id }}</h1>
  <h1 v-if="!data">Loading...</h1>

  <template v-else>
    <div class="character-container">
      <img :src="data.image" :alt="data.name" />

      <ul>
        <li>Name: {{ data.name }}</li>
        <li>Status: {{ data.status }}</li>
        <li>Specie: {{ data.species }}</li>
        <li>Origin: {{ data.origin.name }}</li>
        <li>Location: {{ data.location.name }}</li>
        <li>
          Episodes: {{ data.episode.length }}
          <ul>
            <li v-for="episode in data.episode" :key="episode">
              {{ episode }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
</template>

<style scoped>
.character-container {
  display: flex;
  gap: 1rem;
}

.character-container img {
  width: 200px;
  height: 200px;
  border-radius: 5px;
}
</style>
