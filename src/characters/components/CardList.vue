<script setup lang="ts">
import type { CharacterRickMorty } from "../interfaces/character";
import CharacterCard from "./CharacterCard.vue";

const props = defineProps<{ characters: CharacterRickMorty[] }>();
</script>

<template>
  <ul class="card-list">
    <CharacterCard
      v-for="character of props.characters"
      :key="character.id"
      :character="character"
    >
      {{ character.name }}
    </CharacterCard>
  </ul>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
