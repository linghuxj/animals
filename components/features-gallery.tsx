import Image from 'next/image'
import AboutImage01 from '@/public/images/ai-scene-02.jpg'
import AboutImage02 from '@/public/images/ai-scene-04.jpg'
import AboutImage03 from '@/public/images/ai-analysis-01.jpg'
import AboutImage04 from '@/public/images/ai-scene-06.jpg'
import AboutImage05 from '@/public/images/ai-analysis-05.jpg'
import AboutImage06 from '@/public/images/ai-scene-03.jpg'

export default function FeaturesGallery() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 pb-12 md:pt-8 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">AI工具将是我们的利器</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">我们希望AI技术不仅在宠物交流中大放异彩，还在野生动物研究和动物保护等多个领域也能展现出强大实力。</p>
          </div>

          {/* Items */}

          {/* Images grid */}
          {/* <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
            <Image className="col-span-4" src={AboutImage01} width={360} height={270} alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
            <Image className="col-span-3" src={AboutImage02} width={270} height={270} alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
            <Image className="col-span-5" src={AboutImage03} width={450} height={270} alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
            <Image className="col-span-3" src={AboutImage04} width={270} height={270} alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
            <Image className="col-span-5" src={AboutImage05} width={450} height={270} alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
            <Image className="col-span-4" src={AboutImage06} width={360} height={270} alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
          </div> */}

        </div>
      </div>
    </section>
  )
}