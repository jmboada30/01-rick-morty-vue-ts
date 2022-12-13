import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';

import './assets/main.css';
import router from './router';

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.mount('#app');
