// src/components/ui/Button.jsx
// 通用按钮组件：
// - primary：主操作按钮，渐变 + 阴影 + 轻微位移（Linear 风）
// - ghost：线框按钮，背景透明，hover 有浅色填充
// - subtle：轻量按钮，用在次级操作

import React from 'react';
import { Link } from 'react-router-dom';

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm bold-medium px-4 py-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ratopia-bg';

// 不同风格的样式
const variantClasses = {
  primary:
    // 渐变 + 阴影 + 细微位移
    'bg-gradient-to-r from-ratopia-primary to-ratopia-accent text-white font-bold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ratopia-primary',
  ghost:
    'border border-ratopia-border text-white/80 bg-transparent hover:bg-white/5 hover:text-white focus-visible:ring-ratopia-primary',
  subtle:
    'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white focus-visible:ring-ratopia-primary'
};

/**
 * Button
 *
 * - 如果传入 to 属性，则渲染为 <Link>（SPA 内部跳转）
 * - 如果传入 href 属性，则渲染为 <a>（外链/静态文件/下载）
 * - 否则渲染 <button>
 */
const Button = ({
  children,
  variant = 'primary',
  to,
  href,
  download,
  target,
  rel,
  className = '',
  ...rest
}) => {
  const classes = `${baseClasses} ${variantClasses[variant] || ''} ${className}`;

  // SPA 内部跳转
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // 外链 / 文件下载
  if (href) {
    const safeRel = rel ?? (target === '_blank' ? 'noreferrer' : undefined);

    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={safeRel}
        download={download ? '' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // 普通按钮
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
