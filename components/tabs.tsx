'use client'

import { useState } from 'react'

import Image from 'next/image'
import Analysis1 from '@/public/images/ai-analysis-01.jpg'
import Analysis2 from '@/public/images/ai-analysis-02.png'
import Analysis3 from '@/public/images/ai-analysis-03.jpg'
import Analysis4 from '@/public/images/ai-analysis-04.jpg'
import Analysis5 from '@/public/images/ai-analysis-05.jpg'

export default function Tabs() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">创新AI技术，开启人与动物对话新时代</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">我们的创新AI技术，借助先进的图像和声音识别、情感分析和实时翻译功能，打破了人与动物之间的沟通障碍。无论你是宠物主人、野生动物研究人员，还是动物保护工作者，我们的技术都能帮助你更深入地理解和关心你所关注的动物。通过精准的数据分析和即时的情感反馈，我们致力于建立一个人与动物共生共荣的和谐世界。</p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '1' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('1')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '1' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z" />
                  </svg>
                  <span className={category === '1' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>智能识别</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '2' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('2')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '2' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z" />
                  </svg>
                  <span className={category === '2' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>情感分析</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '3' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('3')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '3' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z" />
                  </svg>
                  <span className={category === '3' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>实时翻译</span>
                </button>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div className="mx-auto">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {['1'].includes(category) ? '我们的AI能够准确识别动物的种类、情绪及行为模式。通过先进的图像和声音识别技术，系统能够快速分析并反馈动物的具体信息。'
                    : ['2'].includes(category) ? '通过情感分析算法，我们的技术能够解读动物的情绪和需求，帮助你更好地理解它们的心情。':
                    '我们的实时翻译技术能够将动物的叫声、动作转换为可理解的人类语言，让你即时了解动物的想法和感受。'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative">
                      <Image className="w-full" src={Analysis1} width={320} height={180} alt="AI Analysis" />
                    </div>
                  </div>
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center">
                      <Image className="w-full" src={Analysis2} width={320} height={180} alt="AI Analysis" />
                    </div>
                  </div>
                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center shadow">
                      <Image className="w-full" src={Analysis3} width={320} height={180} alt="AI Analysis" />
                    </div>
                  </div>
                  <div className={['3'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center shadow">
                      <Image className="w-full" src={Analysis4} width={320} height={180} alt="AI Analysis" />
                    </div>
                  </div>
                  <div className={['3'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center shadow">
                      <Image className="w-full" src={Analysis5} width={320} height={180} alt="AI Analysis" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}