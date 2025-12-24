// src/components/renderer/HeroRenderer.jsx
// Hero：
// - 左侧文案，右侧图片（可选）
// - 增加轻微的渐变背景和发光效果，让页面开头更有“入口感”

import React from 'react';
import Button from '@components/ui/Button';

const isFileLike = (url = '') => {
  const s = String(url).toLowerCase();
  return s.endsWith('.pdf') || s.endsWith('.doc') || s.endsWith('.docx');
};

const isExternal = (url = '') => /^https?:\/\//i.test(String(url));

const HeroRenderer = ({ data }) => {
  const {
    eyebrow,
    title,
    subtitle,
    backgroundImage,
    align = 'left',
    buttons = []
  } = data;

  return (
    <section className="pt-8 md:pt-8 pb-10 md:pb-12 relative">
      {/* 底层柔和渐变光晕 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 right-0 h-72 bg-gradient-to-b from-ratopia-primary-soft/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* 文案区域 */}
        <div className={`flex-1 ${align === 'center' ? 'text-center' : 'text-left'}`}>
          {eyebrow && (
            <div className="text-lg uppercase tracking-[0.22em] text-ratopia-accent mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed mb-5">
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {buttons.map((btn, idx) => {
                const url = btn.href;

                // 1) 外链或文件：用 <a href=...>
                if (isExternal(url) || isFileLike(url)) {
                  return (
                    <Button
                      key={idx}
                      variant={btn.variant || 'primary'}
                      href={url}
                      download={!!btn.download}
                      target={btn.target}
                      rel={btn.rel}
                    >
                      {btn.text}
                    </Button>
                  );
                }

                // 2) 站内：用 <Link to=...>
                return (
                  <Button
                    key={idx}
                    variant={btn.variant || 'primary'}
                    to={url}
                  >
                    {btn.text}
                  </Button>
                );
              })}
            </div>
          )}
        </div>

        {/* 右侧展示图（可选） */}
        {backgroundImage && (
          <div className="flex-1 w-full max-w-md">
            <div className="relative rounded-3xl overflow-hidden border border-ratopia-border bg-ratopia-surface shadow-elevated">
              <img
                src={backgroundImage}
                alt={title || 'Hero image'}
                className="w-full h-full object-cover"
              />
              {/* 叠一层渐变罩，让图片和整体色调更统一 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-ratopia-primary-soft" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroRenderer;
