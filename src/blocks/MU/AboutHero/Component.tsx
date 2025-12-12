import React from 'react'
import type { AboutHeroBlock as AboutHeroBlockProps } from '@/payload-types'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { CMSLink } from '@/components/Link'

type Props = AboutHeroBlockProps

export const AboutHero: React.FC<Props> = ({ title, subtitle, videoUrl, height, links }) => {
  return (
    <div className={`relative w-screen overflow-hidden bg-shark-950`} style={{ height: height || '600px' }}>
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl || '/videos/hero.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <div className="relative w-full h-full px-4 md:px-20 lg:px-40 z-10 flex flex-col items-center justify-center gap-6 md:gap-12">
        <h1 className="instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight text-center -mt-20 md:-mt-40">
          {title}
        </h1>

        {subtitle && (
          <p className="dm-sans text-base md:text-xl text-shark-200 text-center max-w-3xl">
            {subtitle}
          </p>
        )}

        {links && links.length > 0 && (
          <div className="flex-shrink-0 relative z-20 flex gap-4 flex-wrap justify-center">
            {links.map(({ link }, i) => (
              <CMSLink key={i} {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutHero
