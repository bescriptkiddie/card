import React from 'react';
import {
  MapPin,
  Target,
  Award,
  Sparkles,
  Compass,
  Zap,
  Trophy
} from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/wanzi.JPG';
  const name = '泡腾丸子';
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
                    e.target.parentElement?.classList.add(
                      'bg-gradient-to-r',
                      'from-emerald-100',
                      'to-blue-100'
                    );
                    e.target.parentElement!.innerHTML = `
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
              <h1 className='text-2xl font-bold text-gray-800'>泡腾丸子</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>深圳</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm'>
                  IP能量教练
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  自媒体专家
                </span>
                <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>
                  社群运营
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Zap className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-semibold text-gray-800'>核心优势</h2>
          </div>
          <div className='bg-pink-50 rounded-lg p-4'>
            能量 | 写作 | 操盘 | 社群运营
          </div>
        </div>

        {/* Key Achievements */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Trophy className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-semibold text-gray-800'>成就亮点</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>自媒体半年营收30w+</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>万人专栏销冠，单晚1000单</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-pink-600 rounded-full'></div>
              <span>私域操盘业绩破百万GMV</span>
            </li>
          </ul>
        </div>

        {/* Professional Services */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-semibold text-gray-800'>专业服务</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>IP写作指导</h3>
              <p className='text-sm text-gray-600 mt-1'>
                突出重围的骚气写作技巧
              </p>
            </div>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>社群运营</h3>
              <p className='text-sm text-gray-600 mt-1'>高活跃高转化运营策略</p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>操盘指导</h3>
              <p className='text-sm text-gray-600 mt-1'>极限冲锋批量成交经验</p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>能量提升</h3>
              <p className='text-sm text-gray-600 mt-1'>创业者心力和能量工具</p>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-pink-600' />
            <h2 className='text-lg font-semibold text-gray-800'>当前项目</h2>
          </div>
          <div className='text-gray-600'>
            ⭐️ IP能量岛 | 🌟 泡腾的人生实验 | 💫 水龙操盘 | 🎯 盖洛普小班嘉宾
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "有趣有料的搞笑女，用能量点亮每一个IP梦想"
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
