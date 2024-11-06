'use client';

import React from 'react';
import { TemplateType, templateNames } from './template/types';

interface TemplateSwitcherProps {
  currentTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

export default function TemplateSwitcher({
  currentTemplate,
  onTemplateChange
}: TemplateSwitcherProps) {
  return (
    <div className='flex flex-wrap gap-2 p-4'>
      {Object.entries(templateNames).map(([type, name]) => (
        <button
          key={type}
          onClick={() => onTemplateChange(type as TemplateType)}
          className={`
            px-4 py-2 rounded-lg transition-all
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
  );
}
