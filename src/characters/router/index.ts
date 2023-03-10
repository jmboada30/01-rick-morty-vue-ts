import type { RouteRecordRaw } from 'vue-router';
import CharacterLayout from '../layout/CharacterLayout.vue';
import CharacterId from '../pages/CharacterId.vue';
import CharacterList from '../pages/CharacterList.vue';
import CharacterSearch from '../pages/CharacterSearch.vue';

const characterRoute: RouteRecordRaw = {
  path: '/characters',
  name: 'characters',
  redirect: '/characters/list',
  component: CharacterLayout,
  children: [
    {
      path: 'by/:id',
      name: 'character-id',
      props: { title: 'Por Id', visible: false },
      component: CharacterId,
    },
    {
      path: '/characters/list',
      name: 'character-list',
      props: { title: 'Lista Completa', visible: true },
      component: CharacterList,
    },
    {
      path: '/characters/search',
      name: 'character-search',
      props: { title: 'Busqueda', visible: true },
      component: CharacterSearch,
    },
  ],
};

export default characterRoute;
