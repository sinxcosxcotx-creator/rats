// src/components/renderer/BlockRenderer.jsx
// BlockRenderer 是 Section 内容的“调度中心”
//
// 它根据 block.type 的不同，选择不同的渲染方式：
//
// - "grid-cards"      → 通用信息卡片网格（用于理念、科普条目等）
// - "split"           → 左右分栏布局（左文字右图/右文字左图）
// - "gallery"         → 图集展示
// - "rich-text"       → 纯文本/列表内容
// - "divider"         → 分割线
// - "mouse-grid"      → 待领养/种鼠卡片网格（用 MouseCard 渲染）
// - "bloodline-grid"  → 血线卡片网格（用 BloodlineCard 渲染）
//
// 这样，页面 JSON 只需要声明 type 和对应字段，就能自动选择合适组件。

import React from 'react';

import GridRenderer from './GridRenderer';
import CardRenderer from './CardRenderer';
import GalleryRenderer from './GalleryRenderer';
import RichText from './RichText';
import Divider from './Divider';

// 业务相关组件
import MouseCard from '@components/domain/MouseCard';
import BloodlineCard from '@components/domain/BloodlineCard';

// 示例数据：实际项目中你可以完全由 JSON 覆盖
import adoptionsData from '@data/adoptions.json';
import bloodlinesData from '@data/bloodlines.json';

const BlockRenderer = ({ block }) => {
  if (!block || !block.type) {
    return null;
  }

  const { type } = block;

  switch (type) {
    // 1) 通用信息卡片网格
    case 'grid-cards': {
      const columns = block.columns || 2;
      const items = block.items || [];
      return (
        <GridRenderer columns={columns}>
          {items.map((item, idx) => (
            <CardRenderer key={item.id || idx} item={item} />
          ))}
        </GridRenderer>
      );
    }

    // 2) 左右分栏布局（用于介绍性内容）
    // src/components/renderer/BlockRenderer.jsx 片段

// 2) 左右分栏布局（用于介绍性内容）
case 'split': {
  const { image, body, layout = 'image-right' } = block;

  // 当 layout === "image-left" 时，希望“图片在左、文字在右”
  const isImageLeft = layout === 'image-left';

  // DOM 顺序是：先文字，再图片
  // 通过 Tailwind 的 order 类来控制视觉顺序
  const textClasses = `flex-1 ${isImageLeft ? 'order-2' : 'order-1'}`;
  const imageClasses = `flex-1 ${isImageLeft ? 'order-1' : 'order-2'}`;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      {/* 图片区域（可选） */}
      {image && (
        <div className={imageClasses}>
          <div className="rounded-2xl border border-ratopia-border/80 bg-ratopia-surface overflow-hidden shadow-soft">
            <img
              src={image.src}
              alt={image.alt || ''}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* 文本区域 */}
      <div className={textClasses}>
        <RichText content={body} />
      </div>
    </div>
  );
}


    // 3) 图集展示
    case 'gallery': {
      return <GalleryRenderer images={block.images || []} />;
    }

    // 4) 纯富文本（段落 + 列表）
    case 'rich-text': {
      return <RichText content={block.body || []} />;
    }

    // 5) 分割线
    case 'divider': {
      return <Divider />;
    }

    // 6) 待领养/种鼠网格
    //
    // 使用方式示例（在 JSON 中）：
    // {
    //   "type": "mouse-grid",
    //   "title": "...",
    //   "dataSource": "adoptions",  // 可选，使用 data/adoptions.json
    //   "items": [ ... ]            // 可选，直接写在页面 JSON 中
    // }
    case 'mouse-grid': {
      // 优先使用当前页面 JSON 定义的 items，否则 fallback 到全局 adoptionsData
      const items = Array.isArray(block.items) && block.items.length > 0
        ? block.items
        : adoptionsData;

      const columns = block.columns || 2;

      return (
        <GridRenderer columns={columns}>
          {items.map((mouse, idx) => (
            <MouseCard key={mouse.id || idx} mouse={mouse} />
          ))}
        </GridRenderer>
      );
    }

    // 7) 血线网格
    //
    // JSON 示例：
    // {
    //   "type": "bloodline-grid",
    //   "title": "...",
    //   "items": [ ... ]            // 可选
    // }
    case 'bloodline-grid': {
      const items = Array.isArray(block.items) && block.items.length > 0
        ? block.items
        : bloodlinesData;

      const columns = block.columns || 2;

      return (
        <GridRenderer columns={columns}>
          {items.map((bloodline, idx) => (
            <BloodlineCard
              key={bloodline.id || bloodline.code || idx}
              bloodline={bloodline}
            />
          ))}
        </GridRenderer>
      );
    }

    // 未知类型 → 输出提示，方便调试（线上可以改成静默）
    default:
      return (
        <div className="text-xs text-red-300">
          Unknown block type: <code>{String(type)}</code>
        </div>
      );
  }
};

export default BlockRenderer;
