'use client'

import { useState } from 'react'

import Image from 'next/image'
import UserImage1 from '@/public/images/avatar-01.png'
import UserImage2 from '@/public/images/avatar-02.png'
import UserImage3 from '@/public/images/avatar-03.jpeg'
import UserImage4 from '@/public/images/avatar-04.png'
import UserImage5 from '@/public/images/avatar-05.png'
import UserImage6 from '@/public/images/avatar-06.png'
import UserImage7 from '@/public/images/avatar-07.png'
import UserImage8 from '@/public/images/avatar-08.png'
import UserImage9 from '@/public/images/avatar-01.png'
import UserImage10 from '@/public/images/avatar-02.png'
import UserImage11 from '@/public/images/avatar-03.jpeg'
import UserImage12 from '@/public/images/avatar-04.png'
import UserImage13 from '@/public/images/avatar-05.png'
import UserImage14 from '@/public/images/avatar-06.png'
import UserImage15 from '@/public/images/avatar-07.png'
import UserImage16 from '@/public/images/avatar-08.png'
import UserImage17 from '@/public/images/avatar-01.png'
import UserImage18 from '@/public/images/avatar-03.jpeg'
import UserImage19 from '@/public/images/avatar-05.png'
import UserImage20 from '@/public/images/avatar-07.png'

export default function TestimonialsCircles() {

  const [commentOn, setCommentOn] = useState<boolean>(false)
  const [active, setActive] = useState<number>(0)
  const [items] = useState([
    {
      image: UserImage1,
      size: 48, // image width / height
      style: { maxWidth: '7.08%', top: '29%', left: '2%' }, // image absolute  positioning
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage2,
      size: 36,
      style: { maxWidth: '5.31%', top: '60%', left: '2%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage3,
      size: 64,
      style: { maxWidth: '10.62%', top: '43%', left: '13%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage4,
      size: 56,
      style: { maxWidth: '8.26%', top: '75%', left: '14%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage5,
      size: 64,
      style: { maxWidth: '9.44%', top: '11%', left: '15%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage6,
      size: 80,
      style: { maxWidth: '11.8%', top: '32%', left: '30%' },
      comment: '全栈工程师，专注于NextJS等应用级全栈开发',
      name: '李**',
    },
    {
      image: UserImage7,
      size: 50,
      style: { maxWidth: '7.37%', top: '65%', left: '30%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage8,
      size: 36,
      style: { maxWidth: '5.31%', top: '6%', left: '33%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage9,
      size: 44,
      style: { maxWidth: '6.49%', top: '77%', left: '44%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage10,
      size: 72,
      style: { maxWidth: '9.44%', top: '48%', left: '46%' },
      comment: '产品经理，专注于产品需求调研、需求规划等工作',
      name: '张*',
    },
    {
      image: UserImage5,
      size: 72,
      style: { maxWidth: '10.62%', top: '16%', left: '46%' },
      comment: '技术负责人，带领团队利用AI完成更多应用级产品实现商业需求和目的',
      name: '令狐**',
    },
    {
      image: UserImage12,
      size: 64,
      style: { maxWidth: '9.44%', top: '65%', left: '58%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage13,
      size: 80,
      style: { maxWidth: '11.8%', top: '32%', left: '62%' },
      comment: 'AI研发工程师，专注于AI训练与算法实现。',
      name: '陈*',
    },
    {
      image: UserImage14,
      size: 48,
      style: { maxWidth: '7.08%', top: '6%', left: '63%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage15,
      size: 24,
      style: { maxWidth: '3.54%', top: '93%', left: '65%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage16,
      size: 36,
      style: { maxWidth: '5.31%', top: '86%', left: '76%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage17,
      size: 44,
      style: { maxWidth: '6.49%', top: '59%', left: '76%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage18,
      size: 72,
      style: { maxWidth: '10.62%', top: '14%', left: '78%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage19,
      size: 64,
      style: { maxWidth: '9.44%', top: '40%', left: '89%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
    {
      image: UserImage20,
      size: 24,
      style: { maxWidth: '3.54%', top: '74%', left: '91%' },
      comment: '🙌 期待您的加入',
      name: '虚位以待',
    },
  ])  

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="relative">

            {/* Background image */}
            <svg className="mx-auto" viewBox="0 0 678 346" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="circle_b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
                <linearGradient x1="50%" y1="50%" x2="50%" y2="89.386%" id="circle_a">
                  <stop stopColor="#2E2E33" offset="0%" />
                  <stop stopColor="#2E2E33" stopOpacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle className="opacity-10 dark:opacity-100" fill="url(#circle_a)" opacity=".32" cx="339" cy="173" r="173" />
                <circle fill="url(#circle_b)" opacity=".32" cx="339" cy="173" r="140" />
              </g>
            </svg>

            {/* People pics */}
            {items.map((item, index) => (
              <Image key={index} className="absolute rounded-full z-10 animate-float" style={item.style} src={item.image} width={item.size} height={item.size} alt={`User ${index + 1}`} onMouseEnter={() => { setActive(index); setCommentOn(true); }} onMouseLeave={() => setCommentOn(false)} />
            ))}

            {/* Comment box */}
            <div className={`opacity-0 transition duration-150 ease-in-out absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 max-w-xs w-full p-3 bg-white dark:bg-gray-800 text-center shadow-2xl z-20 pointer-events-none ${commentOn && 'opacity-100'}`}>
              <div className="text-gray-600 dark:text-gray-400 mb-1">{items[active].comment}</div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">{items[active].name}</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}