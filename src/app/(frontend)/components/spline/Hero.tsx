'use client'

import Spline from '@splinetool/react-spline'
import { Suspense } from 'react'

export function SplineScene() {
  return (
    <div className="relative w-screen h-screen mt-[-120px]">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline scene="https://prod.spline.design/BupoQNdm5HSQa0In/scene.splinecode" />
      </Suspense>
    </div>
  )
}
