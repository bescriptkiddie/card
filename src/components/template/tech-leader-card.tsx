import React from 'react';
import {
  MapPin,
  Target,
  Cpu,
  BookOpen,
  Compass,
  Users,
  Network
} from 'lucide-react';

const PersonalCard = () => {
  const name = '周彬';
  const imageUrl = '/images/xigua.JPG';
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
              <h1 className='text-2xl font-bold text-gray-800'>周彬</h1>
              <div className='text-gray-600 text-sm'>芝麻变西瓜</div>
              <div className='flex items-center gap-2 text-gray-600 mt-1'>
                <MapPin className='w-4 h-4' />
                <span>上海/江苏徐州</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>
                  互联网开发者
                </span>
                <span className='px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm'>
                  AI探索者
                </span>
                <span className='px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                  技术面试官
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Focus */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Target className='w-5 h-5 text-emerald-600' />
            <h2 className='text-lg font-semibold text-gray-800'>
              近期关键投入
            </h2>
          </div>
          <div className='bg-emerald-50 rounded-lg p-4'>
            深耕AI领域，打造AI IP，探索技术创新第二曲线
          </div>
        </div>

        {/* Technical Background */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Cpu className='w-5 h-5 text-emerald-600' />
            <h2 className='text-lg font-semibold text-gray-800'>技术背景</h2>
          </div>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-emerald-600 rounded-full'></div>
              <span>10年+互联网行业开发经验</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-emerald-600 rounded-full'></div>
              <span>校招金牌面试官</span>
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-emerald-600 rounded-full'></div>
              <span>AI技术探索与实践</span>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Compass className='w-5 h-5 text-emerald-600' />
            <h2 className='text-lg font-semibold text-gray-800'>专业服务</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-600'>技术咨询</h3>
              <p className='text-sm text-gray-600 mt-1'>
                编程、架构、AI领域指导
              </p>
            </div>
            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-600'>职业辅导</h3>
              <p className='text-sm text-gray-600 mt-1'>
                计算机应届生求职面试指导
              </p>
            </div>
            <div className='p-4 bg-emerald-50 rounded-lg'>
              <h3 className='font-semibold text-emerald-600'>AI探索</h3>
              <p className='text-sm text-gray-600 mt-1'>AI技术创新与商业应用</p>
            </div>
            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-600'>知识分享</h3>
              <p className='text-sm text-gray-600 mt-1'>优质知识付费内容</p>
            </div>
          </div>
        </div>

        {/* Communities */}
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Users className='w-5 h-5 text-emerald-600' />
            <h2 className='text-lg font-semibold text-gray-800'>社群身份</h2>
          </div>
          <div className='text-gray-600'>
            🚀 AI破局俱乐部 | 📚 靠谱销冠 | 💡 黎明雪球俱乐部 | 👑 王子合伙人
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 bg-gray-50'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-600 italic'>"用技术创新，链接AI未来"</p>
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
