// src/components/renderer/GalleryRenderer.jsx
import React from 'react';

const GalleryRenderer = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {images.map((img, idx) => (
        <div
          key={img.src || idx}
          className="overflow-hidden rounded-2xl"
        >
          {/* 关键：固定画幅比例（可改成 aspect-[4/3]、aspect-[16/9] 等） */}
          <div className="relative w-full aspect-square">
            <img
              src={img.src}
              alt={img.alt || ''}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryRenderer;
