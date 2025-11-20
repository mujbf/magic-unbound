import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'

import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'

export const FullScreenHero: React.FC = () => {
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
        <source src="/videos/hero3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional: darken video for better text visibility) */}
      <div className="absolute inset-0 bg-shark-950/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col gap-4 lg:gap-8 items-center justify-center h-full text-center text-white px-4">
        {/* <Text variant="h1" className="mb-6 text-center max-w-5xl">
          The conscious, thoughtful,{' '}
          <span className="italic">design, storytelling, and ‘lab partner’</span> you’ve been
          looking for.
        </Text> */}
        <GradientText
          text="The conscious, thoughtful, design, storytelling, and ‘lab partner’ you’ve been
          looking for."
          gradient="linear-gradient(90deg, #ffffffff 0%, #ebfffe 35%, #ceffff 65%, #a2fdff 100%)"
          className="instrument-serif text-6xl lg:text-8xl tracking-tight italic  mb-6 text-center max-w-5xl"
        />
        <Text variant="b1" className="dm-sans mb-6 text-center max-w-4xl">
          Win new customers, break into new markets (or conquer existing ones), and make serious
          productivity gains among your teams, all with our help.
        </Text>
        {/* Buttons */}
        <div className="flex gap-4">
          <Button variant="primary" icon={<ArrowRight size={18} />}>
            Learn More
          </Button>
          <Button variant="ghost" icon={<Files size={18} />}>
            Our Work
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FullScreenHero
