<script setup lang="ts">
import rickAndMortyApi from "@/api/rickAndMortyApi";
import characterStore from "@/store/characters.store";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import type { CharacterRickMorty } from "../interfaces/character";

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

const { data } = useQuery(["characters", id], () => getCharacterCacheFirst(id), {
  onSuccess: (character) => {
    characterStore.loadedCharacter(character);
  },
});
</script>

<template>
  <div>
    <h1>Character # {{ id }}</h1>

    <code>
      {{ data }}
    </code>
  </div>
</template>

<style scoped></style>
