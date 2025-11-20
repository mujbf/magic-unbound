'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

import '../branding/styles/client.css'
import { Button } from '../branding/components/Button'

import Coffee from './png/undraw_coffee.png'

import ScrollReadingText from './ScrollReadingText'
import Testimonials from './Testimonials'

import CaseStudiesGrid from './CaseStudiesGrid'
import { Sparkles, Rocket, Zap } from 'lucide-react'

import { Text } from '../branding/components/Text'

const testimonials = [
  {
    quote:
      'Magic Unbound, the architects of Calceys vibrant rebrand and energized digital presence, have not just transformed our image but elevated us to a coveted status. Their creative prowess increased our visibility and also played an important part in turning us into a sought-after employer.',
    author: 'Ishara Walpola',
    role: 'Director - People and Culture, Calcey',
    company: 'Calcey',
    avatar: '/images/png/iwcalcey.png',
    logo: '/images/client-logos/logo2.png', // optional
  },
  {
    quote:
      'Working with Magic Unbound was like watching our vision come to life in ways we never imagined. Their strategic approach to our brand overhaul didnt just give us a new look—it gave us a new voice. Since the rebrand, weve seen a 40% increase in client inquiries and our team morale has never been higher.',
    author: 'Marcus Chen',
    role: 'Founder & CEO',
    company: 'Velocity Labs',
    avatar: '/images/png/marcus-velocity.png',
    logo: '/images/client-logos/logo1.png',
  },
  {
    quote:
      'The team at Magic Unbound brought an incredible blend of creativity and technical expertise to our AI automation project. They didnt just build us tools—they reimagined our entire workflow. Were now operating at twice the speed with half the friction, and our clients have noticed the difference immediately.',
    author: 'Priya Deshmukh',
    role: 'Chief Operations Officer',
    company: 'Nexus Innovations',
    avatar: '/images/png/priya-nexus.png',
    logo: '/images/client-logos/logo3.png',
  },
  {
    quote:
      'Magic Unbound took our scattered brand identity and transformed it into something cohesive, memorable, and authentically us. Their execution team handled everything from social content to our pitch decks with remarkable attention to detail. We finally feel like we have a brand that matches the quality of our work.',
    author: 'James Okonkwo',
    role: 'Creative Director',
    company: 'Studio Meridian',
    avatar: '/images/png/james-meridian.png',
    logo: '/images/client-logos/logo4.png',
  },
  {
    quote:
      'What sets Magic Unbound apart is their ability to listen deeply and translate abstract ideas into tangible results. They helped us launch a custom AI deployment that has become the backbone of our customer service operations. Our response times have improved by 60% and customer satisfaction scores are at an all-time high.',
    author: 'Sofia Ramirez',
    role: 'VP of Product',
    company: 'Horizon Tech',
    avatar: '/images/png/sofia-horizon.png',
    logo: '/images/client-logos/logo5.png',
  },
]

const caseStudies = [
  {
    percentage: 'Ideas',
    //title: 'Enhancement in Customer Engagement',
    description: 'Brand strategy, brand design, art direction',
    icon: <Sparkles className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/calcey',
  },
  {
    percentage: 'Execution',
    //title: 'Increase in Workflow Efficiency',
    description:
      'Digital graphic design, Print design, Presentation design,Copywriting,Social content,',
    icon: <Rocket className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/automation',
  },
  {
    percentage: 'Experiments',
    // title: 'Faster Content Production',
    description:
      'Workflow and process transformation using custom AI deployments, Mini-apps for specialized enterprise teams, Headless content management systems',
    icon: <Zap className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/content',
  },
]
const AboutPage = () => {
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

  // Array of images - you can add as many as needed
  const images = [
    '/images/jpg/about-carousel-image-1.jpg',
    '/images/jpg/about-carousel-image-4.jpg',
    '/images/jpg/about-carousel-image-2.jpg',
    '/images/jpg/about-carousel-image-5.jpg',
    '/images/jpg/about-carousel-image-3.jpg',
    '/images/jpg/about-carousel-image-6.jpg',
  ]

  // Duplicate images for infinite loop effect
  const duplicatedImages = [...images, ...images, ...images]

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
      {/* --- Hero --- */}
      <div className="relative w-screen h-[600px] overflow-hidden bg-shark-950">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/about1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="relative w-full h-full px-4 md:px-20 lg:px-40 z-10 flex flex-col items-center justify-center gap-12">
          <h1 className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-center -mt-40">
            <span className="italic">Different&nbsp;</span> in all the right ways.
          </h1>

          <div className="flex-shrink-0 relative z-20">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Infinite Slider */}
      <div
        className="relative w-full overflow-hidden mt-[-160px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        style={{
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
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
            >
              <img
                src={src}
                alt={`Gallery image ${(index % images.length) + 1}`}
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

      {/* Text Content */}
      <div className="w-full h-full px-4 md:px-20 lg:px-40 py-12 lg:py-32 z-10 flex flex-col justify-center gap-12 lg:gap-20">
        <p className="dm-sans text-4xl md:text-6xl font-normal tracking-tight w-full lg:max-w-7xl">
          There are agencies, there are web developers, there are automation consultants{' '}
          <span className="text-[#00C3D0]">and then there’s us.</span>
        </p>
        <p className="dm-sans text-base md:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300">
          A team which you cannot really put into a box, but one which you’d absolutely love having
          on speed dial.
          <br /> * If you’re Gen-Z or younger, replace ‘speed dial’ with ‘Close Friends’ on
          Instagram. <br /> <br /> At Magic Unbound, our services are ordered into three verticals,
          each designed to solve a set of pain points we are really good at, well,{' '}
          <span className="underline">solving.</span>
        </p>

        {/* Card  - Ideas */}
        <div className="flex gap-40">
          <div className="w-5/8 flex flex-col">
            <p className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-shark-900">
              01
            </p>
            <div className="flex">
              <h3 className="dm-sans text-4xl md:text-6xl font-normal tracking-tight text-shark-300">
                The first is <span className="text-shark-50">Ideas</span>
              </h3>
              <img
                src="/images/png/undraw_coffee.png"
                alt=""
                className="w-20 h-auto -mt-16 ml-4 object-contain"
              />
            </div>
            <p className="dm-sans text-base md:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300  mt-20">
              for when you are in need of overarching blueprints for your brand such as a brand
              strategy, a brand design, or a look and feel which is truly yours.
            </p>
          </div>
          <div className="w-3/8">
            <img src="/images/jpg/about-carousel-image-5.jpg" alt="" />
          </div>
        </div>

        {/* Card  - Execution */}
        <div className="flex gap-40">
          <div className="w-3/8">
            <img src="/images/jpg/about-carousel-image-6.jpg" alt="" />
          </div>
          <div className="w-5/8 flex flex-col gap-4">
            <p className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-shark-900">
              02
            </p>
            <div className="flex">
              <h3 className="dm-sans text-4xl md:text-6xl font-normal tracking-tight text-shark-300">
                The second is <span className="text-shark-50">Execution</span>
              </h3>
              <img
                src="/images/png/undraw_camera.png"
                alt=""
                className="w-20 h-auto -mt-16 ml-4 object-contain"
              />
            </div>
            <p className="dm-sans text-base md:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300 mt-20">
              for when you really need someone awesome to work with to design graphics, print
              advertisements, whip up a slick deck, write copy which stirs heartstrings, or run your
              social media content plan.
            </p>
          </div>
        </div>

        {/* Card  - Experiments */}
        <div className="flex gap-40">
          <div className="w-5/8 flex flex-col gap-4">
            <p className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-shark-900">
              03
            </p>
            <div className="flex">
              <h3 className="dm-sans text-4xl md:text-6xl font-normal tracking-tight text-shark-300">
                The third is <span className="text-shark-50">Experiments</span>
              </h3>
              <img
                src="/images/png/undraw_rocket.png"
                alt=""
                className="w-20 h-auto -mt-16 ml-4 object-contain"
              />
            </div>
            <p className="dm-sans text-base md:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300 mt-20">
              for when you want to drive up productivity across your teams or organization and get a
              leg up on the competition by reinventing your processes for 2026 with the power of AI.
              Think custom AI deployments using fine-tuned closed source or open source LLMs,
              enterprise-grade mini apps for specialized teams so they can get things done faster,
              and headless content management systems to free you from the vice grip of expensive
              CMS’ which are a real pain to work with.
            </p>
          </div>
          <div className="w-3/8">
            <img src="/images/jpg/about-carousel-image-4.jpg" alt="" />
          </div>
        </div>
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

      <ScrollReadingText />

      <section className="w-full py-16">
        <div className="container mx-auto grid grid-cols-1 gap-10 items-center">
          {/* Video */}
          <div className="w-full">
            <video
              src="/videos/hero2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            ></video>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={testimonials}
        backgroundVideo="/videos/about2.mp4"
        backgroundColor="bg-shark-950"
      />

      <CaseStudiesGrid caseStudies={caseStudies} />

      {/* Call to Action Section */}
      <section className="relative max-w-8xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 md:p-16 overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-center italic">
              Let&apos;s Talk!
            </h1>
            <p
              color=""
              className="dm-sans text-base md:text-2xl font-normal tracking-tight text-gray-300 mt-20 mb-20 text-center"
            >
              Ready to create something extraordinary? Let&apos;s discuss how we can help transform
              your vision into reality with innovative design and cutting-edge technology.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
