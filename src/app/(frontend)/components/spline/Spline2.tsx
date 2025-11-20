'use client'

import Spline from '@splinetool/react-spline'
import { Suspense } from 'react'
import { Instrument_Serif, DM_Sans } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: '400', // ✅ only 400 allowed for this font
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // ✅ multiple weights supported
  subsets: ['latin'],
})

export function SplineScene2() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${dmSans.className}`}>
      {/* 🧠 Overlay Section */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-start px-16">
        <div className="max-w-7xl text-white space-y-4 pointer-events-auto ml-[240px]">
          <h1
            className={`${instrumentSerif.className} text-6xl md:text-8xl font-medium tracking-tight text-[#202020]`}
          >
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

      {/* 🎨 3D Scene */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-0">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline scene="https://prod.spline.design/nWfUMPSeYapa6Tnm/scene.splinecode" />
      </Suspense>
    </div>
  )
}
