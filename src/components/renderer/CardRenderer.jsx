// src/components/renderer/CardRenderer.jsx
// 通用信息卡片：
// - 外链/站内路由：用 Card + Link（适合入口卡片）
// - 页内锚点（#xxx）：用“胶囊/标签”样式（更适合目录/返回导航），并做平滑滚动

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';

const scrollToAnchor = (hash) => {
  const id = (hash || '').replace(/^#/, '').trim();
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const CardRenderer = ({ item }) => {
  if (!item) return null;

  const { title, text, icon, tag, href } = item;

  // ✅ 页内锚点：#xxx —— 改为“胶囊按钮”，避免撑满一整行/整格
  if (href && href.startsWith('#')) {
    const hash = href;

    return (
      <a
        href={hash}
        onClick={(e) => {
          e.preventDefault();

          // 更新地址栏 hash（不刷新）
          if (window.location.hash !== hash) {
            window.history.replaceState(null, '', hash);
          }

          scrollToAnchor(hash);
        }}
        // 关键：inline-flex + w-fit + justify-self-start（在 grid 里也不拉伸）
        className="group inline-flex w-fit max-w-full justify-self-start items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 hover:bg-white/[0.06] hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ratopia-primary"
        title={text || title || ''}
      >
        {icon && (
          <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
            <img src={icon} alt={title || ''} className="w-4 h-4 object-contain" />
          </span>
        )}

        {title && (
          <span className="text-sm md:text-[13px] font-medium leading-none whitespace-nowrap">
            {title}
          </span>
        )}

        {/* text 可选：用于更详细提示，但保持轻量，避免变“卡片” */}
        {text && (
          <span className="hidden lg:inline text-xs text-white/60 leading-none truncate max-w-[18rem]">
            {text}
          </span>
        )}

        {tag && <Badge variant="accent">{tag}</Badge>}
      </a>
    );
  }

  // ---------- 下面保持你原本“外链/路由卡片”的风格 ----------
  const inner = (
    <div className="flex flex-col gap-3">
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

      {title && <h3 className="text-base md:text-lg font-semibold">{title}</h3>}

      {text && <p className="text-sm text-white/75 leading-relaxed">{text}</p>}
    </div>
  );

  // ✅ 普通路由跳转（或外链：看你 Link 的用法）
  if (href) {
    return (
      <Link
        to={href}
        className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ratopia-primary rounded-2xl"
      >
        <Card className="group-hover:border-ratopia-primary/80 group-hover:bg-white/5 transition-colors duration-150">
          {inner}
        </Card>
      </Link>
    );
  }

  return <Card>{inner}</Card>;
};

export default CardRenderer;
