// src/layouts/MainLayout.jsx
// 站点主布局：
//
// 结构：
// <body>
//   <Navbar />
//   <main> 这里渲染具体页面内容 </main>
//   <Footer />
// </body>
//
// 所有页面内容都是作为 children 传入 MainLayout 的

import React from 'react';
import Navbar from '@components/navigation/Navbar';
import Footer from '@components/navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-ratopia-bg text-white">
      {/* 固定在顶部的导航栏 */}
      <Navbar />

      {/* 主内容区域：顶部预留导航高度，底部自动撑开 */}
      <main className="flex-1 pt-20 pb-10">
        {children}
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default MainLayout;
