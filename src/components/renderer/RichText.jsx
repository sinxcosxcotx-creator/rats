// src/components/renderer/RichText.jsx
// 富文本渲染器：
// - 将 JSON 数组形式的正文内容渲染为段落 / 列表等
// - 每个 block 对象格式：
//   { type: 'paragraph', text: '...' }
//   { type: 'list', style: 'bullet' | 'numbered', items: ['...', '...'] }

import React from 'react';

const RichText = ({ content }) => {
  if (!Array.isArray(content) || content.length === 0) return null;

  return (
    <div className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
      {content.map((block, idx) => {
        if (!block || !block.type) return null;

        if (block.type === 'paragraph') {
          return <p key={idx}>{block.text}</p>;
        }

        if (block.type === 'list') {
          const ListTag = block.style === 'numbered' ? 'ol' : 'ul';
          return (
            <ListTag
              key={idx}
              className={block.style === 'numbered' ? 'list-decimal pl-5' : 'list-disc pl-5'}
            >
              {Array.isArray(block.items) &&
                block.items.map((itemText, liIdx) => <li key={liIdx}>{itemText}</li>)}
            </ListTag>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RichText;
