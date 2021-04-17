import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import ResourceHome from './components/ResourceHome.vue'
import ResourceList from './components/ResourceList.vue';
import ResourceForm from './components/ResourceForm.vue';
import ResourceDetails from './components/ResourceDetails.vue';

const router = createRouter({
  routes: [
    { path: '/', component: ResourceHome },
    { path: '/details', component: ResourceList, children: 
      [
        { path: ':id', component: ResourceDetails, props: true }
      ]
    },
    { path: '/add', component: ResourceForm },
  ],
  history: createWebHistory()
});

createApp(App).use(router).mount('#app')
