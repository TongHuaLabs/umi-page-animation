import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index', exact: true },
        { path: '/hello', component: '@/pages/hello', exact: true },
        { path: '/world', component: '@/pages/world', exact: true },
      ],
    },
  ],
});
