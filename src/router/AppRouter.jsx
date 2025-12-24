// src/router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JSONPage from '@pages/JSONPage';
import NotFound from '@pages/NotFound';
import { ROUTES } from '@utils/constants';
import useScrollToTop from '@utils/useScrollToTop';

const AppRouter = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<JSONPage pageKey="home" />} />

      <Route path={ROUTES.PHILOSOPHY_INDEX} element={<JSONPage pageKey="philosophy/index" />} />
      <Route path={ROUTES.PHILOSOPHY_RAISE} element={<JSONPage pageKey="philosophy/raise" />} />
      <Route path={ROUTES.PHILOSOPHY_MEDICAL} element={<JSONPage pageKey="philosophy/medical" />} />
      <Route path={ROUTES.PHILOSOPHY_BREED} element={<JSONPage pageKey="philosophy/breed" />} />
      <Route path={ROUTES.PHILOSOPHY_QA} element={<JSONPage pageKey="philosophy/Q&A" />} />

      <Route path={ROUTES.SCIENCE_INDEX} element={<JSONPage pageKey="science/index" />} />
      <Route path={ROUTES.SCIENCE_GENETICS} element={<JSONPage pageKey="science/genetics" />} />
      <Route path={ROUTES.SCIENCE_CARE} element={<JSONPage pageKey="science/care" />} />
      <Route path={ROUTES.SCIENCE_HEALTH} element={<JSONPage pageKey="science/health" />} />
      <Route path={ROUTES.SCIENCE_PREPARE} element={<JSONPage pageKey="science/prepare" />} />
      <Route path={ROUTES.SCIENCE_DIET} element={<JSONPage pageKey="science/diet" />} />
      <Route path={ROUTES.SCIENCE_CHOOSE} element={<JSONPage pageKey="science/choose" />} />
      <Route path={ROUTES.SCIENCE_ORIGIN} element={<JSONPage pageKey="science/origin" />} />
      <Route path={ROUTES.SCIENCE_BEHAVIOR_INDIVIDUAL} element={<JSONPage pageKey="science/behaviorindividual" />} />
      <Route path={ROUTES.SCIENCE_BEHAVIOR_GROUP} element={<JSONPage pageKey="science/behaviorgroup" />} />
      <Route path={ROUTES.SCIENCE_BITING} element={<JSONPage pageKey="science/biting" />} />
      <Route path={ROUTES.SCIENCE_INTRODUCTIONS} element={<JSONPage pageKey="science/introductions" />} />

      {/* ✅ bloodlines：固定栏目型 */}
      <Route path={ROUTES.BLOODLINES_INDEX} element={<JSONPage pageKey="bloodlines/index" />} />
      <Route path={ROUTES.BLOODLINES_LINE1} element={<JSONPage pageKey="bloodlines/line1" />} />
      <Route path={ROUTES.BLOODLINES_LINE2} element={<JSONPage pageKey="bloodlines/line2" />} />
      <Route path={ROUTES.BLOODLINES_LINE3} element={<JSONPage pageKey="bloodlines/line3" />} />

      <Route path={ROUTES.ADOPTION} element={<JSONPage pageKey="adoption" />} />
      <Route path={ROUTES.CONTACT} element={<JSONPage pageKey="contact" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
