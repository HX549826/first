import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    { path: '/', component: 'index' },
  ],
});
