// src/router/AppRouter.jsx
// 负责定义整个站点的前端路由结构：
// 不同 URL path 对应不同的 JSON 页面

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JSONPage from '@pages/JSONPage';
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

      {/* 鼠舍理念：src/content/philosophy.json */}
      <Route
        path={ROUTES.PHILOSOPHY_INDEX}
        element={<JSONPage pageKey="philosophy/index" />}
      />
      {/* 鼠舍理念子页：性情 / 健康 / 体型 / 诚信繁育 */}
      <Route
        path={ROUTES.PHILOSOPHY_TEMPERAMENT}
        element={<JSONPage pageKey="philosophy/temperament" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_HEALTH} 
        element={<JSONPage pageKey="philosophy/health" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_SCALE}
        element={<JSONPage pageKey="philosophy/scale" />}
      />
      <Route
        path={ROUTES.PHILOSOPHY_HONESTY}
        element={<JSONPage pageKey="philosophy/honesty" />}
      />

      {/* 科普总览页：src/content/science/index.json */}
      <Route
        path={ROUTES.SCIENCE_INDEX}
        element={<JSONPage pageKey="science/index" />}
      />

      {/* 科普子页：遗传学 / 饲养 / 健康 */}
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

      {/* 血线：src/content/bloodlines.json */}
      <Route
        path={ROUTES.BLOODLINES}
        element={<JSONPage pageKey="bloodlines" />}
      />

      {/* 待领养：src/content/adoption.json */}
      <Route
        path={ROUTES.ADOPTION}
        element={<JSONPage pageKey="adoption" />}
      />

      {/* 联系我们：src/content/contact.json */}
      <Route
        path={ROUTES.CONTACT}
        element={<JSONPage pageKey="contact" />}
      />
      

      {/* 兜底：未知路径一律重定向到主页 */}
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};

export default AppRouter;
