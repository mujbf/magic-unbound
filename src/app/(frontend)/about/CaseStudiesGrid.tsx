'use client'

import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  percentage: string
  // title: string
  description: string
  icon: React.ReactNode
  link: string
}

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[]
}

const CaseStudiesGrid = ({ caseStudies }: CaseStudiesGridProps) => {
  return (
    <div className="w-full px-4 md:px-20 lg:px-40 py-12 lg:py-32">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight mb-6">
          <span className="italic">Results</span> that speak for themselves
        </h2>
        <p className="typeface-04 text-shark-300 max-w-3xl mx-auto">
          From brand transformations to AI-powered workflows, our work creates measurable impact for
          businesses ready to level up.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies.map((study, index) => (
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
                {study.icon}
              </div>
            </div>

            {/* Content */}
            <div className="mb-6 flex-grow">
              <p className="instrument-serif text-6xl md:text-8xl font-medium tracking-tight text-5xl lg:text-6xl text-[#00C3D0] mb-6 group-hover:scale-105 transition-transform duration-300">
                {study.percentage}
              </p>
              {/* <h3 className="typeface-03 text-xl text-shark-50 mb-4">{study.title}</h3> */}
              <p className="typeface-04 text-shark-400 leading-relaxed">{study.description}</p>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6 border-t border-shark-700/50 group-hover:border-[#00C3D0]/30 transition-colors duration-300">
              <span className="inline-flex items-center gap-2 typeface-04 text-sm text-[#00C3D0] font-medium group-hover:gap-3 transition-all duration-300">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesGrid

// Example usage with your brand data:
/*
import CaseStudiesGrid from './CaseStudiesGrid'
import { Sparkles, Rocket, Zap } from 'lucide-react'

const caseStudies = [
  {
    percentage: '43%',
    title: 'Enhancement in Customer Engagement',
    description: 'Transforming Calcey\'s brand identity from the ground up, we created a vibrant digital presence that turned them into a sought-after employer and industry leader.',
    icon: <Sparkles className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/calcey'
  },
  {
    percentage: '200%',
    title: 'Increase in Workflow Efficiency',
    description: 'Built custom AI automation tools that revolutionized internal processes, cutting manual work in half while doubling output quality for a tech startup.',
    icon: <Rocket className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/automation'
  },
  {
    percentage: '60%',
    title: 'Faster Content Production',
    description: 'Designed and implemented a headless CMS with AI-powered content workflows, enabling a media company to scale their output without adding headcount.',
    icon: <Zap className="w-6 h-6 text-[#00C3D0]" />,
    link: '/case-studies/content'
  }
]

<CaseStudiesGrid caseStudies={caseStudies} />
*/
