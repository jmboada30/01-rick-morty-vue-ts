import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';

import './assets/main.css';
import router from './router';

const app = createApp(App);

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 2,
        refetchOnReconnect: 'always',
      },
    },
  },
});

app.use(router);
app.mount('#app');
