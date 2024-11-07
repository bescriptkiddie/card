import React from 'react';
import {
  MapPin,
  Target,
  Award,
  Book,
  Compass,
  Star,
  Sparkles
} from 'lucide-react';

const PersonalCard = () => {
  const name = '梓悦';
  const imageUrl = '/images/ziyue.JPG';
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
              <h1 className='text-2xl font-bold text-gray-800'>梓悦</h1>
              <div className='text-gray-600 text-sm'>祝你愉悦</div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-violet-100 text-violet-600 rounded-full text-sm'>
                  幼教老师
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  教育助教
                </span>
                <span className='px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm'>
                  文创负责人
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallup Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-violet-600' />
            <h2 className='text-lg font-semibold text-gray-800'>
              盖洛普优势TOP5
            </h2>
          </div>
          <div className='bg-violet-50 rounded-lg p-4'>
            和谐 | 完美 | 思维 | 学习 | 体谅
          </div>
        </div>

        {/* Achievements */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Star className='w-5 h-5 text-violet-600' />
            <h2 className='text-lg font-semibold text-gray-800'>高光成就</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-violet-600 rounded-full'></div>
              <span>跨专业考研初复试第一名</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-violet-600 rounded-full'></div>
              <span>省级演讲比赛一等奖</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-violet-600 rounded-full'></div>
              <span>多次获评"优秀学员"</span>
            </li>
          </ul>
        </div>

        {/* Professional Roles */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-violet-600' />
            <h2 className='text-lg font-semibold text-gray-800'>专业角色</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-violet-50 rounded-lg'>
              <h3 className='font-semibold text-violet-600'>幼儿教育</h3>
              <p className='text-sm text-gray-600 mt-1'>进化型班主任教师</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>家庭教育</h3>
              <p className='text-sm text-gray-600 mt-1'>华师大研修班助教</p>
            </div>
            <div className='p-4 bg-pink-50 rounded-lg'>
              <h3 className='font-semibold text-pink-600'>文创管理</h3>
              <p className='text-sm text-gray-600 mt-1'>能量站文创中心负责人</p>
            </div>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>创作服务</h3>
              <p className='text-sm text-gray-600 mt-1'>视频配音与倾听陪伴</p>
            </div>
          </div>
        </div>

        {/* Interests & Media */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Book className='w-5 h-5 text-violet-600' />
            <h2 className='text-lg font-semibold text-gray-800'>兴趣与媒体</h2>
          </div>
          <div className='text-gray-600'>
            📖 朗读 | ✍️ 手写 | 🏓️ 孙颖莎 | 📱 梓悦予你 | 🌟 小红花进化日记
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "多线作战，稳稳创造属于自己的奇迹"
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
