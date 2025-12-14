// src/router/AppRouter.jsx
// 负责定义整个站点的前端路由结构：
// 不同 URL path 对应不同的 JSON 页面

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JSONPage from '@pages/JSONPage';
import NotFound from '@pages/NotFound'; // 👈 新增
import { ROUTES } from '@utils/constants';
import useScrollToTop from '@utils/useScrollToTop';

const AppRouter = () => {
  // 每次路径变化时，自动滚动到顶部，避免从中间开始看页面
  useScrollToTop();

  return (
    <Routes>
      {/* 主页：内容来自 src/content/home.json */}
      <Route
        path={ROUTES.HOME}
        element={<JSONPage pageKey="home" />}
      />

      {/* 鼠舍理念：src/content/philosophy/index.json */}
      <Route
        path={ROUTES.PHILOSOPHY_INDEX}
        element={<JSONPage pageKey="philosophy/index" />}
      />

      {/* 鼠舍理念子页 */}
      <Route
        path={ROUTES.PHILOSOPHY_RAISE}
        element={<JSONPage pageKey="philosophy/raise" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_MEDICAL}
        element={<JSONPage pageKey="philosophy/medical" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_BREED}
        element={<JSONPage pageKey="philosophy/breed" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_QA}
        element={<JSONPage pageKey="philosophy/Q&A" />}
      />

      {/* 科普总览 */}
      <Route
        path={ROUTES.SCIENCE_INDEX}
        element={<JSONPage pageKey="science/index" />}
      />

      {/* 科普子页 */}
      <Route
        path={ROUTES.SCIENCE_GENETICS}
        element={<JSONPage pageKey="science/genetics" />}
      />
      <Route
        path={ROUTES.SCIENCE_CARE}
        element={<JSONPage pageKey="science/care" />}
      />
      <Route
        path={ROUTES.SCIENCE_HEALTH}
        element={<JSONPage pageKey="science/health" />}
      />
      <Route
        path={ROUTES.SCIENCE_PREPARE}
        element={<JSONPage pageKey="science/prepare" />}
      />

      {/* 血线 */}
      <Route
        path={ROUTES.BLOODLINES}
        element={<JSONPage pageKey="bloodlines" />}
      />

      {/* 待领养 */}
      <Route
        path={ROUTES.ADOPTION}
        element={<JSONPage pageKey="adoption" />}
      />

      {/* 联系我们 */}
      <Route
        path={ROUTES.CONTACT}
        element={<JSONPage pageKey="contact" />}
      />

      {/* 👇 兜底：所有未知路径 → 自定义 404 页面 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
