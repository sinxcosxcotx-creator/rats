// src/components/navigation/Navbar.jsx
// 顶部导航栏：
// - 固定在顶部，背景是透明 → 滚动后变成半透明深色 + 玻璃模糊
// - 中间是导航链接，右侧是语言切换 + 移动端菜单
// - active 链接使用主色，有一个细小的“下划线”强调

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { ROUTES } from '@utils/constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-bold transition-colors duration-150 ${
      isActive ? 'text-ratopia-primary' : 'text-white/80 hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-black/50 border-b border-ratopia-border backdrop-blur-xl'
          : 'bg-black/0'
      }`}
    >
      <nav className="max-w-content mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* 左侧 LOGO 区域 */}
          <div className="flex items-center gap-2">
             {/* LOGO 图片（圆形剪裁） */}
            <img
                src="/logo/logo.JPG"
                alt="Ratopia Logo"
                className="w-8 h-8 object-cover rounded-full shadow-glow-primary"
              />

         {/* 文案部分 - 两行统一样式 */}
          <div className="flex flex-col leading-tight">
        {/* 统一为与 Rattery 相同样式 */}
                <span className="text-sm font-semibold">RATOPIA</span>
                <span className="text-sm font-semibold">RATTERY</span>
              </div>
            </div>


        {/* 中间导航（桌面端） */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to={ROUTES.HOME} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.home')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-6 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
          <NavLink to={ROUTES.PHILOSOPHY_INDEX} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.philosophy')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-8 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
          <NavLink to={ROUTES.SCIENCE_INDEX} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.science')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-7 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
          <NavLink to={ROUTES.BLOODLINES} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.bloodlines')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-9 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
          <NavLink to={ROUTES.ADOPTION} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.adoption')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-8 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={navLinkClass}>
            {({ isActive }) => (
              <span className="inline-flex flex-col items-center">
                <span>{t('nav.contact')}</span>
                {isActive && (
                  <span className="mt-1 h-[2px] w-7 rounded-full bg-gradient-to-r from-ratopia-primary to-ratopia-accent" />
                )}
              </span>
            )}
          </NavLink>
        </div>

        {/* 右侧：语言切换 + 移动端菜单 */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
