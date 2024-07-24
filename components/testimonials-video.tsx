import VideoThumb from '@/public/images/team-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function TestimonialsVideo() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Sounds"
            video="https://an-smtro.oss-cn-guangzhou.aliyuncs.com/video/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>
      </div>
    </section>
  )
}