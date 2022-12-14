<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import type { CharacterRickMorty } from '../interfaces/character';
const router = useRouter();
const props = defineProps<{
  character: CharacterRickMorty;
}>();
const { character } = toRefs(props);

const goToCharacter = () => {
  router.push(`by/${character.value.id}`);
};
</script>

<template>
  <div class="character-card" @click="goToCharacter">
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
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: box-shadow .5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.9);
  transition: box-shadow .5s;
}
</style>
