// src/components/renderer/CardRenderer.jsx
// 通用信息卡片：
// - 渲染 icon / 标题 / 文本 / tag（小标签）
// - 如果传入 item.href，则整个卡片可点击跳转（使用 React Router Link）
//   → 适合在 “科普总览页” 做三个模块入口卡片

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';

const CardRenderer = ({ item }) => {
  if (!item) return null;

  const { title, text, icon, tag, href } = item;

  const inner = (
    <div className="flex flex-col gap-3">
      {/* 图标 + 标签 */}
      {(icon || tag) && (
        <div className="flex items-center justify-between gap-2">
          {icon && (
            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
              <img src={icon} alt={title || ''} className="w-5 h-5 object-contain" />
            </div>
          )}
          {tag && <Badge variant="accent">{tag}</Badge>}
        </div>
      )}

      {/* 标题 */}
      {title && (
        <h3 className="text-base md:text-lg font-semibold">
          {title}
        </h3>
      )}

      {/* 文本 */}
      {text && (
        <p className="text-sm text-white/75 leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );

  // 如果有 href，将 Card 包裹在 Link 中（整块可点击）
  if (href) {
    return (
      <Link to={href} className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ratopia-primary rounded-2xl">
        <Card className="group-hover:border-ratopia-primary/80 group-hover:bg-white/5 transition-colors duration-150">
          {inner}
        </Card>
      </Link>
    );
  }

  // 否则就是普通信息卡片
  return <Card>{inner}</Card>;
};

export default CardRenderer;
