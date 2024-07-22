import Image from 'next/image'
import TestimonialImage01 from '@/public/images/avatar-01.png'
import TestimonialImage02 from '@/public/images/avatar-02.png'
import TestimonialImage03 from '@/public/images/avatar-03.jpeg'
import TestimonialImage04 from '@/public/images/avatar-04.png'
import TestimonialImage05 from '@/public/images/avatar-05.png'
import TestimonialImage06 from '@/public/images/avatar-06.png'
import TestimonialImage07 from '@/public/images/avatar-07.png'
import TestimonialImage08 from '@/public/images/avatar-08.png'

export default function TestimonialsBlocks() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

            {/* 1st testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={56} height={56} alt="Testimonial 01" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 我非常期待这项技术的正式发布。作为宠物主人，我希望能更好地理解我家猫咪的需求和情感，这将极大提升我们的相处质量。 ”</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Miss. 何</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Tencent.com</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={56} height={56} alt="Testimonial 02" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 这项技术对野生动物研究来说是一个巨大的进步。我迫不及待地想要看到它在实际应用中的效果，并希望能帮助我们更好地保护野生动物。 “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Miss. 刘</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">University</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage06} width={56} height={56} alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 作为动物保护志愿者，我希望这项技术能够加速濒危物种的保护工作。期待它能早日投入使用，帮助我们更好地监测和保护这些动物。 “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Mr. 吴</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Protection</a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage08} width={56} height={56} alt="Testimonial 04" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 我相信这项技术将彻底改变我们与宠物互动的方式。希望它能尽快完成开发，帮助每个宠物主人更好地理解他们的宠物。 “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Mr. 王</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Smtro.com</a>
              </div>
            </div>

            {/* 5th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage05} width={56} height={56} alt="Testimonial 04" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 我们动物园非常期待这项技术的应用。它不仅能提升游客的体验，还能教育他们如何更好地对待动物，促进人与动物的和谐共处。 “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Mr. 张</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Zoo</a>
              </div>
            </div>

            {/* 6th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={56} height={56} alt="Testimonial 04" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ 这项技术对我们的家庭来说是一个巨大的福音。希望它能尽快问世，让我们能够更好地与宠物交流，共享美好时光。 “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Miss. 谢</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Appicu</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}