// src/components/navigation/MobileMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      {/* --- 汉堡按钮（带动画） --- */}
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

      {/* --- 半透明背景蒙版（点击关闭） --- */}
      <div
        onClick={close}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* --- 抽屉层（右侧滑入） --- */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[70%] max-w-[260px]
          bg-black/70 backdrop-blur-xl border-l border-white/10
          transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col p-6 space-y-6 overflow-y-auto
        `}
      >

        {/* 菜单项目 */}
        <Link to={ROUTES.HOME} onClick={close} className="text-white text-base font-medium">
          {t('nav.home')}
        </Link>
        <Link to={ROUTES.PHILOSOPHY_INDEX} onClick={close} className="text-white text-base font-medium">
          {t('nav.philosophy')}
        </Link>
        <Link to={ROUTES.SCIENCE_INDEX} onClick={close} className="text-white text-base font-medium">
          {t('nav.science')}
        </Link>
        <Link to={ROUTES.BLOODLINES} onClick={close} className="text-white text-base font-medium">
          {t('nav.bloodlines')}
        </Link>
        <Link to={ROUTES.ADOPTION} onClick={close} className="text-white text-base font-medium">
          {t('nav.adoption')}
        </Link>
        <Link to={ROUTES.CONTACT} onClick={close} className="text-white text-base font-medium">
          {t('nav.contact')}
        </Link>

      </div>
    </>
  );
};

export default MobileMenu;
