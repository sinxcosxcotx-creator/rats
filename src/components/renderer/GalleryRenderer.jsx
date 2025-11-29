// src/components/renderer/GalleryRenderer.jsx
// 图片画廊组件：
// - 接受一组 { src, alt, caption } 对象
// - 统一布局和样式

import React from 'react';

const GalleryRenderer = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {images.map((img, idx) => (
        <figure
          key={img.src || idx}
          className="rounded-2xl overflow-hidden border border-ratopia-border/80 bg-ratopia-surface"
        >
          <img
            src={img.src}
            alt={img.alt || ''}
            className="w-full h-40 md:h-48 object-cover"
          />
          {img.caption && (
            <figcaption className="px-3 py-2 text-[11px] text-white/70">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default GalleryRenderer;
