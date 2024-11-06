import React from 'react';
import {
  MapPin,
  Target,
  Award,
  Book,
  Compass,
  Heart,
  Sparkles
} from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/yuhong.JPG';
  const name = '雨洪';
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
              <h1 className='text-2xl font-bold text-gray-800'>雨洪 (红妞)</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>西安</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-amber-100 text-amber-600 rounded-full text-sm'>
                  教研员
                </span>
                <span className='px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm'>
                  教育工作者
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  二孩妈妈
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallup Strengths */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Sparkles className='w-5 h-5 text-amber-600' />
            <h2 className='text-lg font-semibold text-gray-800'>盖洛普优势</h2>
          </div>
          <div className='bg-amber-50 rounded-lg p-4'>
            成就 | 思维 | 竞争 | 交往 | 和谐
          </div>
        </div>

        {/* Background */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Award className='w-5 h-5 text-amber-600' />
            <h2 className='text-lg font-semibold text-gray-800'>教育背景</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-amber-600 rounded-full'></div>
              <span>教育学硕士学位</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-amber-600 rounded-full'></div>
              <span>幼儿教育专业背景</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-amber-600 rounded-full'></div>
              <span>教研指导工作经验</span>
            </li>
          </ul>
        </div>

        {/* Future Goals */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Target className='w-5 h-5 text-amber-600' />
            <h2 className='text-lg font-semibold text-gray-800'>成长愿景</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>内容创作</h3>
              <p className='text-sm text-gray-600 mt-1'>筹备"和光同尘"公众号</p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>教育理念</h3>
              <p className='text-sm text-gray-600 mt-1'>践行"微笑养育"理念</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>个人成长</h3>
              <p className='text-sm text-gray-600 mt-1'>深入认识与悦纳自我</p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>知识储备</h3>
              <p className='text-sm text-gray-600 mt-1'>跨领域多维度学习</p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Book className='w-5 h-5 text-amber-600' />
            <h2 className='text-lg font-semibold text-gray-800'>兴趣领域</h2>
          </div>
          <div className='text-gray-600'>
            📚 阅读 | 🚗 汽车文化 | ✨ 奢侈品 | 🧠 心理学 | 📱 自媒体
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "既不卑不亢，也能收放自如，追求轻松自洽的教育理念"
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
