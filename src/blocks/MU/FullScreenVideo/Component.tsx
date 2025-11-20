import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'

import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'

export const FullScreenVideo: React.FC = () => {
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
        <source src="/videos/white1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional: darken video for better text visibility) */}
      <div className="absolute inset-0 bg-shark-950/50"></div>

      {/*Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-start px-16">
        <div className="max-w-7xl text-white space-y-4 pointer-events-auto ml-[240px]">
          <h1 className={`text-6xl md:text-8xl font-medium tracking-tight text-[#202020]`}>
            Let’s do it your way, <br />
            with our magic touch.
          </h1>
          <p className="text-[#202020] text-lg max-w-[640px]">
            <br />
            Every brand has its own unique challenges, which means every project deserves its own
            unique approach. We are genuinely excited by constraints, and are endlessly fascinated
            by the impact of cultures, traditions, and societal norms on the world of business. And
            we make a deliberate effort to understand and navigate these complexities with finesse
            and empathy. <br /> <br />
            That is why we prioritize flexibility in our collaborations to meet our clients where
            they are, and take them where they need to go.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FullScreenVideo
