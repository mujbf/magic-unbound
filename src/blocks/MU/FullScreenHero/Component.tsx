import React from 'react'
import type { FullScreenHeroBlock as FullScreenHeroBlockProps } from '@/payload-types'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'
import { CMSLink } from '@/components/Link'

type Props = FullScreenHeroBlockProps

export const FullScreenHero: React.FC<Props> = ({ title, subtitle, videoUrl, gradient, links }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden mt-[-80px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl || '/videos/hero3.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-shark-950/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col gap-4 lg:gap-8 items-center justify-center h-full text-center text-white px-4">
        <GradientText
          text={title || "The conscious, thoughtful, design, storytelling, and 'lab partner' you've been looking for."}
          gradient={gradient || 'linear-gradient(90deg, #ffffffff 0%, #ebfffe 35%, #ceffff 65%, #a2fdff 100%)'}
          className="instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight italic mb-6 text-center max-w-5xl"
        />
        {subtitle && (
          <p className="dm-sans text-base md:text-xl lg:text-2xl mb-6 text-center max-w-4xl">
            {subtitle}
          </p>
        )}
        {/* Buttons */}
        {links && links.length > 0 && (
          <div className="flex gap-4 flex-wrap justify-center">
            {links.map(({ link }, i) => (
              <CMSLink 
                key={i} 
                {...link} 
                appearance={link.appearance || undefined}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FullScreenHero
