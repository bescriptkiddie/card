import React from 'react';
import {
  MapPin,
  Briefcase,
  Target,
  Award,
  Compass,
  Heart,
  Sparkles
} from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/chengzi.JPG';
  const name = '橙子 Orange';
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
              <h1 className='text-2xl font-bold text-gray-800'>橙子 Orange</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>成都</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm'>
                  ENFP
                </span>
                <span className='px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm'>
                  白羊座
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  会计硕士
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Focus */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-orange-500' />
            <h2 className='text-lg font-semibold text-gray-800'>盖洛普优势</h2>
          </div>
          <div className='bg-orange-50 rounded-lg p-4'>
            取悦 | 体谅 | 伯乐 | 积极 | 沟通
          </div>
        </div>

        {/* Career Highlights */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Award className='w-5 h-5 text-orange-500' />
            <h2 className='text-lg font-semibold text-gray-800'>专业认证</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
              <span>盖洛普优势教练认证</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
              <span>中科院认证心理咨询师</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
              <span>系统式催眠师 & OH卡咨询师</span>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-orange-500' />
            <h2 className='text-lg font-semibold text-gray-800'>服务领域</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>优势绽放定位</h3>
              <p className='text-sm text-gray-600 mt-1'>优势动力创富合伙人</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>职业转型指导</h3>
              <p className='text-sm text-gray-600 mt-1'>主副业探索与定位</p>
            </div>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>情绪疗愈</h3>
              <p className='text-sm text-gray-600 mt-1'>
                解决情绪内耗，实现身心自由
              </p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>创业指导</h3>
              <p className='text-sm text-gray-600 mt-1'>
                小红书变现与优势工作坊
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Heart className='w-5 h-5 text-orange-500' />
            <h2 className='text-lg font-semibold text-gray-800'>兴趣爱好</h2>
          </div>
          <div className='text-gray-600'>
            📷 摄影 | ⛰️ 高海拔徒步 | 🎮 优势桌游 | 🎯 个人成长
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "从财务到教练，用优势绽放每一种可能"
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
