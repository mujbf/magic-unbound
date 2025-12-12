
import React from 'react'
import type { Metadata } from 'next'
import { ContactBlock } from '@/blocks/Contact/Component'
import { FullScreenHero } from '@/blocks/MU/FullScreenHero/Component'
import { ImpactSection } from '@/blocks/MU/ImpactSection/Component'

export const metadata: Metadata = {
  title: 'Contact | Magic Unbound',
  description: 'Get in touch with us.',
}

export default function ContactPage() {
  return (
    <div className="bg-shark-950 min-h-screen text-white">
       <FullScreenHero
        blockType="fullScreenHero"
        title="Let's Talk"
        subtitle="We're ready to start your next project."
        gradient="linear-gradient(90deg, #FFFFFF 0%, #A2FDFF 100%)"
        videoUrl="/videos/hero3.mp4" 
        links={[]}
      />
      
      <div className="relative -mt-20 z-10">
        <ContactBlock 
            title="Send us a message"
            subtitle="We usually reply within 24 hours."
        />
      </div>

       <ImpactSection />
    </div>
  )
}
