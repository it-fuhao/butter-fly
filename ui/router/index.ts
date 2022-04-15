import { createRouter, createWebHashHistory } from 'vue-router';

import { views } from '../../butterfly.config';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

// 根据配置动态添加路由
views.map(com => {
  router.addRoute({
    path: com.path,
    name: com.name,
    component: () => import(`../views/${com.name}/index.vue`),
  })
})

export default router;