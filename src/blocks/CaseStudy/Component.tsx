'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface CaseStudy {
  id: string
  title: string
  description: string
  category: 'ideas' | 'execution' | 'experiments'
  image: {
    url: string
    alt?: string
  }
  video?: {
    url: string
  }
  link: string
}

interface CaseStudySectionProps {
  title?: string
  caseStudies?: CaseStudy[]
}

const sampleCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Brand Identity Revolution',
    description: 'A complete rebrand for a sustainable fashion startup',
    category: 'ideas',
    image: {
      url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      alt: 'Fashion brand',
    },
    video: {
      url: 'https://assets.mixkit.co/videos/preview/mixkit-person-drawing-a-fashion-design-sketch-43749-large.mp4',
    },
    link: '/case-studies/brand-identity',
  },
  {
    id: '2',
    title: 'Digital Product Launch',
    description: 'End-to-end digital experience for product launch',
    category: 'execution',
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      alt: 'Digital dashboard',
    },
    video: {
      url: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-1365-large.mp4',
    },
    link: '/case-studies/product-launch',
  },
  {
    id: '3',
    title: 'Interactive Installation',
    description: 'Museum experience blending art and technology',
    category: 'experiments',
    image: {
      url: 'https://images.unsplash.com/photo-1551847812-f5e8e20c2c5c?w=800&q=80',
      alt: 'Interactive art',
    },
    video: {
      url: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-fireworks-explosion-4158-large.mp4',
    },
    link: '/case-studies/interactive-installation',
  },
  {
    id: '4',
    title: 'Mobile App Redesign',
    description: 'Transforming user experience for 2M+ users',
    category: 'execution',
    image: {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      alt: 'Mobile app',
    },
    video: {
      url: 'https://assets.mixkit.co/videos/preview/mixkit-smartphone-screen-with-scrolling-content-4809-large.mp4',
    },
    link: '/case-studies/app-redesign',
  },
]

const CaseStudyCard: React.FC<{
  study: CaseStudy
  index: number
  isWide: boolean
  onMouseMove: (e: React.MouseEvent) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}> = ({ study, index, isWide, onMouseMove, onMouseEnter, onMouseLeave }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    onMouseEnter()
    if (videoRef.current && study.video) {
      videoRef.current.play().catch((e) => console.log('Video play failed:', e))
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onMouseLeave()
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group cursor-none ${isWide ? 'col-span-2' : 'col-span-1'}`}
      onMouseMove={onMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={study.link} className="block">
        {/* Image/Video Container */}
        <div
          className="relative overflow-hidden bg-neutral-900 mb-6"
          style={{ paddingBottom: '66.67%' }}
        >
          {/* Image */}
          <img
            src={study.image.url}
            alt={study.image.alt || study.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && study.video ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Video */}
          {study.video && (
            <video
              ref={videoRef}
              src={study.video.url}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          )}

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
              {study.category}
            </span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            {study.title}
          </h3>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">{study.description}</p>
        </div>
      </a>
    </motion.div>
  )
}

export default function CaseStudySection({
  title = 'Selected Work',
  caseStudies = sampleCaseStudies,
}: CaseStudySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)

  const categories = ['all', 'ideas', 'execution', 'experiments']

  const filteredStudies =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter)

  // Create alternating layout pattern
  const getCardWidth = (index: number): boolean => {
    const pattern = [true, false, false, true, false] // wide, narrow, narrow, wide, narrow
    return pattern[index % pattern.length]
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      {/* Custom Cursor */}
      {showCursor && (
        <div
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="bg-black text-white px-6 py-3 text-sm font-medium whitespace-nowrap rounded">
            View Project
          </div>
        </div>
      )}

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-system-dark_90 py-20 md:py-32 mt-[-240px]"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Title and Filters */}
          <div ref={titleRef} className="mb-20 md:mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mu-type-title text-6xl md:text-8xl text-system-light_100 mb-12 mt-40"
            >
              {title}
            </motion.h2>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-wrap gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 border ${
                    activeFilter === category
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                isWide={getCardWidth(index)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowCursor(true)}
                onMouseLeave={() => setShowCursor(false)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="text-2xl text-neutral-600">No case studies found in this category</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
