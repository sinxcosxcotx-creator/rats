// src/utils/constants.js
// 全局常量集中管理：
// - 路由路径（避免在代码里到处写字符串）
// - 将来如果有枚举、配置常量，也可以集中放在这里

// 整站路由常量：
// 如果以后你想调整路径（比如 /adoption 改成 /adopt），只需要改这里即可。
export const ROUTES = {
  HOME: '/',

  PHILOSOPHY_INDEX: '/philosophy',
  PHILOSOPHY_RAISE: "/philosophy/raise",
  PHILOSOPHY_MEDICAL: "/philosophy/medical",
  PHILOSOPHY_BREED: "/philosophy/breed",
  PHILOSOPHY_QA: "/philosophy/Q&A",

  SCIENCE_INDEX: '/science',
  SCIENCE_GENETICS: '/science/genetics',
  SCIENCE_CARE: '/science/care',
  SCIENCE_HEALTH: '/science/health',
  SCIENCE_PREPARE: "/science/prepare",

  // ✅ 已有：科普专题（饮食/营养）页面
  SCIENCE_DIET: "/science/diet",

  // ✅ 已有：科普专题（该挑哪种花枝鼠）
  SCIENCE_CHOOSE: "/science/choose",

  // ✅ 已有：科普专题（大鼠起源）
  SCIENCE_ORIGIN: "/science/origin",

  // ✅ 已有：科普专题（大鼠个体行为观察 / 大鼠群体行为观察）
  // 注意：按你的要求，这里不使用 "-" 连字符
  SCIENCE_BEHAVIOR_INDIVIDUAL: "/science/behaviorindividual",
  SCIENCE_BEHAVIOR_GROUP: "/science/behaviorgroup",

  // ✅ 新增：科普专题（老鼠啃咬 / 老鼠合笼）
  // 注意：按你的要求，这里不使用 "-" 连字符
  SCIENCE_BITING: "/science/biting",
  SCIENCE_INTRODUCTIONS: "/science/introductions",

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
