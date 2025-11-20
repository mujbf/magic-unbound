import React, { useRef, useEffect, useState } from 'react'

const ScrollReadingText2 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [linePosition, setLinePosition] = useState({ top: 0, left: 0 })

  // ⚙️ SCROLL HIGHLIGHT ADJUSTMENT
  // Change this value to control when text starts highlighting:
  // Negative values start highlighting before section enters viewport
  // 0 = starts highlighting immediately when section enters viewport
  // 0.5 = starts when section is halfway into viewport
  // 1 = starts when section is fully in viewport
  const HIGHLIGHT_START_OFFSET = -0.3

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Adjusted calculation with offset control
        const scrollStart = windowHeight * HIGHLIGHT_START_OFFSET
        const effectiveTop = sectionTop - scrollStart
        const visibleHeight = Math.min(windowHeight - effectiveTop, sectionHeight)
        const percentage = Math.min(Math.max(visibleHeight / sectionHeight, 0), 1)
        setScrollProgress(percentage)

        // Calculate line position based on progress
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
  }, [])

  const paragraphs = [
    "Cookie cutter methods? Puh-leease. We won't be caught dead doing that.",
    'We are first and foremost, lovers of beautiful, functional, and memorable design which gets the job done.',
    "Second, we're perpetually excited for what the future holds.",
    "Third, we don't believe in things or follow rules just because 'that's how it's always been'.",
    "We're a fit for startups, scaling brands, and organizations that have big aspirations, stories to tell, and competitors to destroy.",
  ]

  const allText = paragraphs.join(' ')
  const totalChars = allText.length
  const charsToHighlight = Math.floor(scrollProgress * totalChars)

  let charCount = 0

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-shark-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-8xl mb-16 md:mb-20 lg:mb-24 leading-tight"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          <span className="text-gray-400 font-normal">Distinctly </span>
          <span className="text-white italic">human</span>
          <span className="text-gray-400 font-normal">.</span>
          <br />
          <span className="text-gray-400 font-normal">Decidedly </span>
          <span className="text-white italic">futuristic</span>
          <span className="text-gray-400 font-normal">.</span>
          <br />
          <span className="text-gray-400 font-normal">Definitely </span>
          <span className="text-white italic">better</span>
          <span className="text-gray-400 font-normal">.</span>
        </h2>

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
          <div ref={textRef} className="space-y-6 md:space-y-8 relative">
            {paragraphs.map((paragraph, paraIndex) => {
              const paraStart = charCount
              const paraEnd = paraStart + paragraph.length
              charCount = paraEnd + 1

              return (
                <p
                  key={paraIndex}
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed"
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

export default ScrollReadingText2
