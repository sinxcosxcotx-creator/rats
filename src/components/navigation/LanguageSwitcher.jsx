// src/components/navigation/LanguageSwitcher.jsx
// 中英文切换组件：
// - 通过 useTranslation 拿到 i18n 实例
// - 根据当前语言显示不同按钮文本
// - 点击后在 zh / en 之间切换

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // 归一化当前语言：只认 zh / en 两种
  const currentLang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';

  const toggleLanguage = () => {
    const next = currentLang === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(next);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="text-[11px] px-2 py-1 border border-ratopia-border rounded-full hover:border-ratopia-primary hover:text-ratopia-primary transition-colors duration-150"
    >
      {currentLang === 'zh' ? '中 / EN' : 'EN / 中'}
    </button>
  );
};

export default LanguageSwitcher;
