'use client'

import React, { useRef, useEffect, useState } from 'react'
import { ArrowRight, Send, Sparkles, Zap, Rocket } from 'lucide-react'
import { SplineScene } from '../components/spline/Hero'
import { SplineScene2 } from '../components/spline/Spline2'
import ScrollReadingText2 from './ScrollReadingText2'
import Link from 'next/link'

// Type definitions
interface Project {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
}

interface Logo {
  src: string
  alt: string
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

interface Stat {
  value: string
  label: string
}

// Text Component with Branding Styles
type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'body4'
  children: React.ReactNode
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  className?: string
  style?: React.CSSProperties
}

const Text: React.FC<TextProps> = ({
  variant,
  children,
  color = 'text-gray-900',
  align = 'left',
  className = '',
  style: customStyle,
}) => {
  const fontStyles = {
    h1: { fontFamily: '"Instrument Serif", sans-serif' },
    h2: { fontFamily: '"Instrument Serif", sans-serif' },
    h3: { fontFamily: '"Instrument Serif", sans-serif' },
    h4: { fontFamily: '"DM Sans", sans-serif' },
    body1: { fontFamily: '"DM Sans", sans-serif' },
    body2: { fontFamily: '"DM Sans", sans-serif' },
    body3: { fontFamily: '"DM Sans", sans-serif' },
    body4: { fontFamily: '"DM Sans", sans-serif' },
  }

  const variantStyles = {
    h1: 'text-6xl md:text-8xl font-medium tracking-tight',
    h2: 'text-4xl md:text-6xl font-normal tracking-tight',
    h3: 'text-3xl md:text-5xl font-normal tracking-tight',
    h4: 'text-lg md:text-2xl font-normal tracking-tight',
    body1: 'text-base md:text-xl font-medium tracking-tight',
    body2: 'text-base md:text-xl font-normal tracking-tight',
    body3: 'text-sm md:text-lg font-normal tracking-tight',
    body4: 'text-xs md:text-base font-normal tracking-tight',
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  }

  const combinedClasses = `${variantStyles[variant]} ${alignmentClasses[align]} ${color} ${className}`
  const Element = variant.startsWith('h') ? variant : 'p'

  return React.createElement(
    Element,
    { className: combinedClasses, style: { ...fontStyles[variant], ...customStyle } },
    children,
  )
}

// Button Component
type ButtonProps = {
  variant: 'button1' | 'button2' | 'button3'
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  color?: string
  bgColor?: string
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  color = 'text-gray-900',
  bgColor = 'bg-white/10',
  className = '',
  disabled = false,
}) => {
  const baseStyles =
    'flex items-center justify-center font-medium transition-all duration-300 ease-out relative backdrop-blur-md'

  const variantStyles = {
    button1: 'py-2 gap-2 group',
    button2: 'py-2 px-4 gap-2 font-normal',
    button3:
      'py-3 px-6 gap-2 border border-white/20 hover:border-white/40 hover:bg-white/20 rounded-lg',
  }

  const renderIcon = () => {
    switch (variant) {
      case 'button1':
        return (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )
      case 'button2':
      case 'button3':
        return <Send size={20} className="transition-transform duration-300" />
      default:
        return null
    }
  }

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${bgColor} ${color} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ fontFamily: '"Instrument Sans", sans-serif' }}
    >
      {children}
      {renderIcon()}
    </button>
  )
}

// Featured Work Card Component
const FeaturedWorkCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <Text variant="h4" color="text-white" className="mb-3">
          {project.title}
        </Text>
        <Text variant="body3" color="text-gray-300" className="mb-4 line-clamp-2">
          {project.description}
        </Text>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              {tag}
            </span>
          ))}
        </div>

        <Button variant="button2" bgColor="bg-transparent" color="text-white">
          <Text variant="body4" color="text-white">
            View Project
          </Text>
        </Button>
      </div>
    </div>
  )
}

// Service Card Component
const ServiceCard = ({
  icon,
  title,
  services,
}: {
  icon: React.ReactNode
  title: string
  services: string[]
}) => {
  return (
    <div className="relative ">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>

      <div className="relative z-10 ">
        <div className="mb-6 text-emerald-400">{icon}</div>
        <Text variant="h3" color="text-white" className="mb-6">
          {title}
        </Text>
        <div className="space-y-3">
          {services.map((service, index) => (
            <Text
              key={index}
              variant="body3"
              color="text-gray-300"
              className="flex items-start gap-2"
            >
              <span className="text-white-400 mt-1">→</span>
              {service}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

// Stats Card Component
const StatsCard = ({ stat }: { stat: Stat }) => {
  return (
    <div className="relative">
      {/* Subtle hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-200/0 to-cyan-200/0 group-hover:from-emerald-100/60 group-hover:to-cyan-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Stat Value */}
      <Text
        variant="h2"
        color="text-neutral-900"
        className="mb-2 relative z-10 font-semibold tracking-tight"
      >
        {stat.value}
      </Text>

      {/* Stat Label */}
      <Text variant="body3" color="text-neutral-600" className="relative z-10">
        {stat.label}
      </Text>
    </div>
  )
}

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 max-w-3xl">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-gray-100">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Text variant="body4" color="text-gray-500" className="mb-2">
          {post.date}
        </Text>

        <Text
          variant="h4"
          color="text-neutral-900"
          className="mb-3 group-hover:text-emerald-600 transition-colors duration-300"
        >
          {post.title}
        </Text>

        <Text variant="body3" color="text-neutral-600" className="mb-5 line-clamp-2">
          {post.excerpt}
        </Text>

        <Button
          variant="button1"
          bgColor="bg-transparent"
          color="text-emerald-600 hover:text-emerald-700"
          className="flex items-center gap-2 font-medium transition-colors duration-300"
        >
          <Text variant="body4" color="text-emerald-600">
            Read More
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

// Logo Slider Component
const LogoSlider = ({ logos }: { logos: Logo[] }) => {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-[#202020]/60 to-[#202020]/80 backdrop-blur-sm border-y border-white/10">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo: Logo, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 md:mx-10 grayscale hover:grayscale-0 transition-all duration-500 opacity-85 hover:opacity-100"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 md:h-12 w-auto" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

// Scroll Reading Text Component
// const ScrollReadingText = () => {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return

//       const section = sectionRef.current
//       const rect = section.getBoundingClientRect()
//       const windowHeight = window.innerHeight

//       const sectionTop = rect.top
//       const sectionHeight = rect.height

//       if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
//         const scrolled = windowHeight - sectionTop
//         const total = windowHeight + sectionHeight
//         const percentage = Math.min(Math.max(scrolled / total, 0), 1)
//         setProgress(percentage)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     handleScroll()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const paragraphs = [
//     {
//       text: "Cookie cutter methods? Puh-leease. We won't be caught dead doing that.",
//       highlight: true,
//     },
//     {
//       text: 'We are first and foremost, lovers of beautiful, functional, and memorable design which gets the job done.',
//       highlight: true,
//     },
//     {
//       text: "Second, we're perpetually excited ",
//       highlight: true,
//       grayed: 'for what the future holds.',
//     },
//     {
//       text: "Third, we don't believe in things or follow rules just because 'that's how it's always been'.",
//       highlight: false,
//       grayed: true,
//     },
//     {
//       text: "We're a fit for startups, scaling brands, and organizations that have big aspirations, stories to tell, and competitors to destroy.",
//       highlight: false,
//       grayed: true,
//     },
//   ]

//   const getTextOpacity = (index: number) => {
//     const totalParagraphs = paragraphs.length
//     const progressPerParagraph = 1 / totalParagraphs
//     const paragraphProgress = (progress - index * progressPerParagraph) / progressPerParagraph

//     if (paragraphProgress > 0.7) return 1
//     if (paragraphProgress > 0) return 0.3 + paragraphProgress * 0.7
//     return 0.3
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 md:py-32 px-4 md:px-6 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl"></div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         <Text variant="h2" color="text-gray-200" className="mb-8 md:mb-12 leading-tight">
//           Distinctly human. Decidedly futuristic.
//           <br />
//           Definitely <span className="text-white italic">better</span>.
//         </Text>

//         <div className="space-y-6 md:space-y-8">
//           {paragraphs.map((para, index) => (
//             <Text
//               key={index}
//               variant="body2"
//               className="leading-relaxed transition-all duration-700"
//               style={{
//                 opacity: getTextOpacity(index),
//                 color: getTextOpacity(index) > 0.7 ? '#ffffff' : '#9ca3af',
//               }}
//             >
//               {para.text}
//               {para.grayed && typeof para.grayed === 'string' && (
//                 <span className="text-gray-500">{para.grayed}</span>
//               )}
//             </Text>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// Spline Scene Wrapper
const SplineSceneWrapper = () => {
  return (
    <div className="relative h-screen w-screen" style={{ pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto' }}>
        <SplineScene />
      </div>
    </div>
  )
}

const SplineSceneWrapper2 = () => {
  return (
    <div className="relative h-screen w-screen" style={{ pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto' }}>
        <SplineScene2 />
      </div>
    </div>
  )
}

// Main Hero Component
const Hero = () => {
  const logos = [
    { src: '/images/client-logos/logo1.png', alt: 'Company 1' },
    { src: '/images/client-logos/logo2.png', alt: 'Company 2' },
    { src: '/images/client-logos/logo3.png', alt: 'Company 3' },
    { src: '/images/client-logos/logo4.png', alt: 'Company 4' },
    { src: '/images/client-logos/logo5.png', alt: 'Company 5' },
  ]

  const featuredProjects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
      title: "A digital reinvention for Sri Lanka's pioneer mutual fund manager",
      description:
        "How we helped one of Sri Lanka's pioneering fund managers get their digital mojo back",
      tags: ['WEB DESIGN & DEVELOPMENT', 'DIGITAL MARKETING & GROWTH'],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
      title: 'Building the future of fintech with seamless user experiences',
      description:
        'Creating an intuitive platform that revolutionizes how people interact with financial services',
      tags: ['UX/UI DESIGN', 'BRAND STRATEGY'],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
      title: 'Transforming healthcare through innovative digital solutions',
      description:
        'Designing patient-centric experiences that improve healthcare delivery and outcomes',
      tags: ['DIGITAL TRANSFORMATION', 'USER RESEARCH'],
    },
  ]

  const stats: Stat[] = [
    { value: '500+', label: 'Leads Generated' },
    { value: '5x', label: 'Increase in Traffic' },
    { value: '50%', label: 'Reduction in Bounce Rate' },
    { value: '4x', label: 'Increase in Engagement' },
    { value: '10x', label: 'Growth in New Users' },
    { value: '70%', label: 'Improvement in SearchRank' },
  ]

  const services = [
    {
      icon: <Sparkles size={72} />,
      title: 'Ideas',
      services: ['Brand strategy', 'Brand design', 'Art direction'],
    },
    {
      icon: <Zap size={72} className="text-[#FB3290]/20" />,
      title: 'Execution',
      services: [
        'Digital graphic design',
        'Print design',
        'Presentation design',
        'Copywriting',
        'Social content',
      ],
    },
    {
      icon: <Rocket size={72} className="text-[#EB6D00]/20" />,
      title: 'Experiments',
      services: [
        'Workflow transformation using custom AI deployments',
        'Mini-apps for specialized enterprise teams',
        'Headless content management systems',
      ],
    },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Design Systems in Enterprise',
      excerpt:
        'Exploring how modern design systems are revolutionizing the way large organizations build and maintain digital products.',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=500&fit=crop',
      date: 'Nov 2, 2025',
      category: 'Design',
    },
    {
      id: 2,
      title: 'AI-Powered Workflows: A New Paradigm',
      excerpt:
        'How artificial intelligence is transforming creative workflows and enabling teams to work smarter, not harder.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      date: 'Oct 28, 2025',
      category: 'Technology',
    },
    {
      id: 3,
      title: 'Building Brands That Resonate',
      excerpt:
        'The art and science of creating brand identities that connect with audiences on a deeper emotional level.',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=500&fit=crop',
      date: 'Oct 25, 2025',
      category: 'Branding',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 min-h-screen mt-[-136px]">
      {/* Spline Hero Section */}
      {/* <SplineSceneWrapper /> */}

      {/* Video */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional: darken video for better text visibility) */}
        <div className="absolute inset-0 bg-[#00C3D0]/50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Text variant="h1" color="text-white" className="mb-6 text-center max-w-6xl">
            The conscious, thoughtful,{' '}
            <span className="italic">design, storytelling, and ‘lab partner’</span> you’ve been
            looking for.
          </Text>
          <Text variant="body1" color="text-white" className="mb-6 text-center max-w-5xl">
            Win new customers, break into new markets (or conquer existing ones), and make serious
            productivity gains among your teams, all with our help.
          </Text>

          {/* but 1 */}
          <div className="hidden lg:block flex-shrink-0 relative z-20">
            <Link href="/contact">
              <button
                className="relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group overflow-hidden"
                style={{ borderRadius: '50px' }}
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight
                  size={14}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-white"></div>
              </button>
            </Link>
          </div>

          {/* burt 2 */}
        </div>
      </div>

      {/* Logo Slider */}
      <LogoSlider logos={logos} />

      {/* Featured Work Section */}
      <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-20">
        {/* Heading */}
        <div className="mb-16 text-center w-full flex flex-col items-center justify-center">
          <Text variant="h1" color="text-white" className="italic mb-3">
            Featured <span className="not-italic">Work</span>
          </Text>
          {/* <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            NEW ✦
          </span> */}
          <Text variant="body2" color="text-gray-400" className="mt-4">
            A showcase of our projects.
          </Text>
        </div>

        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>

        {/* Timeline Cards */}
        <div className="space-y-16 relative">
          {featuredProjects.map((project: Project, index: number) => (
            <div
              key={project.id}
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
                className={`relative w-full md:w-3/5 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white/[0.06] transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto md:pl-12' : 'md:ml-auto md:pr-12'
                }`}
              >
                <FeaturedWorkCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <div className="hidden lg:block flex-shrink-0 relative z-20">
            <Link href="/contact">
              <button
                className="relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group overflow-hidden"
                style={{ borderRadius: '50px' }}
              >
                <span className="relative z-10">View All</span>
                <ArrowRight
                  size={14}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-white"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll Reading Text Section */}
      <ScrollReadingText2 />

      {/* How We Can Help Section */}
      <section className="relative max-w-7xl mx-auto px-0 md:px-0 py-20 md:py-28 bg-black text-white">
        {/* Header */}
        <div className="mb-14 text-center px-4 md:px-6">
          <Text variant="h1" color="text-white" className="mb-4 tracking-tight">
            How We Can Help
          </Text>
          <Text variant="body2" color="text-gray-400" className="">
            From ideation to execution, we transform your vision into reality with our comprehensive
            suite of services.
          </Text>
        </div>

        {/* Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, index) => {
            // Assign different hover glow colors per card
            const hoverGradients = [
              'from-emerald-400/10 to-emerald-500/5',
              'from-purple-400/10 to-pink-500/5',
              'from-orange-400/10 to-orange-500/5',
            ]
            const gradient = hoverGradients[index % hoverGradients.length]

            return (
              <div
                key={index}
                className="group relative border-b border-r border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 flex flex-col justify-start items-start p-8 md:p-10 min-h-[280px]"
              >
                {/* Subtle dynamic hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient} pointer-events-none`}
                />

                {/* Content */}
                <ServiceCard {...service} />
              </div>
            )
          })}
        </div>
      </section>

      {/* Unified Light Section */}
      <section className="relative w-full bg-gradient-to-b from-white to-[#E6EFF4] overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
        </div>

        {/* Stats Section */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-center z-10">
          <div className="mb-14">
            <Text variant="h1" color="text-neutral-900" className="mb-4 tracking-tight">
              Real impact, <span className="italic text-emerald-600">not puff pieces</span>.
            </Text>
            <Text variant="body2" color="text-neutral-600">
              Numbers that matter from our recent projects.
            </Text>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 p-6 md:p-8 flex flex-col justify-center items-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-200/0 via-transparent to-cyan-200/0 group-hover:from-emerald-100/60 group-hover:to-cyan-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <StatsCard stat={stat} />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Text variant="body3" color="text-neutral-500">
              Plus: 1 award and feedback from TopWeb / BestWeb ✦
            </Text>
          </div>
        </div>

        {/* Blog Section */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-neutral-900 z-10">
          <div className="mb-14 md:mb-20 text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <Text variant="h1" color="text-neutral-900">
                Someone is typing<span className="text-emerald-500 animate-pulse">...</span>
              </Text>
            </div>
            <Text
              variant="body2"
              color="text-neutral-600"
              className="max-w-2xl mx-auto text-center"
            >
              Fleeting thoughts, moments of joy, and letters of rumination from a seriously
              interesting team of creatives.
            </Text>
          </div>

          {/* Blog Slider */}
          <div className="w-screen">
            <div
              className="flex gap-6 animate-scroll group-hover:pause"
              style={{
                animation: 'scroll 35s linear infinite',
              }}
            >
              {[...blogPosts, ...blogPosts].map((post, index) => (
                <div
                  key={index}
                  className="min-w-[300px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0"
                >
                  <div className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
                    <BlogCard post={post} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-16 mb-16">
            <Button
              variant="button3"
              bgColor="bg-emerald-100 hover:bg-emerald-200"
              color="text-emerald-800"
              className="transition-all duration-300 rounded-full px-6 py-3"
            >
              <Text variant="body3" color="text-emerald-800">
                View All Articles
              </Text>
            </Button>
          </div>
        </div>
      </section>

      <SplineSceneWrapper2 />

      {/* Process Section */}
      {/* <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Text variant="h2" color="text-white" className="mb-6">
              Let's do it your way,
              <br />
              <span className="text-emerald-400 italic">with our magic touch</span>.
            </Text>
            <Text variant="body2" color="text-gray-300" className="mb-6">
              Every brand has its own unique challenges, which means every project deserves its own
              unique approach. We are genuinely excited by constraints, and are endlessly fascinated
              by the impact of cultures, traditions, and societal norms on the world of business.
            </Text>
            <Text variant="body2" color="text-gray-300" className="mb-6">
              We make a deliberate effort to understand and navigate these complexities with finesse
              and empathy.
            </Text>
            <Text variant="body1" color="text-white" className="mb-8">
              That is why we prioritize flexibility in our collaborations to meet our clients where
              they are, and take them where they need to go.
            </Text>
            <Button variant="button3" bgColor="bg-white/10" color="text-white">
              <Text variant="body3" color="text-white">
                Learn About Our Process
              </Text>
            </Button>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center border border-emerald-400/50">
                    <span className="text-emerald-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <Text variant="h4" color="text-white" className="mb-2">
                      Discovery
                    </Text>
                    <Text variant="body3" color="text-gray-400">
                      We dive deep into your challenges and aspirations
                    </Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center border border-purple-400/50">
                    <span className="text-purple-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <Text variant="h4" color="text-white" className="mb-2">
                      Strategy
                    </Text>
                    <Text variant="body3" color="text-gray-400">
                      We craft a unique approach tailored to your needs
                    </Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/50">
                    <span className="text-cyan-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <Text variant="h4" color="text-white" className="mb-2">
                      Execution
                    </Text>
                    <Text variant="body3" color="text-gray-400">
                      We bring the vision to life with precision and creativity
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 md:p-16 overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Text variant="h1" color="text-white" className="mb-6" align="center">
              Let&apos;s Talk!
            </Text>
            <Text variant="body2" color="text-gray-300" className="mb-10" align="center">
              Ready to create something extraordinary? Let&apos;s discuss how we can help transform
              your vision into reality with innovative design and cutting-edge technology.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="button3" bgColor="bg-white/10" color="text-white">
                <Text variant="body3" color="text-white">
                  Start a Project
                </Text>
              </Button>
              <Button variant="button1" bgColor="bg-transparent" color="text-white">
                <Text variant="body3" color="text-white">
                  Schedule a Call
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img src="/logo-dark.png" alt="" className="mb-8 w-[80%]" />
              <Text variant="body3" color="text-gray-400" className="mb-6">
                The conscious, thoughtful, design, storytelling, and &apos;lab partner&apos;
                you&apos;ve been looking for.
              </Text>
            </div>

            {/* Services Column */}
            <div>
              <Text variant="body1" color="text-white" className="mb-4">
                Services
              </Text>
              <div className="space-y-2">
                {[
                  'Brand Strategy',
                  'Digital Design',
                  'Web Development',
                  'AI Solutions',
                  'Content Creation',
                ].map((item) => (
                  <Text
                    key={item}
                    variant="body3"
                    color="text-gray-400"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Text>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div>
              <Text variant="body1" color="text-white" className="mb-4">
                Company
              </Text>
              <div className="space-y-2">
                {['About', 'Work', 'Process', 'Blog', 'Careers'].map((item) => (
                  <Text
                    key={item}
                    variant="body3"
                    color="text-gray-400"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Text>
                ))}
              </div>
            </div>

            {/* Connect Column */}
            <div>
              <Text variant="body1" color="text-white" className="mb-4">
                Connect
              </Text>
              <div className="space-y-2">
                {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble', 'hello@magicunbound.com'].map(
                  (item) => (
                    <Text
                      key={item}
                      variant="body3"
                      color="text-gray-400"
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </Text>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <Text variant="body4" color="text-gray-500">
              © 2025 Magic Unbound. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <Text
                variant="body4"
                color="text-gray-400"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </Text>
              <Text
                variant="body4"
                color="text-gray-400"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Hero
