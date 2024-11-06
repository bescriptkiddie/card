import React from 'react';
import {
  Award,
  BookOpen,
  Compass,
  Heart,
  MapPin,
  Star,
  Zap
} from 'lucide-react';

const PersonalCard = () => {
  const name = '墨啊';
  const imageUrl = '/images/amo.JPG';

  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-2xl'>
        {/* Header */}
        <div className='p-6 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50'></div>
          <div className='relative flex items-start gap-4'>
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
            <div className='flex-1'>
              <h1 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
                墨啊~ <span className='text-2xl'>🌱</span>
              </h1>
              <div className='flex items-center gap-2 mt-2 text-gray-600'>
                <MapPin className='w-4 h-4' />
                <span>襄阳</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-3'>
                <span className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium'>
                  心理咨询师
                </span>
                <span className='px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium'>
                  盖洛普优势教练
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 盖洛普优势 */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-3'>
            <Star className='w-5 h-5 text-green-600' />
            <h2 className='text-lg font-bold text-gray-800'>盖洛普核心优势</h2>
          </div>
          <div className='grid grid-cols-5 gap-3'>
            {['理念', '学习', '完美', '战略', '行动'].map((strength) => (
              <div
                key={strength}
                className='px-3 py-2 bg-green-50 rounded-lg text-green-700 text-center text-sm font-medium'
              >
                {strength}
              </div>
            ))}
          </div>
        </div>

        {/* 专业背景 */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Award className='w-5 h-5 text-green-600' />
            <h2 className='text-lg font-bold text-gray-800'>专业背景</h2>
          </div>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3'>
              <BookOpen className='w-4 h-4 text-green-600' />
              <span>每年阅读50本，保持日更</span>
            </li>
            <li className='flex items-center gap-3'>
              <Heart className='w-4 h-4 text-green-600' />
              <span>6年心理咨询师经验</span>
            </li>
            <li className='flex items-center gap-3'>
              <Zap className='w-4 h-4 text-green-600' />
              <span>心理公益协会成员</span>
            </li>
          </ul>
        </div>

        {/* 服务内容 */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-green-600' />
            <h2 className='text-lg font-bold text-gray-800'>提供服务</h2>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl'>
              <h3 className='font-bold text-green-700'>自媒体成长</h3>
              <p className='mt-1 text-sm text-gray-600'>
                小红书/视频号起号变现
              </p>
            </div>
            <div className='p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl'>
              <h3 className='font-bold text-emerald-700'>优势教练</h3>
              <p className='mt-1 text-sm text-gray-600'>盖洛普课程｜副业变现</p>
            </div>
            <div className='p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl'>
              <h3 className='font-bold text-teal-700'>个人IP打造</h3>
              <p className='mt-1 text-sm text-gray-600'>品牌建设｜个人成长</p>
            </div>
            <div className='p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl'>
              <h3 className='font-bold text-green-700'>商业赋能</h3>
              <p className='mt-1 text-sm text-gray-600'>商业认知｜能力提升</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gradient-to-br from-gray-50 to-gray-100'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='text-sm text-gray-600 mb-1'>公众号</div>
              <div className='font-medium text-gray-800'>墨啊优势成长笔记</div>
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
