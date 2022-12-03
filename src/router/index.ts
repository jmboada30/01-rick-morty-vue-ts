import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import characterRoute from '@/characters/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public routes
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Characters
    { ...characterRoute, path: '/characters' },

    // Defaults
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' }),
    },
  ],
});

// 2da forma de agregar rutas
// router.addRoute(characterRoute);

export default router;
