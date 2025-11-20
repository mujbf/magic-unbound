'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'

import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'

interface Logo {
  src: string
  alt: string
}

const LogoSlider = ({ logos }: { logos: Logo[] }) => {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#202020] backdrop-blur-sm">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo: Logo, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 md:mx-10 grayscale hover:grayscale-0 transition-all duration-500 opacity-85 hover:opacity-100"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 md:h-12 w-auto" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export const ClientLogos: React.FC = () => {
  const logos = [
    { src: '/images/client-logos/logo1.png', alt: 'Company 1' },
    { src: '/images/client-logos/logo2.png', alt: 'Company 2' },
    { src: '/images/client-logos/logo3.png', alt: 'Company 3' },
    { src: '/images/client-logos/logo4.png', alt: 'Company 4' },
    { src: '/images/client-logos/logo5.png', alt: 'Company 5' },
  ]

  return (
    <div>
      <LogoSlider logos={logos} />
    </div>
  )
}

export default ClientLogos
