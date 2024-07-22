export const metadata = {
  title: 'Contact - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'

export default function Contact() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">注册 & 订阅</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">我们将及时通知您产品的详细和整体进度。</p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="username">用户名 <span className="text-red-600">*</span></label>
                  <input id="username" type="text" className="form-input w-full" placeholder="请输出您的用户名" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">公司名称 </label>
                  <input id="company" type="text" className="form-input w-full" placeholder="请输入您所在的公司名称" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">手机号 <span className="text-red-600">*</span></label>
                  <input id="phone" type="tel" className="form-input w-full" placeholder="请输入您的手机号" required maxLength={11}/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="message">反馈</label>
                    <span className="text-sm text-gray-500">选填</span>
                  </div>
                  <textarea id="message" rows={4} className="form-textarea w-full" placeholder="您有什么想要了解么？"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">您从哪里了解到本项目的渠道</div>
                  <label className="flex items-center mb-2">
                    <input type="radio" className="form-radio" name="role" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">朋友介绍</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="radio" className="form-radio" name="role" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">社区</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="radio" className="form-radio" name="role" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">微信公众号</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="radio" className="form-radio" name="role" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">社交推广渠道</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                    <span>注册 & 订阅</span>
                    <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}
