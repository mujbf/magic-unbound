import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'

import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'

interface Project {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
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
        <Text
          variant="h4"
          className="mb-3 lg:mb-6 decoration-transparent decoration-2 underline underline-offset-4 transition-colors duration-300"
        >
          {project.title}
        </Text>
        <Text variant="b3" className="mb-4 line-clamp-2">
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

        <Button variant="link" icon={<ArrowRight size={18} />}>
          View Project
        </Button>
      </div>
    </div>
  )
}

export const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      image: 'images/jpg/about-carousel-1.jpg',
      title: "A digital reinvention for Sri Lanka's pioneer mutual fund manager",
      description:
        "How we helped one of Sri Lanka's pioneering fund managers get their digital mojo back",
      tags: ['WEB DESIGN & DEVELOPMENT', 'DIGITAL MARKETING', 'GROWTH'],
    },
    {
      id: 2,
      image: 'images/jpg/about-carousel-2.jpg',
      title: 'Repositioning Calcey for success',
      description:
        'How we rejuvenated the brand presence and marketing strategy of one of Sri Lanka\'s pioneering global software engineering service providers.',
      tags: ['BRAND IDENTITY', 'ART DIRECTION', 'VIDEO', 'GRAPHIC DESIGN'],
    },
    {
      id: 3,
      image: 'images/jpg/about-carousel-3.jpg',
      title: 'Mirissa\'s coolest space comes alive',
      description:
        'Brand identity and strategy for a novel hospitality concept aiming to challenge the hegemony of destinations such as Bali.',
      tags: ['BRAND IDENTITY', 'BRAND STRATEGY', 'GRAPHIC DESIGN'],
    },
  ]
  return (
    <div className="w-screen h-auto bg-gradient-to-b from-[#131314] to-shark-950">
      <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-20">
        {/* Heading */}
        <div className="mb-16 text-center w-full flex flex-col items-center justify-center">
          <Text variant="h1" className="italic mb-3">
            Featured <span className="not-italic">Work</span>
          </Text>
          {/* <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              NEW ✦
            </span> */}
          <Text variant="b2" className="mt-4">
            A showcase of our projects.
          </Text>
        </div>
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2D2E]/50 transform -translate-x-1/2"></div>
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
              {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border border-white/10 shadow-md"></div> */}
              {/* Empty space to offset layout */}
              <div className="hidden md:block md:w-1/2"></div>
              {/* Card */}
              <div
                className={`relative w-full md:w-3/5 bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white/[0.06] transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto md:pl-6' : 'md:ml-auto md:pr-6'
                }`}
              >
                <FeaturedWorkCard project={project} />
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="w-full flex justify-center p-4 md:p-8">
          <Button variant="primary" icon={<ArrowRight size={18} />}>
            View All
          </Button>
        </div>
      </section>
    </div>
  )
}

export default FeaturedWork
