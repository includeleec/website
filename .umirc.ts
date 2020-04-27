import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Nax.one - 致力于打造一流的星云链 PoD 节点服务',
  favicon: '/assets/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
