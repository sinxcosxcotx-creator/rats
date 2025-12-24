// src/components/renderer/GridRenderer.jsx
// 用于网格布局：
// - 根据传入的 columns 决定栅格列数
// - 封装通用的 gap / breakpoint

import React from 'react';

const GridRenderer = ({ columns = 2, children }) => {
  const gridColsClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    // ✅ 目录胶囊更好看：gap 稍微收紧
    <div className={`grid ${gridColsClass} gap-3 md:gap-4`}>
      {children}
    </div>
  );
};

export default GridRenderer;
