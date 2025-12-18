// src/utils/loadJSON.js
// 多语言内容加载工具

// ------------ ENGLISH CONTENT ------------
import enHome from '@content/en/home.json';

import enPhilosophyIndex from '@content/en/philosophy/index.json';
import enPhilosophyRaise from '@content/en/philosophy/raise.json';
import enPhilosophyMedical from '@content/en/philosophy/medical.json';
import enPhilosophyBreed from '@content/en/philosophy/breed.json';
import enPhilosophyQA from '@content/en/philosophy/Q&A.json';

import enScienceIndex from '@content/en/science/index.json';
import enScienceGenetics from '@content/en/science/genetics.json';
import enScienceCare from '@content/en/science/care.json';
import enScienceHealth from '@content/en/science/health.json';
import enSciencePrepare from '@content/en/science/prepare.json';
import enScienceDiet from '@content/en/science/diet.json';
import enScienceChoose from '@content/en/science/choose.json';
import enScienceOrigin from '@content/en/science/origin.json';

// ✅ 已有：行为专题（无连字符命名）
import enScienceBehaviorIndividual from '@content/en/science/behaviorindividual.json';
import enScienceBehaviorGroup from '@content/en/science/behaviorgroup.json';

// ✅ 新增：老鼠啃咬 / 老鼠合笼（无连字符命名）
import enScienceBiting from '@content/en/science/biting.json';
import enScienceIntroductions from '@content/en/science/introductions.json';

import enBloodlines from '@content/en/bloodlines.json';
import enAdoption from '@content/en/adoption.json';
import enContact from '@content/en/contact.json';

// ------------ CHINESE CONTENT ------------
import zhHome from '@content/zh/home.json';

import zhPhilosophyIndex from '@content/zh/philosophy/index.json';
import zhPhilosophyRaise from '@content/zh/philosophy/raise.json';
import zhPhilosophyMedical from '@content/zh/philosophy/medical.json';
import zhPhilosophyBreed from '@content/zh/philosophy/breed.json';
import zhPhilosophyQA from '@content/zh/philosophy/Q&A.json';

import zhScienceIndex from '@content/zh/science/index.json';
import zhScienceGenetics from '@content/zh/science/genetics.json';
import zhScienceCare from '@content/zh/science/care.json';
import zhScienceHealth from '@content/zh/science/health.json';
import zhSciencePrepare from '@content/zh/science/prepare.json';
import zhScienceDiet from '@content/zh/science/diet.json';
import zhScienceChoose from '@content/zh/science/choose.json';
import zhScienceOrigin from '@content/zh/science/origin.json';

// ✅ 已有：行为专题（无连字符命名）
import zhScienceBehaviorIndividual from '@content/zh/science/behaviorindividual.json';
import zhScienceBehaviorGroup from '@content/zh/science/behaviorgroup.json';

// ✅ 新增：老鼠啃咬 / 老鼠合笼（无连字符命名）
import zhScienceBiting from '@content/zh/science/biting.json';
import zhScienceIntroductions from '@content/zh/science/introductions.json';

import zhBloodlines from '@content/zh/bloodlines.json';
import zhAdoption from '@content/zh/adoption.json';
import zhContact from '@content/zh/contact.json';

// ------------ EN MAP ------------
const EN_CONTENT_MAP = {
  'home': enHome,

  'philosophy/index': enPhilosophyIndex,
  'philosophy/raise': enPhilosophyRaise,
  'philosophy/medical': enPhilosophyMedical,
  'philosophy/breed': enPhilosophyBreed,
  'philosophy/Q&A': enPhilosophyQA,

  'science/index': enScienceIndex,
  'science/genetics': enScienceGenetics,
  'science/care': enScienceCare,
  'science/health': enScienceHealth,
  'science/prepare': enSciencePrepare,
  'science/diet': enScienceDiet,
  'science/choose': enScienceChoose,
  'science/origin': enScienceOrigin,

  // ✅ 已有：与 AppRouter.jsx 的 pageKey 完全一致（无连字符）
  'science/behaviorindividual': enScienceBehaviorIndividual,
  'science/behaviorgroup': enScienceBehaviorGroup,

  // ✅ 新增：与 AppRouter.jsx 的 pageKey 完全一致（无连字符）
  'science/biting': enScienceBiting,
  'science/introductions': enScienceIntroductions,

  'bloodlines': enBloodlines,
  'adoption': enAdoption,
  'contact': enContact
};

// ------------ ZH MAP ------------
const ZH_CONTENT_MAP = {
  'home': zhHome,

  'philosophy/index': zhPhilosophyIndex,
  'philosophy/raise': zhPhilosophyRaise,
  'philosophy/medical': zhPhilosophyMedical,
  'philosophy/breed': zhPhilosophyBreed,
  'philosophy/Q&A': zhPhilosophyQA,

  'science/index': zhScienceIndex,
  'science/genetics': zhScienceGenetics,
  'science/care': zhScienceCare,
  'science/health': zhScienceHealth,
  'science/prepare': zhSciencePrepare,
  'science/diet': zhScienceDiet,
  'science/choose': zhScienceChoose,
  'science/origin': zhScienceOrigin,

  // ✅ 已有：与 AppRouter.jsx 的 pageKey 完全一致（无连字符）
  'science/behaviorindividual': zhScienceBehaviorIndividual,
  'science/behaviorgroup': zhScienceBehaviorGroup,

  // ✅ 新增：与 AppRouter.jsx 的 pageKey 完全一致（无连字符）
  'science/biting': zhScienceBiting,
  'science/introductions': zhScienceIntroductions,

  'bloodlines': zhBloodlines,
  'adoption': zhAdoption,
  'contact': zhContact
};

// ------------ LOADER ------------
export const loadContentJSON = (key, lang = 'en') => {
  const normalizedLang = lang.startsWith('zh') ? 'zh' : 'en';
  const langMap = normalizedLang === 'zh' ? ZH_CONTENT_MAP : EN_CONTENT_MAP;

  let data = langMap[key];

  // fallback：中文缺失 → 回退英文
  if (!data && normalizedLang === 'zh') {
    data = EN_CONTENT_MAP[key];
  }

  if (!data) {
    return Promise.reject(
      new Error(`No content JSON found for key: ${key}, lang: ${lang}`)
    );
  }

  return Promise.resolve(data);
};
