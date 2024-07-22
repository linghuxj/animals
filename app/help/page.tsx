export const metadata = {
  title: '帮助中心 - 语灵之音',
  description: '可以获取您所需要的帮助信息',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-help'
import Content from './content'
import RelatedLinks from '@/components/related-links'

export default function Help() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>    
      <Hero />
      {/* <Content /> */}
      {/* <RelatedLinks /> */}
    </>
  )
}
