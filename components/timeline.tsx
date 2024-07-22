'use client'

import { useState } from 'react'

export default function Timeline() { 
  
  const [month, setMonth] = useState<string>('24/07')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">我们的计划</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">产品规划和项目研发将帮助我们更好的完成预定目标</p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex items-start">

              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1" aria-hidden="true">
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setMonth('24/12')}>
                  <span className="block w-12 truncate">24/12</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${month === '24/12' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setMonth('24/10')}>
                  <span className="block w-12 truncate">24/10</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${month === '24/10' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setMonth('24/08')}>
                  <span className="block w-12 truncate">24/08</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${month === '24/08' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setMonth('24/07')}>
                  <span className="block w-12 truncate">24/07</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${month === '24/07' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
              </div>

              {/* 2020's articles */}
              <div className={`grow ${month !== '24/12' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">产品上线</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>完成产品正式版内容，并发布上线。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2019's articles */}
              <div className={`grow ${month !== '24/10' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">应用产品研发</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>完成应用产品的第一阶段研发内容。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">市场内测</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>邀请部分订阅用户以及部分动物领域相关专业人士进行内部测试。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2018's articles */}
              <div className={`grow ${month !== '24/08' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">产品规划</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>进行产品规划，包含：产品设计、需求和相关文档工作。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">研发AI预数据处理</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>根据基于现有的数据和内容进行AI预训练，同时再阶段性的进行更多训练和预处理。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2017's articles */}
              <div className={`grow ${month !== '24/07' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">商业规划</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>对项目进行市场调研，完成商业准备。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">项目初期规划</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>完成项目的完整阶段性的规划内容。</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>了解更多</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}