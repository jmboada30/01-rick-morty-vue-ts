<script setup lang="ts">
import { toRefs } from 'vue';
import type { CharacterRickMorty } from '../interfaces/character';

const props = defineProps<{
  character: CharacterRickMorty;
}>();
const { character } = toRefs(props);
</script>

<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
  </div>
</template>

<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

img {
  width: 150px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 2 10px rgba(255, 255, 255, 0.1);
}
</style>
