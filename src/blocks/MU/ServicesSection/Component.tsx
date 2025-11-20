'use client'
import React, { useState } from 'react'

const Text = ({
  variant,
  className,
  children,
}: {
  variant: string
  className?: string
  children: React.ReactNode
}) => {
  const variants: Record<string, string> = {
    h1: 'instrument-serif text-6xl md:text-8xl font-medium tracking-tight',
    h2: 'dm-sans text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight',
    h3: 'dm-sans text-2xl md:text-3xl font-normal tracking-tight',
    h4: 'dm-sans text-lg md:text-xl font-light tracking-tight',
    b2: 'dm-sans text-base md:text-lg font-normal',
    b3: 'dm-sans text-base md:text-lg font-normal',
  }
  return <div className={`${variants[variant] || ''} ${className || ''}`}>{children}</div>
}

const ServiceItem = ({
  text,
  image,
  onHover,
  isActive,
}: {
  text: string
  image: string
  onHover: (image: string) => void
  isActive: boolean
}) => {
  return (
    <div
      className={`group relative py-2 transition-all duration-300 cursor-pointer ${
        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
      }`}
      onMouseEnter={() => onHover(image)}
    >
      <div className="flex items-start gap-2">
        <span className="text-white/40 mt-1">→</span>
        <Text
          variant="b3"
          className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}
        >
          {text}
        </Text>
      </div>
    </div>
  )
}

interface ServiceSection {
  id: number
  number: string
  title: string
  image: string
  services: { text: string; image: string }[]
}

export default function ServicesSection() {
  const [activeImages, setActiveImages] = useState<Record<number, string>>({
    1: '/images/jpg/about-carousel-image-1.jpg',
    2: '/images/jpg/about-carousel-image-2.jpg',
    3: '/images/jpg/about-carousel-image-3.jpg',
  })

  const sections: ServiceSection[] = [
    {
      id: 1,
      number: '01',
      title: 'Ideas',
      image: '/images/jpg/about-carousel-image-1.jpg',
      services: [
        { text: 'Brand Strategy', image: '/images/jpg/about-carousel-image-1.jpg' },
        { text: 'Brand Design', image: '/images/jpg/about-carousel-image-2.jpg' },
        { text: 'Art Direction', image: '/images/jpg/about-carousel-image-3.jpg' },
      ],
    },
    {
      id: 2,
      number: '02',
      title: 'Execution',
      image: '/images/jpg/about-carousel-image-2.jpg',
      services: [
        { text: 'Digital Graphic Design', image: '/images/jpg/about-carousel-image-2.jpg' },
        { text: 'Print Design', image: '/images/jpg/about-carousel-image-3.jpg' },
        { text: 'Presentation Design', image: '/images/jpg/about-carousel-image-1.jpg' },
        { text: 'Copywriting', image: '/images/jpg/about-carousel-image-2.jpg' },
        { text: 'Social Content', image: '/images/jpg/about-carousel-image-3.jpg' },
      ],
    },
    {
      id: 3,
      number: '03',
      title: 'Experiments',
      image: '/images/jpg/about-carousel-image-3.jpg',
      services: [
        {
          text: 'Workflow and Process Transformation Using Custom AI Deployments',
          image: '/images/jpg/about-carousel-image-3.jpg',
        },
        {
          text: 'Mini-apps for Specialized Enterprise Teams',
          image: '/images/jpg/about-carousel-image-2.jpg',
        },
        {
          text: 'Headless Content Management Systems',
          image: '/images/jpg/about-carousel-image-1.jpg',
        },
      ],
    },
  ]

  const handleHover = (sectionId: number, image: string) => {
    setActiveImages((prev) => ({ ...prev, [sectionId]: image }))
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#131314] to-shark-950">
      <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-20">
        {/* Heading */}
        <div className="mb-16 text-center w-full flex flex-col items-center justify-center">
          <Text variant="h1" className="italic mb-3 text-white">
            Our <span className="not-italic">Services</span>
          </Text>
          <Text variant="b2" className="mt-4 text-white/70">
            Three pillars of creative excellence.
          </Text>
        </div>

        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2D2E]/50 transform -translate-x-1/2"></div>

        {/* Timeline Cards */}
        <div className="space-y-16 relative">
          {sections.map((section: ServiceSection, index: number) => (
            <div
              key={section.id}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border border-white/10 shadow-md"></div>

              {/* Empty space to offset layout */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Card */}
              <div
                className={`relative w-full md:w-3/5 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white/[0.06] transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto md:pl-6' : 'md:ml-auto md:pr-6'
                }`}
              >
                <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={activeImages[section.id]}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-5xl font-light text-white/20 instrument-serif">
                        {section.number}
                      </span>
                      <Text variant="h2" className="text-white">
                        {section.title}
                      </Text>
                    </div>

                    <div className="space-y-1">
                      {section.services.map((service, idx) => (
                        <ServiceItem
                          key={idx}
                          text={service.text}
                          image={service.image}
                          onHover={(img) => handleHover(section.id, img)}
                          isActive={activeImages[section.id] === service.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Instrument+Serif:wght@400&display=swap');

        .dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

        .instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </div>
  )
}
