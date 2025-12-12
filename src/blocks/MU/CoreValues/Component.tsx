'use client'

import React, { useRef, useEffect, useState } from 'react'
import type { CoreValuesBlock as CoreValuesBlockProps } from '@/payload-types'

type Props = CoreValuesBlockProps

export const CoreValues: React.FC<Props> = ({ heading, paragraphs, highlightStartOffset }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [linePosition, setLinePosition] = useState({ top: 0, left: 0 })

  const HIGHLIGHT_START_OFFSET = highlightStartOffset || -0.3

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollStart = windowHeight * HIGHLIGHT_START_OFFSET
        const effectiveTop = sectionTop - scrollStart
        const visibleHeight = Math.min(windowHeight - effectiveTop, sectionHeight)
        const percentage = Math.min(Math.max(visibleHeight / sectionHeight, 0), 1)
        setScrollProgress(percentage)

        const textContainer = textRef.current
        const textRect = textContainer.getBoundingClientRect()
        const progressInText = percentage * textRect.height

        setLinePosition({
          top: progressInText,
          left: textRect.left,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [HIGHLIGHT_START_OFFSET])

  const paragraphTexts = paragraphs?.map((p: any) => p.text) || []
  const allText = paragraphTexts.join(' ')
  const totalChars = allText.length
  const charsToHighlight = Math.floor(scrollProgress * totalChars)

  let charCount = 0

  return (
    <section ref={sectionRef} className="relative bg-black py-12 sm:py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-10 sm:mb-12 md:mb-16 lg:mb-24 leading-tight"
          style={{ fontFamily: '"Instrument Serif", serif' }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        <div className="relative">
          {/* Glowing indicator light */}
          <div
            className="absolute -left-8 md:-left-12 lg:-left-16 pointer-events-none z-10 transition-all duration-200 ease-out"
            style={{ top: `${linePosition.top - 6}px` }}
          >
            <div className="relative">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full blur-sm"></div>
              <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full blur-md opacity-60"></div>
              <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full blur-lg opacity-30"></div>
            </div>
          </div>

          {/* Text content */}
          <div ref={textRef} className="space-y-4 sm:space-y-6 md:space-y-8 relative">
            {paragraphTexts.map((paragraph: string, paraIndex: number) => {
              const paraStart = charCount
              const paraEnd = paraStart + paragraph.length
              charCount = paraEnd + 1

              return (
                <p
                  key={paraIndex}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {paragraph.split('').map((char, charIndex) => {
                    const globalCharIndex = paraStart + charIndex
                    const isHighlighted = globalCharIndex < charsToHighlight

                    return (
                      <span
                        key={charIndex}
                        className="transition-colors duration-300 ease-out"
                        style={{
                          color: isHighlighted ? '#ffffff' : '#6b7280',
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValues
