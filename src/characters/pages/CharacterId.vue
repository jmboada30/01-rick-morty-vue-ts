<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCharacter from '@/characters/composables/useCharacter';

const route = useRoute();
const router = useRouter();
const { id } = route.params as { id: string };
const { character, isLoading, hasError, errorMessage } = useCharacter(id);

watchEffect(() => {
  if (hasError.value && !isLoading.value) {
    errorMessage.value = errorMessage.value + ' - Redirecting...';
    setTimeout(() => router.replace('/characters'), 3000);
  }
});
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>

  <h1 v-else-if="hasError">{{ errorMessage }}</h1>

  <div v-else-if="character">
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
