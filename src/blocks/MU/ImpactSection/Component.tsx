'use client'

import React from 'react'

import { Text } from '@/app/(frontend)/branding/components/Text'

interface Stat {
  value: string
  label: string
  image?: string
}

const StatsCard = ({ stat }: { stat: Stat }) => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center p-8 group">
      {/* Image */}
      {stat.image && (
        <div className="mb-6 relative">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out">
            <img
              src={stat.image}
              alt={stat.label}
              className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 ease-out"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-scooter-300/0 to-alabaster-300/0 group-hover:from-scooter-300/30 group-hover:to-alabaster-300/30 blur-xl transition-all duration-500 -z-10" />
        </div>
      )}
      <Text
        variant="h4"
        className="mb-3 bg-gradient-to-br from-white via-alabaster-100 to-scooter-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
      >
        {stat.value}
      </Text>

      {/* Stat Label */}
      <Text variant="b1" className="text-alabaster-200">
        {stat.label}
      </Text>
    </div>
  )
}

export const ImpactSection: React.FC = () => {
  const stats: Stat[] = [
    {
      value: '500+',
      label: 'Leads Generated',
      image: '/images/svg/w/undraw_check.svg', // Replace with your image path
    },
    {
      value: '5x',
      label: 'Increase in Traffic',
      image: '/images/svg/w/undraw_rocket.svg',
    },
    {
      value: '50%',
      label: 'Reduction in Bounce Rate',
      image: '/images/svg/w/undraw_screen-pointer.svg',
    },
    {
      value: '4x',
      label: 'Increase in Engagement',
      image: '/images/svg/w/undraw_heart.svg',
    },
    {
      value: '10x',
      label: 'Growth in New Users',
      image: '/images/svg/w/undraw_smiley-face.svg',
    },
    {
      value: '70%',
      label: 'Improvement in SearchRank',
      image: '/images/svg/w/undraw_note.svg',
    },
  ]

  return (
    <section className="relative w-full bg-gradient-to-br from-alabaster-50 via-shark-50 to-scooter-50/30 overflow-hidden min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-scooter-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-alabaster-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 z-10 w-full">
        {/* Header */}
        <div className="mb-16 text-center flex flex-col gap-4 md:gap-6">
          <Text variant="h1" className="text-shark-950 text-center">
            Real impact, <span className="italic">not puff pieces.</span>
          </Text>
          <Text variant="b1" className="text-shark-600 max-w-2xl mx-auto">
            Numbers that matter from our recent projects.
          </Text>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-shark-800 via-shark-900 to-shark-950 rounded-3xl border border-shark-700/50 shadow-xl hover:shadow-2xl hover:border-scooter-500/50 transition-all duration-500 overflow-hidden"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-scooter-500/0 via-alabaster-500/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-scooter-500/20 to-alabaster-500/20 blur-xl -z-10" />

              <StatsCard stat={stat} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-shark-600">
            Plus: 1 award and feedback from TopWeb / BestWeb ✦
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default ImpactSection
