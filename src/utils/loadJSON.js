// src/utils/loadJSON.js
// 多语言内容加载工具

// ------------ ENGLISH CONTENT ------------
import enHome from '@content/en/home.json';

import enPhilosophyIndex from '@content/en/philosophy/index.json';
import enPhilosophyTemperament from '@content/en/philosophy/temperament.json';
import enPhilosophyHealth from '@content/en/philosophy/health.json';
import enPhilosophyScale from '@content/en/philosophy/scale.json';
import enPhilosophyHonesty from '@content/en/philosophy/honesty.json';

import enScienceIndex from '@content/en/science/index.json';
import enScienceGenetics from '@content/en/science/genetics.json';
import enScienceCare from '@content/en/science/care.json';
import enScienceHealth from '@content/en/science/health.json';
import enSciencePrepare from '@content/en/science/prepare.json';

import enBloodlines from '@content/en/bloodlines.json';
import enAdoption from '@content/en/adoption.json';
import enContact from '@content/en/contact.json';


// ------------ CHINESE CONTENT ------------
import zhHome from '@content/zh/home.json';

import zhPhilosophyIndex from '@content/zh/philosophy/index.json';
import zhPhilosophyTemperament from '@content/zh/philosophy/temperament.json';
import zhPhilosophyHealth from '@content/zh/philosophy/health.json';
import zhPhilosophyScale from '@content/zh/philosophy/scale.json';
import zhPhilosophyHonesty from '@content/zh/philosophy/honesty.json';

import zhScienceIndex from '@content/zh/science/index.json';
import zhScienceGenetics from '@content/zh/science/genetics.json';
import zhScienceCare from '@content/zh/science/care.json';
import zhScienceHealth from '@content/zh/science/health.json';
import zhSciencePrepare from '@content/zh/science/prepare.json';

import zhBloodlines from '@content/zh/bloodlines.json';
import zhAdoption from '@content/zh/adoption.json';
import zhContact from '@content/zh/contact.json';


// ------------ EN MAP ------------
const EN_CONTENT_MAP = {
  'home': enHome,

  'philosophy/index': enPhilosophyIndex,
  'philosophy/temperament': enPhilosophyTemperament,
  'philosophy/health': enPhilosophyHealth,
  'philosophy/scale': enPhilosophyScale,
  'philosophy/honesty': enPhilosophyHonesty,

  'science/index': enScienceIndex,
  'science/genetics': enScienceGenetics,
  'science/care': enScienceCare,
  'science/health': enScienceHealth,
  'science/prepare': enSciencePrepare,

  'bloodlines': enBloodlines,
  'adoption': enAdoption,
  'contact': enContact
};


// ------------ ZH MAP ------------
const ZH_CONTENT_MAP = {
  'home': zhHome,

  'philosophy/index': zhPhilosophyIndex,
  'philosophy/temperament': zhPhilosophyTemperament,
  'philosophy/health': zhPhilosophyHealth,
  'philosophy/scale': zhPhilosophyScale,
  'philosophy/honesty': zhPhilosophyHonesty,

  'science/index': zhScienceIndex,
  'science/genetics': zhScienceGenetics,
  'science/care': zhScienceCare,
  'science/health': zhScienceHealth,
  'science/prepare': zhSciencePrepare,

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
