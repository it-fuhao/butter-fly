import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import symbols from 'log-symbols';
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

const outputDir = 'dist'; // 构建产物文件夹名称

// 打包的入口文件
const packageName = process.argv[2].split('=')[1];
const entryDir = path.resolve('./');
console.log(entryDir);
// 出口文件夹
const outDir = path.resolve(`./${outputDir}`);
console.log('outDir', outDir);
// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [
    vue(), 
    vueJsx(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ]
})
// rollup配置
const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: [
    'vue',
    'vant'
  ],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    global: {
      vue: 'Vue',
      vant: 'Vant'
    }
  }
}
// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: packageName, // umd的变量名
        fileName: (format) => `index.${format}.js`, // 输出文件名
        formats: ['es', 'umd'],
      },
      outDir
    },
  })
}

/**
 * 删除文件夹
 * @param {*} dir 需要删除的文件夹 
 * @returns 
 */
const removeDir = dir => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dir)) {
      //先读文件夹
      fs.stat(dir, (err, stat) => {
        if (stat.isDirectory()) {
          fs.readdir(dir, (err, files) => {
            files = files.map(file => path.join(dir, file));
            files = files.map(file => removeDir(file));
            Promise.all(files).then(() => {
              fs.rmdir(dir, resolve);
            })
          })
        }else {
          fs.unlink(dir, resolve);
        }
      })
    } else {
      resolve(true);
    }
  })
}

const buildComponent = async () => {
  // 先删除dist
  await removeDir(outDir);
  // 开始构建
  await buildAll();
  console.log(symbols.success, chalk.green(`${packageName}构建成功！`));
}

buildComponent();
