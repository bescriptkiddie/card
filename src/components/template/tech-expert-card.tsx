import React from 'react';
import {
  MapPin,
  Target,
  Code,
  Cpu,
  Compass,
  Star,
  Sparkles
} from 'lucide-react';

const PersonalCard = () => {
  const name = '老兮';
  const imageUrl = '/images/laoxi.jpg';
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50 p-4'>
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden'>
        {/* Header Section */}
        <div className='p-6 border-b'>
          <div className='flex items-center gap-4'>
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
            <div>
              <h1 className='text-2xl font-bold text-gray-800'>老兮</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>北京</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>
                  全栈开发
                </span>
                <span className='px-2 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm'>
                  技术专家
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  内容创作
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallup Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-cyan-600' />
            <h2 className='text-lg font-semibold text-gray-800'>盖洛普优势</h2>
          </div>
          <div className='bg-cyan-50 rounded-lg p-4'>
            个别 | 前瞻 | 理念 | 关联 | 体谅
          </div>
        </div>

        {/* Recent Achievements */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Star className='w-5 h-5 text-cyan-600' />
            <h2 className='text-lg font-semibold text-gray-800'>近期成就</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
              <span>稳定接单月入2w+</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
              <span>单篇文章39w+阅读量</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
              <span>持续探索AI技术应用</span>
            </li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Code className='w-5 h-5 text-cyan-600' />
            <h2 className='text-lg font-semibold text-gray-800'>技术栈</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>后端开发</h3>
              <p className='text-sm text-gray-600 mt-1'>Java, C#</p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>前端框架</h3>
              <p className='text-sm text-gray-600 mt-1'>Vue, Angular</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>移动开发</h3>
              <p className='text-sm text-gray-600 mt-1'>
                Flutter, Ionic, uni-app
              </p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>小程序开发</h3>
              <p className='text-sm text-gray-600 mt-1'>全平台小程序解决方案</p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Target className='w-5 h-5 text-cyan-600' />
            <h2 className='text-lg font-semibold text-gray-800'>当前探索</h2>
          </div>
          <div className='text-gray-600'>
            🚀 AI技术应用 | 💻 全栈开发 | 📱 跨平台应用 | ✍️ 技术内容创作
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "用技术创造价值，以创新驱动成长"
            </p>
            <div className='w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center text-gray-400'>
              QR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
