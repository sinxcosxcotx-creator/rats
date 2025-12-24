// src/components/renderer/SectionRenderer.jsx
// 单个 Section 渲染器：
// - 渲染标题 / 副标题
// - 将具体内容交给 BlockRenderer 处理（根据 type 决定渲染形式）

import React from 'react';
import BlockRenderer from './BlockRenderer';

const SectionRenderer = ({ data }) => {
  if (!data) return null;

  const { id, title, subtitle } = data;

  return (
    <section
      id={id || undefined}
      className="max-w-content mx-auto px-4 md:px-6 lg:px-8 scroll-mt-24"
    >
      {/* 文字头部 */}
      {(title || subtitle) && (
        <header className="mb-6 md:mb-8">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
      )}

      {/* 交给 BlockRenderer 渲染具体块内容 */}
      <BlockRenderer block={data} />

      {/* 如果是“分隔块”类型，可以后续加 Divider，这里暂不自动加 */}
    </section>
  );
};

export default SectionRenderer;
