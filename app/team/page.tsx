export const metadata = {
  title: '团队介绍 - 语灵之音',
  description: '关于我们项目的团队成员相关介绍内容',
}

import Hero from '@/components/hero-testimonials'
import Clients from '@/components/clients'
import Video from '@/components/testimonials-video'
import Carousel from '@/components/testimonials-carousel'
import Circles from '@/components/testimonials-circles'
import Cta from '@/components/cta'

export default function Team() {
  return (
    <>
      <Hero />
      {/* <Clients /> */}
      <Video />
      {/* <Carousel /> */}
      <Circles />
      <Cta />
    </>
  )
}