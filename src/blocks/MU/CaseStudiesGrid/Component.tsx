'use client'

import { ArrowRight, Sparkles, Rocket, Zap, Star, Heart, Trophy } from 'lucide-react'
import type { CaseStudiesGridBlock as CaseStudiesGridBlockProps } from '@/payload-types'

type Props = CaseStudiesGridBlockProps

const iconMap = {
  sparkles: Sparkles,
  rocket: Rocket,
  zap: Zap,
  star: Star,
  heart: Heart,
  trophy: Trophy,
}

export const CaseStudiesGrid: React.FC<Props> = ({ heading, subheading, caseStudies }) => {
  return (
    <div className="w-full px-4 md:px-20 lg:px-40 py-12 lg:py-32">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2
          className="instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight mb-6"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p className="dm-sans text-base md:text-xl lg:text-2xl text-shark-300 max-w-3xl mx-auto">
          {subheading}
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies?.map((study: any, index: number) => {
          const IconComponent = iconMap[study.iconName as keyof typeof iconMap] || Sparkles
          return (
            <a
              key={index}
              href={study.link}
              className="group relative p-6 md:p-8 h-full flex flex-col bg-shark-900/50 backdrop-blur-sm border border-shark-700/50 rounded-xl overflow-hidden transition-all duration-500 hover:bg-shark-900/70 hover:border-[#00C3D0]/30 hover:shadow-xl hover:shadow-[#00C3D0]/10 hover:-translate-y-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00C3D0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 bg-shark-800/50 rounded-lg group-hover:bg-[#00C3D0]/10 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#00C3D0]" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6 flex-grow">
                <p className="instrument-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#00C3D0] mb-6 group-hover:scale-105 transition-transform duration-300">
                  {study.percentage}
                </p>
                <p className="dm-sans text-base md:text-lg text-shark-400 leading-relaxed">
                  {study.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-shark-700/50 group-hover:border-[#00C3D0]/30 transition-colors duration-300">
                <span className="inline-flex items-center gap-2 dm-sans text-sm text-[#00C3D0] font-medium group-hover:gap-3 transition-all duration-300">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudiesGrid
