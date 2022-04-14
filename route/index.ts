import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/butter-fly/'),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@site/views/index.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@site/views/guide.vue'),
    }
  ],
});

export default router;