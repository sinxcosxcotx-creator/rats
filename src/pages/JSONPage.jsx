// src/pages/JSONPage.jsx
// 通用页面模板：
// - 接收 pageKey（home / philosophy / science/index ...）
// - 使用当前语言（来自 i18next）加载对应语言的 JSON 内容
// - 交给 PageRenderer 渲染

import React from 'react';
import PageRenderer from '@components/renderer/PageRenderer';
import { loadContentJSON } from '@utils/loadJSON';
import { useTranslation } from 'react-i18next';

const JSONPage = ({ pageKey }) => {
  const { i18n } = useTranslation();
  const [content, setContent] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    const lang = i18n.language || 'en';

    loadContentJSON(pageKey, lang)
      .then((data) => {
        if (mounted) {
          setContent(data);
          setError(null);
        }
      })
      .catch((err) => {
        console.error('Failed to load content JSON', pageKey, lang, err);
        if (mounted) {
          setError(err);
          setContent(null);
        }
      });

    return () => {
      mounted = false;
    };
  }, [pageKey, i18n.language]);

  if (error) {
    return (
      <div className="max-w-content mx-auto px-4 py-10 text-red-300 text-sm">
        内容加载失败（{pageKey}）。检查对应 JSON 是否存在。
      </div>
    );
  }

  if (!content) {
    return (
      <div className="max-w-content mx-auto px-4 py-10 text-white/70 text-sm">
        正在加载内容……
      </div>
    );
  }

  return <PageRenderer content={content} />;
};

export default JSONPage;
