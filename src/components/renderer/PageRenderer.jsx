// src/components/renderer/PageRenderer.jsx
// 页面级渲染器：
// - 接收一个 content 对象（来自对应的 content/*.json）
// - 按顺序渲染 hero + sections

import React from 'react';
import HeroRenderer from './HeroRenderer';
import SectionRenderer from './SectionRenderer';

const PageRenderer = ({ content }) => {
  const { hero, sections } = content || {};

  return (
    <div className="space-y-10 md:space-y-14">
      {/* 顶部 Hero */}
      {hero && <HeroRenderer data={hero} />}

      {/* 逐个渲染 Section */}
      {Array.isArray(sections) &&
        sections.map((section, idx) => (
          <SectionRenderer key={section.id || idx} data={section} />
        ))}
    </div>
  );
};

export default PageRenderer;
