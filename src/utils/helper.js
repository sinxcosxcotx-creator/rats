// src/utils/helper.js
// 通用小工具函数集中地。
// 目前可以先留空，后续写到处要用的小逻辑时再往这里放。

/**
 * 安全获取数组（防止传 null/undefined）
 */
export const toArray = (maybeArray) => {
  if (!maybeArray) return [];
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
};
