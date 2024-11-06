'use client';

import React, { useState } from 'react';
import { Term } from '@/lib/terms';
import { suggestNewTerm } from '@/lib/api/psychology';

export default function PsychologyInteraction() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await suggestNewTerm({
        term: prompt,
        definition: '用户建议',
        tip: '等待审核'
      });

      setResponse(result.message);
    } catch (error) {
      setResponse('抱歉，请求遇到了问题，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-6 space-y-6'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            请输入您想了解的心理学概念
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='w-full p-3 border rounded-md shadow-sm'
            rows={4}
            placeholder="例如：我想了解关于'内聚性自我'的概念..."
          />
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50'
        >
          {isLoading ? '处理中...' : '提交'}
        </button>
      </form>

      {response && (
        <div className='p-4 bg-gray-50 rounded-md'>
          <h3 className='font-medium text-gray-900 mb-2'>回应：</h3>
          <p className='text-gray-700'>{response}</p>
        </div>
      )}
    </div>
  );
}
