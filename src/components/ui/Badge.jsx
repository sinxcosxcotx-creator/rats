// src/components/ui/Badge.jsx
// 小标签组件：
// - 用于显示血线标签 / 性别标签 / 状态等
// - 比 Button 更轻量，不可点击（或仅作装饰）

import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  let style = 'bg-white/10 text-white';

  if (variant === 'outline') {
    style = 'border border-ratopia-border text-white';
  }
  if (variant === 'accent') {
    style = 'bg-ratopia-primary/15 text-ratopia-primary';
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${style} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
