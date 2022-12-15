<script setup lang="ts">
import { useRoute } from 'vue-router';
import useCharacter from '@/characters/composables/useCharacter';

const route = useRoute();
const { id } = route.params as { id: string };
const { character } = useCharacter(id);
</script>

<template>
  <h1 v-if="!character">Loading...</h1>

  <div v-else>
    <h1>{{ character.name }}</h1>
    <div class="character-container">
      <img :src="character.image" :alt="character.name" />

      <ul>
        <li>Status: {{ character.status }}</li>
        <li>Specie: {{ character.species }}</li>
        <li>Origin: {{ character.origin.name }}</li>
        <li>Location: {{ character.location.name }}</li>
      </ul>
    </div>
  </div>
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
