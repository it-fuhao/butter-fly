import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
import { prismjsPlugin } from 'vite-plugin-prismjs';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default ({ mode }) => {
  console.log(resolve(__dirname, './packages'));
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // base: env.VITE_APP_MODE === "dev" ? "" : "/",
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJsx(),
      Markdown(),
      prismjsPlugin({
        languages: ['json', 'javascript'],
        //  languages: 'all',
      }),
      createStyleImportPlugin({
        resolves: [VantResolve()],
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'packages/auto-import.d.ts',
      }),
      Components({
        dts: 'packages/components.d.ts',
        extensions: ['vue', 'tsx'],
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: [
        { find: '@/site', replacement: '/site' },
        { find: '@/ui', replacement: '/ui' },
        { find: '@/packages', replacement: '/packages' },
      ],
    },
    build: {
      target: ['chrome63', 'ios11', 'es2015'],
      cssTarget: ['chrome63', 'ios11', 'es2015'],
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, './ui/index.html'),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: env.VITE_APP_MODE === 'prod',
          drop_debugger: env.VITE_APP_MODE === 'prod',
        },
      },
    },
  });
};
