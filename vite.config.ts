import { resolve } from "path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: [
        { find: "@site", replacement: "/site" },
        { find: "@route", replacement: "/route" },
      ],
    },
  })
}
