// src/components/ui/Card.jsx
// 通用卡片：
// - 深色半透明表面 + 细边框 + 阴影
// - hover 时表面稍微提亮，阴影变深，模拟“悬浮到你眼前一点点”的感觉

import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={
        'rounded-2xl bg-ratopia-surface border border-ratopia-border shadow-soft p-4 ' +
        'transition-all duration-200 hover:bg-ratopia-surface-soft hover:shadow-elevated ' +
        className
      }
    >
      {children}
    </div>
  );
};

export default Card;
