// src/App.jsx
// 整个前端应用的框架（App Shell）：
// - 包裹主布局 MainLayout
// - 内部渲染路由对应的内容 AppRouter
// 后续如果有全局状态、主题切换、全局弹窗，都可以从这里挂起

import React from 'react';
import MainLayout from './layouts/MainLayout';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    // MainLayout 提供：导航栏 + 页脚 + 主内容区域框架
    <MainLayout>
      {/* AppRouter 负责根据当前 URL 决定要显示哪个页面 */}
      <AppRouter />
    </MainLayout>
  );
};

export default App;
