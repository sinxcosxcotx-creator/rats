// tailwind.config.cjs
// Tailwind 的配置文件：
// - 指定要扫描的文件（哪些文件里的 class 会被生成）
// - 自定义 Ratopia 的颜色、阴影、圆角等设计语言

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind 会在这些文件中扫描 className，然后按需生成 CSS
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      // 一整套 Ratopia 主题色
      colors: {
        // 页面主背景：深色偏蓝黑，类似 Linear 的深色后台
        'ratopia-bg': '#050814',

        // 表面层（卡片、导航底色）——通过透明度叠加出“玻璃感”
        'ratopia-surface': 'rgba(15,23,42,0.9)',      // 主表面
        'ratopia-surface-soft': 'rgba(15,23,42,0.65)', // hover / 次级表面

        // 边框：浅浅一层，避免太“框”
        'ratopia-border': 'rgba(148,163,184,0.25)',

        // 主色：偏紫（类似 Linear），再加一点强调色
        'ratopia-primary': '#A855F7',          // 主按钮、强调色
        'ratopia-primary-soft': 'rgba(168,85,247,0.18)',
        'ratopia-primary-strong': '#7C3AED',

        // 次强调色：青色，用于渐变的另一端
        'ratopia-accent': '#22D3EE',

        // 提示/警告色，可以后续用在提示组件里
        'ratopia-danger': '#FB7185',
        'ratopia-success': '#4ADE80'
      },

      // 统一圆角：按钮 / 卡片都偏“软”
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem'
      },

      // 阴影层级：模仿 Linear 那种干净但有体积感的效果
      boxShadow: {
        // 通用卡片阴影：略深一点，收敛在组件附近
        soft: '0 18px 45px rgba(15,23,42,0.75)',
        // 悬浮态阴影：略大一点，适合 hover 时
        elevated: '0 24px 70px rgba(15,23,42,0.9)',
        // 主要强调：可以用在特定按钮或 Hero 上
        'glow-primary': '0 0 40px rgba(168,85,247,0.45)'
      },

      // 最大宽度：内容区域宽度
      maxWidth: {
        'content': '72rem' // ~1152px，页面的主阅读宽度
      },

      // 稍微调整字体（可以保持系统字体）
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Segoe UI',
          'sans-serif'
        ]
      },

      // 小小的动画节奏
      transitionDuration: {
        '150': '150ms',
        '200': '200ms'
      }
    }
  },
  plugins: []
};
