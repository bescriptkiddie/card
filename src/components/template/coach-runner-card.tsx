import React from 'react';
import {
  MapPin,
  Target,
  Award,
  Mic,
  Compass,
  Heart,
  Sparkles
} from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/duoyue.JPG';
  const name = '多跃';
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50 p-4'>
      {/* Rest of the component remains exactly the same */}
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
                    (e.target as HTMLImageElement).parentElement?.classList.add(
                      'bg-gradient-to-r',
                      'from-emerald-100',
                      'to-blue-100'
                    );
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `
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
              <h1 className='text-2xl font-bold text-gray-800'>多跃</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>厦门</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-rose-100 text-rose-600 rounded-full text-sm'>
                  HR专家
                </span>
                <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>
                  优势教练
                </span>
                <span className='px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm'>
                  马拉松跑者
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallup Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-rose-600' />
            <h2 className='text-lg font-semibold text-gray-800'>盖洛普优势</h2>
          </div>
          <div className='bg-rose-50 rounded-lg p-4'>
            审慎 | 和谐 | 公平 | 责任 | 交往
          </div>
        </div>

        {/* Personal Achievements */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Award className='w-5 h-5 text-rose-600' />
            <h2 className='text-lg font-semibold text-gray-800'>个人成就</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-rose-600 rounded-full'></div>
              <span>完成8次马拉松赛事</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-rose-600 rounded-full'></div>
              <span>坚持运动10年，保持理想体重30年+</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-rose-600 rounded-full'></div>
              <span>通过演讲实现职业转型</span>
            </li>
          </ul>
        </div>

        {/* Professional Services */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-rose-600' />
            <h2 className='text-lg font-semibold text-gray-800'>专业服务</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>优势咨询</h3>
              <p className='text-sm text-gray-600 mt-1'>盖洛普报告专业解读</p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>运动指导</h3>
              <p className='text-sm text-gray-600 mt-1'>跑步经验分享与指导</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>演讲技巧</h3>
              <p className='text-sm text-gray-600 mt-1'>公众演讲能力培养</p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>职场咨询</h3>
              <p className='text-sm text-gray-600 mt-1'>HR视角职业发展建议</p>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Heart className='w-5 h-5 text-rose-600' />
            <h2 className='text-lg font-semibold text-gray-800'>社群身份</h2>
          </div>
          <div className='text-gray-600'>
            🎯 粥左罗顶峰会 | ⭐️ 优势动力 | 🌟 靠谱销冠 | 👶 19个月宝妈
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "渴望被看见的'社恐'，用演讲和运动突破自我"
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
