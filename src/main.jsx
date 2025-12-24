// src/main.jsx
// React 入口：将 App 挂载到 index.html 的 #root 上，同时注入路由和国际化

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// 顶层应用组件（我们自己写的）
import App from './App';

// 初始化国际化（中英文切换）
import './i18n/i18n';

// 全局样式：Tailwind + 自定义主题变量
import '@styles/index.css';
import '@styles/theme.css';

// 找到 index.html 里的 #root 节点
const rootElement = document.getElementById('root');

// 使用 React 18 的 createRoot API 挂载
ReactDOM.createRoot(rootElement).render(
  // StrictMode 在开发环境下帮助发现潜在问题（不会影响生产环境）
  <React.StrictMode>
    {/* BrowserRouter 提供前端路由功能（URL → 组件） */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
