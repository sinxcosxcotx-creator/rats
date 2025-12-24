// src/utils/useScrollToTop.js
// 一个简单的自定义 Hook：
// 每当路由变化（路径变化）时，自动滚动到页面顶部。
// 防止用户从某个页面中间切换，结果新页面也从中间开始显示。

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 切换路由后，滚动到最顶部
    window.scrollTo({
      top: 0,
      behavior: 'instant' // 可以改为 'smooth' 做平滑滚动
    });
  }, [pathname]);
};

export default useScrollToTop;
