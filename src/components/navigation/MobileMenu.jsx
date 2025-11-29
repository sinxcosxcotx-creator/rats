// src/components/navigation/MobileMenu.jsx
// 移动端菜单：
// - 右上角汉堡按钮
// - 全屏遮罩 + 右侧抽屉菜单（通过 React Portal 挂在 document.body 上）
// - 打开时锁定页面滚动，关闭时恢复

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // 菜单打开时锁定滚动，关闭时恢复
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  // Portal：把遮罩 + 抽屉挂到 body 上，避免受 Navbar / Layout 影响
  const renderPortal = () => {
    if (typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
      <>
        {/* 半透明背景遮罩 */}
        <div
          onClick={close}
          className={`
            fixed inset-0 z-[998]
            bg-black/40 backdrop-blur-sm
            transition-opacity duration-300
            ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
        />

        {/* 右侧抽屉菜单 */}
        <nav
          className={`
            fixed inset-y-0 right-0 z-[999]
            w-[70%] max-w-[260px]
            bg-black/80 backdrop-blur-xl border-l border-white/10
            transition-transform duration-300
            ${open ? 'translate-x-0' : 'translate-x-full'}
            flex flex-col p-6 space-y-6
          `}
        >
          {/* 菜单项目（不加 overflow-y-auto，菜单本身不额外滚动） */}
          <Link
            to={ROUTES.HOME}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.home')}
          </Link>
          <Link
            to={ROUTES.PHILOSOPHY_INDEX}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.philosophy')}
          </Link>
          <Link
            to={ROUTES.SCIENCE_INDEX}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.science')}
          </Link>
          <Link
            to={ROUTES.BLOODLINES}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.bloodlines')}
          </Link>
          <Link
            to={ROUTES.ADOPTION}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.adoption')}
          </Link>
          <Link
            to={ROUTES.CONTACT}
            onClick={close}
            className="text-white text-base font-medium"
          >
            {t('nav.contact')}
          </Link>
        </nav>
      </>,
      document.body
    );
  };

  return (
    <>
      {/* 汉堡按钮（放在 Navbar 里右上角） */}
      <button
        onClick={toggle}
        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
        aria-label="Toggle menu"
      >
        {/* 上横线 */}
        <span
          className={`
            absolute w-6 h-[2px] bg-white rounded transition-all duration-300
            ${open ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'}
          `}
        />
        {/* 下横线 */}
        <span
          className={`
            absolute w-6 h-[2px] bg-white rounded transition-all duration-300
            ${open ? '-rotate-45 -translate-y-[2px]' : 'translate-y-1'}
          `}
        />
      </button>

      {/* Portal 渲染的遮罩 + 菜单 */}
      {renderPortal()}
    </>
  );
};

export default MobileMenu;
