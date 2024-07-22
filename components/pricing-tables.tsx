export default function PricingTables() {  
  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">全速启动！</h2>
          </div>

          {/* Pricing tables */}
          <div className="max-w-xs mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

            {/* Pricing table 1 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow border-2 border-transparent dark:border-teal-500" data-aos="fade-down">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">入门版 Basic</div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">¥</span>
                  <span className="h3">0</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">/每月</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">— 限制内免费使用.</div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full" href="#0">注册</a>
              </div>
            </div>

            {/* Pricing table 2 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down" data-aos-delay="150">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">专业版 Pro</div>
                  <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">-50%</div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">¥</span>
                  <span className="h3">10</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">/每月</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">— 无限制绑定专属宠物</div>
                <div className="text-gray-500 dark:text-gray-400">— 无限制识别</div>
                <div className="text-gray-500 dark:text-gray-400">— 无限制对话次数</div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full" href="#0">升级 Premium</a>
              </div>
            </div>

            {/* Pricing table 3 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down" data-aos-delay="300">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">企业版 Bus</div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">240</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">/每月</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">— 提供完整的企业级方案</div>
                <div className="text-gray-500 dark:text-gray-400">— API开放</div>
                <div className="text-gray-500 dark:text-gray-400">— 开放企业用户绑定</div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full" href="#0">Go Premium</a>
              </div>
            </div>

            {/* Pricing features */}
            <div className="sm:order-first">
              <div className="text-right hidden sm:block">
                <svg className="inline-flex -mt-3 mr-5 mb-3" width="86" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-gray-600" d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z" />
                </svg>
              </div>
              <div className="text-lg font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-gray-100">基本权益:</div>
              <ul className="text-gray-400 -mb-2 grow">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>无限制访问</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>绑定一个专属宠物</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>有限次数识别</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>有限次数对话</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>无限制交流</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>无限制参与活动</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}