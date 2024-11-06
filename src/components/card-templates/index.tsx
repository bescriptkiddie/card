'use client';

import React from 'react';
import { CardTemplateProps } from './types';

// 默认模板（原始设计）
export const DefaultTemplate: React.FC<CardTemplateProps> = ({ term }) => (
  <svg className='w-full h-full' viewBox='0 0 800 1000'>
    {/* 背景 */}
    <rect width='800' height='1000' fill={term.bgColor} />

    {/* 顶部标题栏 */}
    <rect x='40' y='30' width='220' height='50' rx='25' fill={term.color} />
    <text x='60' y='62' fontFamily='Arial' fontSize='24' fill='white'>
      心理学词典 · {term.id}
    </text>

    {/* Logo */}
    <g transform='translate(680, 30)'>
      <rect width='80' height='80' rx='15' fill={term.color} />
      <circle cx='40' cy='40' r='25' fill='white' />
      <circle cx='25' cy='35' r='8' fill={term.color} />
      <circle cx='55' cy='35' r='8' fill={term.color} />
    </g>

    {/* 背景图示 */}
    <g transform='translate(550, 200)'>
      <circle
        cx='0'
        cy='0'
        r='120'
        fill='none'
        stroke={term.color}
        strokeWidth='20'
        strokeDasharray='15,5'
        opacity='0.3'
      />
      <circle cx='0' cy='0' r='80' fill={term.color} opacity='0.2' />
      <circle cx='0' cy='0' r='40' fill={term.color} opacity='0.3' />
    </g>

    {/* 主标题 */}
    <text
      x='40'
      y='200'
      fontFamily='Arial'
      fontSize='72'
      fontWeight='bold'
      fill={term.color}
    >
      {term.term}
    </text>

    {/* 解释文本区域 */}
    <rect x='40' y='500' width='720' height='200' rx='10' fill='white' />
    <text x='60' y='540' fontFamily='Arial' fontSize='22' fill='#333'>
      <tspan x='60' dy='0'>
        一句话释义：
      </tspan>
      <tspan x='60' dy='40'>
        {term.definition}
      </tspan>
    </text>

    {/* 底部说明 */}
    <text x='40' y='800' fontFamily='Arial' fontSize='28' fill={term.color}>
      <tspan x='40' dy='0'>
        得到·心理成长圈
      </tspan>
      <tspan x='40' dy='40'>
        来这里，允许自己变强大
      </tspan>
    </text>

    {/* 二维码占位 */}
    <rect x='680' y='880' width='80' height='80' fill='#eee' />
  </svg>
);

// 极简模板
export const MinimalTemplate: React.FC<CardTemplateProps> = ({ term }) => (
  <svg className='w-full h-full' viewBox='0 0 800 1000'>
    {/* 纯白背景 */}
    <rect width='800' height='1000' fill='white' />

    {/* 简单的顶部装饰线 */}
    <rect x='0' y='0' width='800' height='8' fill={term.color} />

    {/* 编号 */}
    <text x='40' y='60' fontFamily='Arial' fontSize='24' fill='#666'>
      #{term.id}
    </text>

    {/* 主标题 */}
    <text
      x='40'
      y='160'
      fontFamily='Arial'
      fontSize='64'
      fontWeight='bold'
      fill='#333'
    >
      {term.term}
    </text>

    {/* 简约图标 */}
    <circle cx='700' cy='160' r='60' fill={term.color} opacity='0.1' />
    <circle cx='700' cy='160' r='40' fill={term.color} opacity='0.2' />

    {/* 释义 */}
    <text x='40' y='300' fontFamily='Arial' fontSize='24' fill='#666'>
      <tspan x='40' dy='0'>
        {term.definition}
      </tspan>
    </text>

    {/* 底部签名 */}
    <text x='40' y='900' fontFamily='Arial' fontSize='20' fill='#999'>
      心理成长圈
    </text>
  </svg>
);

// 现代模板
export const ModernTemplate: React.FC<CardTemplateProps> = ({ term }) => (
  <svg className='w-full h-full' viewBox='0 0 800 1000'>
    {/* 渐变背景 */}
    <defs>
      <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' style={{ stopColor: term.bgColor, stopOpacity: 1 }} />
        <stop
          offset='100%'
          style={{ stopColor: term.color, stopOpacity: 0.1 }}
        />
      </linearGradient>
    </defs>
    <rect width='800' height='1000' fill='url(#grad)' />

    {/* 装饰元素 */}
    <circle cx='700' cy='200' r='300' fill={term.color} opacity='0.05' />
    <circle cx='650' cy='150' r='200' fill={term.color} opacity='0.05' />

    {/* 标题 */}
    <text
      x='60'
      y='200'
      fontFamily='Arial'
      fontSize='82'
      fontWeight='bold'
      fill={term.color}
    >
      {term.term}
    </text>

    {/* 编号 */}
    <text
      x='63'
      y='100'
      fontFamily='Arial'
      fontSize='24'
      fill={term.color}
      opacity='0.6'
    >
      PSYCHOLOGY · {term.id}
    </text>

    {/* 内容区域 */}
    <foreignObject x='60' y='300' width='680' height='400'>
      <div
        style={{
          fontFamily: 'Arial',
          fontSize: '24px',
          color: '#333',
          lineHeight: 1.6
        }}
      >
        {term.definition}
      </div>
    </foreignObject>

    {/* 底部标记 */}
    <path
      d='M60 900 L740 900'
      stroke={term.color}
      strokeWidth='2'
      opacity='0.3'
    />
    <text x='60' y='940' fontFamily='Arial' fontSize='20' fill={term.color}>
      心理成长圈 / DAILY PSYCHOLOGY
    </text>
  </svg>
);

// 经典模板
export const ClassicTemplate: React.FC<CardTemplateProps> = ({ term }) => (
  <svg className='w-full h-full' viewBox='0 0 800 1000'>
    {/* 米色背景 */}
    <rect width='800' height='1000' fill='#f9f5f0' />

    {/* 古典风格边框 */}
    <rect
      x='40'
      y='40'
      width='720'
      height='920'
      fill='none'
      stroke={term.color}
      strokeWidth='2'
    />
    <rect
      x='60'
      y='60'
      width='680'
      height='880'
      fill='none'
      stroke={term.color}
      strokeWidth='1'
    />

    {/* 装饰角 */}
    {[
      [40, 40],
      [720, 40],
      [40, 920],
      [720, 920]
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r='5' fill={term.color} />
    ))}

    {/* 标题区域 */}
    <text
      x='400'
      y='160'
      fontFamily='serif'
      fontSize='72'
      fontWeight='bold'
      fill={term.color}
      textAnchor='middle'
    >
      {term.term}
    </text>

    {/* 分隔线 */}
    <path d='M200 200 L600 200' stroke={term.color} strokeWidth='1' />

    {/* 内容 */}
    <text
      x='400'
      y='400'
      fontFamily='serif'
      fontSize='24'
      fill='#333'
      textAnchor='middle'
    >
      <tspan x='400' dy='0'>
        {term.definition}
      </tspan>
    </text>

    {/* 底部签名 */}
    <text
      x='400'
      y='900'
      fontFamily='serif'
      fontSize='24'
      fill={term.color}
      textAnchor='middle'
    >
      心理成长圈
    </text>
  </svg>
);
