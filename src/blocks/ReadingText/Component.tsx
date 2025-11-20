// Component.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'

interface SplitTextHeroProps {
  backgroundImage?: {
    url?: string
    alt?: string
  }
  subheading?: string
  primaryText?: string
  secondaryText?: string
  animationSpeed?: number
  enableGradient?: boolean
}

export const SplitTextHero: React.FC<SplitTextHeroProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null)
  const primaryTextRef = useRef<HTMLDivElement>(null)
  const secondaryTextRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  const { backgroundImage, subheading, primaryText, secondaryText, enableGradient = false } = props

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !primaryText) return

    const splitTextToWords = (element: HTMLElement) => {
      const text = element.textContent || ''
      element.innerHTML = ''

      const words = text.split(' ')

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span')
        wordSpan.className = 'word-wrapper'

        for (let i = 0; i < word.length; i++) {
          const char = word[i]
          const span = document.createElement('span')
          span.className = 'split-char'
          span.textContent = char
          wordSpan.appendChild(span)
        }

        element.appendChild(wordSpan)

        // Add space after word (except last word)
        if (wordIndex < words.length - 1) {
          const space = document.createElement('span')
          space.className = 'split-char space-char'
          space.textContent = '\u00A0' // Non-breaking space
          element.appendChild(space)
        }
      })
    }

    if (primaryTextRef.current) {
      splitTextToWords(primaryTextRef.current)
    }

    if (secondaryTextRef.current && secondaryText) {
      splitTextToWords(secondaryTextRef.current)
    }

    // Scroll animation
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionRect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Start highlighting when section enters viewport
      // Finish when section top reaches top of viewport
      const start = windowHeight
      const end = 0
      const current = sectionRect.top

      // Calculate progress (0 = not started, 1 = fully highlighted)
      let scrollProgress = 0
      if (current <= start && current >= end) {
        scrollProgress = 1 - (current - end) / (start - end)
      } else if (current < end) {
        scrollProgress = 1
      }

      // Get all characters
      const chars = section.querySelectorAll('.split-char')
      const totalChars = chars.length

      // Calculate how many characters should be highlighted
      const highlightedCount = Math.floor(scrollProgress * totalChars)

      chars.forEach((char, index) => {
        if (index < highlightedCount) {
          char.classList.add('highlighted')
        } else {
          char.classList.remove('highlighted')
        }
      })
    }

    // Initial call and scroll listener
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isMounted, primaryText, secondaryText])

  if (!primaryText) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        .split-char {
          display: inline-block;
          color: rgba(255, 255, 255, 0.2);
          transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: color;
        }

        .split-char.highlighted {
          color: rgba(255, 255, 255, 1);
        }

        .space-char {
          width: 0.25em;
        }

        .word-wrapper {
          display: inline-block;
          white-space: nowrap;
        }

        .gradient-text .split-char.highlighted {
          background: linear-gradient(135deg, rgb(192, 132, 252) 0%, rgb(139, 92, 246) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .secondary-text .split-char {
          color: rgba(255, 255, 255, 0.15);
        }

        .secondary-text .split-char.highlighted {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
        {/* Background Image - Fixed */}
        <div className="fixed inset-0 w-full h-screen">
          <div className="absolute inset-0">
            {backgroundImage?.url && (
              <img
                src={backgroundImage.url}
                alt={backgroundImage.alt || 'Hero background'}
                className="w-full h-full object-cover"
              />
            )}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Subheading */}
              {subheading && (
                <div className="mb-8">
                  <span className="text-alabaster-50/60 text-sm tracking-[3px] uppercase font-medium">
                    {subheading}
                  </span>
                </div>
              )}

              {/* Animated Text */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                {/* Primary Text */}
                <div
                  ref={primaryTextRef}
                  className={`inline ${enableGradient ? 'gradient-text' : ''}`}
                >
                  {primaryText}
                </div>

                {/* Secondary Text */}
                {/* {secondaryText && (
                  <>
                    {' '}
                    <div ref={secondaryTextRef} className="inline secondary-text">
                      {secondaryText}
                    </div>
                  </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
