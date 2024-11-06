import React from 'react';
import {
  MapPin,
  Target,
  Code,
  Compass,
  Heart,
  Sparkles,
  ArrowUp
} from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/shengjian.jpg';
  const name = '生姜';
  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-2xl'>
        {/* Header */}
        <div className='p-6 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50'></div>
          <div className='relative flex items-start gap-4'>
            {imageUrl ? (
              <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img
                  src={imageUrl}
                  alt={name}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    (e.target as HTMLImageElement).removeAttribute('src');
                    (e.target as HTMLImageElement)?.classList.add(
                      'bg-gradient-to-r',
                      'from-emerald-100',
                      'to-blue-100'
                    );
                    (e.target as HTMLImageElement)!.innerHTML = `
            <div class="w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-600">
              ${name.charAt(0)}
            </div>
          `;
                  }}
                />
              </div>
            ) : (
              <div className='w-20 h-20 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 flex items-center justify-center text-2xl font-bold text-emerald-600'>
                {name.charAt(0)}
              </div>
            )}
            <div className='flex-1'>
              <h1 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
                GONE/生姜
              </h1>
              <div className='flex items-center gap-2 mt-2 text-gray-600'>
                <MapPin className='w-4 h-4' />
                <span>芜湖</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-3'>
                <span className='px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium'>
                  INFP
                </span>
                <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium'>
                  软件开发
                </span>
                <span className='px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium'>
                  内容创作
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-3'>
            <Sparkles className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-bold text-gray-800'>核心优势</h2>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='px-4 py-3 bg-pink-50 rounded-lg text-pink-700 text-center font-medium'>
              关系建立
            </div>
            <div className='px-4 py-3 bg-purple-50 rounded-lg text-purple-700 text-center font-medium'>
              战略思维
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Code className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-bold text-gray-800'>专业经验</h2>
          </div>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>计算机专业背景，1年软件开发</span>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>AI代写业务闭环</span>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>视频号口播从0到1</span>
            </li>
          </ul>
        </div>

        {/* Value Offering */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-bold text-gray-800'>经验分享</h2>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl'>
              <h3 className='font-bold text-pink-700'>考公经验</h3>
              <p className='mt-1 text-sm text-gray-600'>公考备考路径分享</p>
            </div>
            <div className='p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl'>
              <h3 className='font-bold text-purple-700'>运动减肥</h3>
              <p className='mt-1 text-sm text-gray-600'>科学健康减重方法</p>
            </div>
            <div className='p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl'>
              <h3 className='font-bold text-indigo-700'>AI代写</h3>
              <p className='mt-1 text-sm text-gray-600'>AI写作方法与技巧</p>
            </div>
            <div className='p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl'>
              <h3 className='font-bold text-purple-700'>护肤心得</h3>
              <p className='mt-1 text-sm text-gray-600'>科学护肤经验分享</p>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-3'>
            <Target className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-bold text-gray-800'>成长目标</h2>
          </div>
          <div className='text-gray-600'>
            🎯 打造个人IP | 🌱 持续成长 | ✨ 帮助他人 | 🎊 早日退休
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gradient-to-br from-gray-50 to-gray-100'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='text-sm text-gray-600 mb-1'>微信号</div>
              <div className='font-medium text-gray-800'>bkpp20190901</div>
            </div>
            <div className='w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-400'>
              QR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
