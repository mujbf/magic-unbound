'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TestimonialsCarouselBlock as TestimonialsCarouselBlockProps } from '@/payload-types'

type Props = TestimonialsCarouselBlockProps

export const TestimonialsCarousel: React.FC<Props> = ({
  testimonials,
  backgroundVideo,
  backgroundColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonialArray = testimonials || []

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialArray.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialArray.length) % testimonialArray.length)
  }

  const currentTestimonial = testimonialArray[currentIndex]

  if (!currentTestimonial) return null

  return (
    <section
      className={`relative isolate overflow-hidden ${backgroundColor || 'bg-shark-950'} px-6 py-16 sm:py-24 lg:py-32 lg:px-8 min-h-[600px] lg:min-h-[800px]`}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 -z-20 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-shark-950/70"></div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-shark-950/40 via-transparent to-shark-950/60"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,rgba(0,195,208,0.08),transparent)]"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-shark-900/30 backdrop-blur-sm shadow-xl ring-1 ring-[#00C3D0]/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative z-10">
        {/* Logo */}
        {currentTestimonial.logo && (
          <img
            src={currentTestimonial.logo}
            alt={`${currentTestimonial.company} logo`}
            className="mx-auto h-12 mb-10"
          />
        )}

        <figure className="mt-10">
          {/* Quote */}
          <blockquote className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-shark-50 leading-8 sm:leading-9">
            <p className="dm-sans">&quot;{currentTestimonial.quote}&quot;</p>
          </blockquote>

          {/* Author Info */}
          <figcaption className="mt-10">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="mx-auto size-14 rounded-full object-cover ring-2 ring-[#00C3D0]/20"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-shark-50">{currentTestimonial.author}</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-shark-400"
              >
                <circle r="1" cx="1" cy="1" />
              </svg>
              <div className="text-shark-400">
                {currentTestimonial.role} at {currentTestimonial.company}
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Navigation */}
        {testimonialArray.length > 1 && (
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={previousTestimonial}
              className="group p-3 rounded-full bg-shark-800/30 backdrop-blur-md hover:bg-shark-700/40 transition-all duration-300 hover:scale-110 border border-shark-600/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-shark-300 group-hover:text-[#00C3D0] transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonialArray.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#00C3D0] w-8' : 'bg-shark-600 hover:bg-shark-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group p-3 rounded-full bg-shark-800/30 backdrop-blur-md hover:bg-shark-700/40 transition-all duration-300 hover:scale-110 border border-shark-600/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-shark-300 group-hover:text-[#00C3D0] transition-colors" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsCarousel
