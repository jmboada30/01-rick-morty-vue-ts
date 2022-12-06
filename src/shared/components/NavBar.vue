<script setup lang="ts">
import type { RouteLink } from '@/router/link-routes';

export interface Props {
  title?: string;
  links?: RouteLink[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  links: () => [],
  showIcon: true,
});
</script>

<template>
  <nav>
    <img
      v-if="props.showIcon"
      src="@/assets/logo.svg"
      alt="Logo Vue"
      height="25"
      width="25"
    />
    <span v-if="props.title">{{ props.title }}</span>

    <RouterLink v-for="link of props.links" :key="link.name" :to="link.path">{{
      link.title
    }}</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
}

img {
  margin-right: 1rem;
}

span {
  margin-right: 1rem;
}

a {
  margin-right: 1rem;
}
</style>
