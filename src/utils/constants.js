// src/utils/constants.js
// 全局常量集中管理：
// - 路由路径（避免在代码里到处写字符串）
// - 将来如果有枚举、配置常量，也可以集中放在这里

// 整站路由常量：
// 如果以后你想调整路径（比如 /adoption 改成 /adopt），只需要改这里即可。
export const ROUTES = {
  HOME: '/',

  PHILOSOPHY_INDEX: '/philosophy',
  PHILOSOPHY_TEMPERAMENT: "/philosophy/temperament",
  PHILOSOPHY_HEALTH: "/philosophy/health",
  PHILOSOPHY_SCALE: "/philosophy/scale",
  PHILOSOPHY_HONESTY: "/philosophy/honesty",

  SCIENCE_INDEX: '/science',
  SCIENCE_GENETICS: '/science/genetics',
  SCIENCE_CARE: '/science/care',
  SCIENCE_HEALTH: '/science/health',
  SCIENCE_PREPARE: "/science/prepare",
  
  BLOODLINES: '/bloodlines',
  ADOPTION: '/adoption',
  CONTACT: '/contact'
};

// 如果将来你需要在 JSON 里用到这些 key，也可以导出一个简单映射：
// export const PAGE_KEYS = {
//   HOME: 'home',
//   PHILOSOPHY: 'philosophy',
//   ...
// };
