<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';
const props = defineProps<{ title: string; visible: boolean }>();
</script>
<template>
  <h2>{{ props.title }}</h2>

  <Suspense>
    <CardList></CardList>
  </Suspense>
</template>

<style scoped></style>
