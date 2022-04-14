import { createRouter, createWebHashHistory } from 'vue-router';

import { components } from '../../butterfly.config';


const router = createRouter({
  history: createWebHashHistory('/butter-fly/'),
  routes: [],
});

// 根据配置动态添加路由
components.map(com => {
  router.addRoute({
    path: com.path,
    name: com.name,
    component: () => import(`../components/${com.name}/index.vue`),
  })
})

export default router;