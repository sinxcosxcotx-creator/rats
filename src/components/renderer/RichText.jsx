// src/components/renderer/RichText.jsx
// 富文本渲染器：
// - paragraph: { type: 'paragraph', text: '...' }
// - heading:   { type: 'heading', level?: 2|3|4, text: '...' }
// - list:      { type: 'list', style: 'bullet' | 'numbered', items: ['...', '...'] }

import React from 'react';

const RichText = ({ content }) => {
  if (!Array.isArray(content) || content.length === 0) return null;

  return (
    <div className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
      {content.map((block, idx) => {
        if (!block || !block.type) return null;

        // ✅ 小标题
        if (block.type === 'heading') {
          const levelRaw = Number(block.level ?? 3);
          const level = Math.min(Math.max(levelRaw, 2), 4); // 限制 2~4
          const Tag = `h${level}`;

          const cls =
            level === 2
              ? 'text-xl md:text-2xl font-semibold text-white mt-8'
              : level === 3
              ? 'text-lg md:text-xl font-semibold text-white mt-6'
              : 'text-base md:text-lg font-semibold text-white mt-5';

          return (
            <Tag key={idx} className={cls}>
              {block.text}
            </Tag>
          );
        }

        // ✅ 段落（支持 \n 换行 / \n\n 空行）
        if (block.type === 'paragraph') {
          return (
            <p key={idx} className="whitespace-pre-line">
              {block.text}
            </p>
          );
        }

        // ✅ 列表
        if (block.type === 'list') {
          const ListTag = block.style === 'numbered' ? 'ol' : 'ul';
          return (
            <ListTag
              key={idx}
              className={block.style === 'numbered' ? 'list-decimal pl-5' : 'list-disc pl-5'}
            >
              {Array.isArray(block.items) &&
                block.items.map((itemText, liIdx) => (
                  <li key={liIdx} className="whitespace-pre-line">
                    {itemText}
                  </li>
                ))}
            </ListTag>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RichText;
