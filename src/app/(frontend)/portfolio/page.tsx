
import React from 'react'
import type { Metadata } from 'next'

import { FullScreenHero } from '@/blocks/MU/FullScreenHero/Component'
import { FeaturedWork } from '@/blocks/MU/FeaturedWork/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { ClientLogos } from '@/blocks/MU/ClientLogos/Component'

export const metadata: Metadata = {
  title: 'Portfolio | Magic Unbound',
  description: 'A showcase of our best work.',
}

export default function PortfolioPage() {
  return (
    <>
      <FullScreenHero
        blockType="fullScreenHero"
        title="Our Portfolio"
        subtitle="A collection of our finest digital experiences."
        gradient="linear-gradient(90deg, #FFFFFF 0%, #A2FDFF 100%)"
        // Using existing video or default
        videoUrl="/videos/hero3.mp4" 
        links={[]}
      />
      
      {/* 
        This is a bit redundant if FeaturedWork already has a section container, 
        but we can wrap it or just use it directly. 
        FeaturedWork component has its own 'section' and 'bg' logic.
      */}
      <FeaturedWork />

      <div className="bg-shark-950 py-20">
        <ClientLogos />
      </div>

      <ContactBlock 
        title="Start Your Project"
        subtitle="Ready to build something similar?"
      />
    </>
  )
}
