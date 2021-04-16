import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import ResourceList from './components/ResourceList.vue';
import ResourceForm from './components/ResourceForm.vue';
import ResourceDetails from './components/ResourceDetails.vue';

const router = createRouter({
  routes: [
    { path: '/', component: ResourceList },
    { path: '/add', component: ResourceForm },
    { path: '/details/:id', component: ResourceDetails },
  ],
  history: createWebHistory()
});

createApp(App).use(router).mount('#app')
