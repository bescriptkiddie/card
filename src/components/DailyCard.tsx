'use client';

import React, { useState } from 'react';
import { Term } from '@/lib/terms';
import { TemplateType, templateNames } from './template/types';
import { TemplateRenderer } from './template/index';

interface DailyCardProps {
  initialTerm: Term;
}

export default function DailyCard({ initialTerm }: DailyCardProps) {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(
    TemplateType.PERSONAL
  );

  return (
    <div className='max-w-6xl mx-auto p-4'>
      {/* 模板切换器 */}
      <div className='mb-6'>
        <div className='flex flex-wrap gap-2'>
          {Object.entries(templateNames).map(([type, name]) => (
            <button
              key={type}
              onClick={() => setCurrentTemplate(type as TemplateType)}
              className={`
                px-4 py-2 rounded-lg transition-all duration-200
                ${
                  currentTemplate === type
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }
              `}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* 卡片展示区域 */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        <div className='w-full aspect-[4/5]'>
          <TemplateRenderer type={currentTemplate} term={initialTerm} />
        </div>
      </div>

      {/* 可选：添加预览缩略图 */}
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {Object.entries(templateNames).map(([type, name]) => (
          <div
            key={type}
            onClick={() => setCurrentTemplate(type as TemplateType)}
            className={`
              cursor-pointer rounded-lg overflow-hidden shadow-md
              ${currentTemplate === type ? 'ring-2 ring-blue-500' : ''}
            `}
          >
            <div className='aspect-[4/5] p-2 bg-gray-50'>
              <div className='w-full h-full relative'>
                <TemplateRenderer
                  type={type as TemplateType}
                  term={initialTerm}
                />
              </div>
            </div>
            <div className='p-2 text-sm text-center bg-white'>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
