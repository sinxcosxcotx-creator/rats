// src/i18n/i18n.js
// 初始化 i18next，用于中英文切换。
// 使用 "common" 作为默认命名空间，管理导航、首页部分文案等。

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入中英文翻译 JSON
import zhCommon from './locales/zh/common.json';
import enCommon from './locales/en/common.json';

// 从本地存储读取上一次选择的语言，没有则默认 zh
const STORAGE_KEY = 'ratopia_lang';
const savedLang =
  typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
const initialLang = savedLang || 'zh';

i18n
  // 让 i18next 和 React 绑定
  .use(initReactI18next)
  // 初始化配置
  .init({
    resources: {
      zh: {
        common: zhCommon
      },
      en: {
        common: enCommon
      }
    },
    lng: initialLang,   // ✅ 默认语言：本地记录 / 中文
    fallbackLng: 'en',  // 如果找不到中文翻译，就退回英文
    ns: ['common'],     // 使用的命名空间列表
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React 已经做了 XSS 保护，这里关掉转义
    }
  });

// 监听语言切换事件，写入 localStorage，刷新后仍然保持
i18n.on('languageChanged', (lng) => {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lng);
    }
  } catch (e) {
    // 忽略本地存储错误（如隐私模式）
    console.warn('[i18n] failed to persist language:', e);
  }
});

export default i18n;
