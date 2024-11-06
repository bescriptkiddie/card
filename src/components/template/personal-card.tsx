import React from 'react';
import { MapPin, Briefcase, Target, Award, Compass, Heart } from 'lucide-react';

const PersonalCard = () => {
  const imageUrl = '/images/cathy.jpg';
  const name = '凯西 Cathy';
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
              <h1 className='text-2xl font-bold text-gray-800'>凯西 Cathy</h1>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>上海</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>
                  技术管理
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  盖洛普教练
                </span>
                <span className='px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm'>
                  职业发展顾问
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Focus */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Target className='w-5 h-5 text-blue-600' />
            <h2 className='text-lg font-semibold text-gray-800'>
              近期关键投入
            </h2>
          </div>
          <div className='bg-blue-50 rounded-lg p-4'>
            深耕IT技术管理与盖洛普优势教练领域，致力于人才发展与个人成长
          </div>
        </div>

        {/* Career Highlights */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Award className='w-5 h-5 text-blue-600' />
            <h2 className='text-lg font-semibold text-gray-800'>履历亮点</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
              <span>复旦大学计算机专业毕业，扎根IT领域</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
              <span>2B软件外企技术顾问晋升团队管理</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
              <span>专业盖洛普教练认证，助力职业发展</span>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-blue-600' />
            <h2 className='text-lg font-semibold text-gray-800'>擅长领域</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>技术管理</h3>
              <p className='text-sm text-gray-600 mt-1'>团队建设与技术咨询</p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>优势教练</h3>
              <p className='text-sm text-gray-600 mt-1'>盖洛普认证个人发展</p>
            </div>
            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-600'>职业发展</h3>
              <p className='text-sm text-gray-600 mt-1'>职业规划与转型指导</p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>亲子教育</h3>
              <p className='text-sm text-gray-600 mt-1'>优势视角培养下一代</p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Heart className='w-5 h-5 text-blue-600' />
            <h2 className='text-lg font-semibold text-gray-800'>兴趣爱好</h2>
          </div>
          <div className='text-gray-600'>
            📚 阅读 | 🌏 旅行 | 👨‍👩‍👧 亲子 | 🎯 自我提升
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>
              "读万卷书，行万里路，追求多姿多彩的人生"
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
