import Link from 'next/link'
import Image from 'next/image'
import HeroBg from '@/public/images/hero-bg-02.jpg'

export default function HeroTestimonials() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width={1440} height={577} priority alt="Testimonials" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">我们始终相信AI能带来更多的应用场景和内容</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">如果您也对AI应用领域感兴趣，也来加入我们吧。我们将始终贯彻执行AI给人们来带更多的便利和安全。</p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3" href="/contact">加入我们</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}