// vite.config.js
// Vite 的主配置文件：
// - 使用 React 插件（支持 JSX、Fast Refresh）
// - 配置路径别名，避免到处写 ../../../

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [
    // 让 Vite 支持 React 生态
    react()
  ],
  resolve: {
    alias: {
      // 使用 @ 作为 src 的别名
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
});
