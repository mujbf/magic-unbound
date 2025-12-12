'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ImageCarouselBlock as ImageCarouselBlockProps } from '@/payload-types'

type Props = ImageCarouselBlockProps

export const ImageCarousel: React.FC<Props> = ({ images, topMargin }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorSide, setCursorSide] = useState<'left' | 'right'>('left')
  const [isMounted, setIsMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Convert images to simple array with URLs
  const imageUrls = images?.map((item: any) => {
    const imageUrl = typeof item.image === 'string' ? item.image : item.image?.url || ''
    return {
      url: imageUrl,
      alt: item.alt || 'Gallery image',
    }
  }) || []

  // Duplicate images for infinite loop effect
  const duplicatedImages = [...imageUrls, ...imageUrls, ...imageUrls]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !isMounted) return

    const scroll = () => {
      if (isHovering && typeof window !== 'undefined' && window.innerWidth >= 1024) {
        const scrollSpeed = cursorSide === 'right' ? 1 : -1

        setScrollPosition((prev) => {
          const newPosition = prev + scrollSpeed
          const maxScroll = container.scrollWidth / 3

          // Reset position for infinite loop
          if (newPosition >= maxScroll * 2) {
            container.scrollLeft = maxScroll
            return maxScroll
          } else if (newPosition <= 0) {
            container.scrollLeft = maxScroll
            return maxScroll
          }

          container.scrollLeft = newPosition
          return newPosition
        })
      }

      animationFrameRef.current = requestAnimationFrame(scroll)
    }

    animationFrameRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isHovering, cursorSide, isMounted])

  // Initialize scroll position to middle set
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const initialPosition = container.scrollWidth / 3
      container.scrollLeft = initialPosition
      setScrollPosition(initialPosition)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const containerRect = e.currentTarget.getBoundingClientRect()
      const mouseX = e.clientX - containerRect.left
      const containerWidth = containerRect.width

      setCursorSide(mouseX > containerWidth / 2 ? 'right' : 'left')
    }
  }

  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        style={{
          marginTop: topMargin || '-160px',
          cursor:
            isMounted && typeof window !== 'undefined' && window.innerWidth >= 1024 && isHovering
              ? cursorSide === 'right'
                ? 'e-resize'
                : 'w-resize'
              : 'default',
        }}
      >
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 lg:gap-24 overflow-x-auto lg:overflow-hidden scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Custom cursor indicators for desktop */}
        {isMounted && isHovering && typeof window !== 'undefined' && window.innerWidth >= 1024 && (
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                cursorSide === 'left' ? 'opacity-100 left-8' : 'opacity-0 left-8'
              }`}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                <ChevronLeft size={32} className="text-white" />
              </div>
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                cursorSide === 'right' ? 'opacity-100 right-8' : 'opacity-0 right-8'
              }`}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                <ChevronRight size={32} className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}

export default ImageCarousel
