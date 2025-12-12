import React from 'react'
import type { VideoSectionBlock as VideoSectionBlockProps } from '@/payload-types'

type Props = VideoSectionBlockProps

export const VideoSection: React.FC<Props> = ({ videoUrl, rounded, containerPadding }) => {
  return (
    <section className={`w-full ${containerPadding || 'py-16'}`}>
      <div className="container mx-auto grid grid-cols-1 gap-10 items-center px-4 md:px-6">
        <div className="w-full">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className={`${rounded ? 'rounded-xl' : ''} shadow-lg w-full h-auto object-cover`}
          />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
