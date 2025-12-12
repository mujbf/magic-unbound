'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'
import { Sparkle, Lightning, Rocket } from 'phosphor-react'
import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'

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
        <Text variant="h3" className="mb-6">
          {title}
        </Text>
        <div className="space-y-3">
          {services.map((service, index) => (
            <Text key={index} variant="b3" className="flex items-start gap-2">
              <span className="text-white-400">‣</span>
              {service}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

export const ServicesSection2: React.FC = () => {
  const services = [
    {
      icon: <Sparkle size={96} />,
      title: 'Ideas',
      services: ['Brand strategy', 'Brand design', 'Art direction'],
    },
    {
      icon: <Lightning size={96} className="text-[#FB3290]" />,
      title: 'Execution',
      services: [
        'Digital graphic design & print design',
        'Presentation design',
        'Copywriting & social content',
      ],
    },
    {
      icon: <Rocket size={96} className="text-[#EB6D00]" />,
      title: 'Experiments',
      services: [
        'Workflow transformation using custom AI deployments',
        'Mini-apps for specialized enterprise teams',
        'Headless content management systems',
      ],
    },
  ]
  return (
    <section className="relative max-w-8xl mx-auto px-8 py-20 md:py-28 bg-shark-950 text-white">
      {/* Header */}
      <div className="mb-14 text-center px-4 md:px-6">
        <Text variant="h1" className="mb-4 tracking-tight">
          How we can <span className="italic">help</span>
        </Text>
        {/* <Text variant="b2" className="">
          From ideation to execution, we transform your vision into reality with our comprehensive
          suite of services.
        </Text> */}
      </div>

      {/* Modern Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10 overflow-hidden">
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
              className="group relative border-b border-r border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 flex flex-col justify-start items-start p-8 md:p-10 min-h-[280px] cursor-[url('/images/pointer.png'),_auto]"
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
  )
}

export default ServicesSection2
