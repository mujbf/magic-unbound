import React from 'react'
import type { PortfolioItemBlock as PortfolioItemBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { TrendingUp, Users, Target, Zap, Award, Star, Calendar, Briefcase } from 'lucide-react'

type Props = PortfolioItemBlockProps

const iconMap = {
  'trending-up': TrendingUp,
  users: Users,
  target: Target,
  zap: Zap,
  award: Award,
  star: Star,
}

export const PortfolioItem: React.FC<Props> = ({
  projectTitle,
  tagline,
  client,
  projectDate,
  heroImage,
  services,
  challenge,
  solution,
  results,
  gallery,
  testimonial,
}) => {
  const formattedDate = projectDate
    ? new Date(projectDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : ''

  return (
    <article className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={heroImage}
          alt={projectTitle || 'Portfolio project'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-shark-950 via-shark-950/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-20 lg:px-40 pb-12 md:pb-20">
          {/* Client info */}
          {client && (
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              {client.logo && (
                <img src={client.logo} alt={client.name || ''} className="h-12 w-auto" />
              )}
              <div>
                <p className="dm-sans text-sm text-shark-300">{client.industry}</p>
                <p className="dm-sans text-lg font-semibold text-white">{client.name}</p>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="instrument-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-4 animate-fade-in-up">
            {projectTitle}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="dm-sans text-xl md:text-2xl text-shark-200 max-w-3xl animate-fade-in-up animate-delay-100">
              {tagline}
            </p>
          )}
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-shark-900/50 backdrop-blur-md border-y border-shark-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-wrap gap-6 md:gap-12">
            {formattedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00C3D0]" />
                <div>
                  <p className="dm-sans text-xs text-shark-400">Date</p>
                  <p className="dm-sans text-sm font-medium text-shark-50">{formattedDate}</p>
                </div>
              </div>
            )}

            {services && services.length > 0 && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#00C3D0]" />
                <div>
                  <p className="dm-sans text-xs text-shark-400">Services</p>
                  <p className="dm-sans text-sm font-medium text-shark-50">
                    {services.map((s: any) => s.service).join(', ')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Challenge */}
        {challenge && (
          <section className="animate-fade-in-up">
            <h2 className="instrument-serif text-4xl md:text-5xl font-medium mb-6">
              The Challenge
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <RichText data={challenge} enableGutter={false} />
            </div>
          </section>
        )}

        {/* Solution */}
        {solution && (
          <section className="animate-fade-in-up">
            <h2 className="instrument-serif text-4xl md:text-5xl font-medium mb-6">
              Our Solution
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <RichText data={solution} enableGutter={false} />
            </div>
          </section>
        )}

        {/* Results */}
        {results && results.length > 0 && (
          <section className="animate-fade-in-up">
            <h2 className="instrument-serif text-4xl md:text-5xl font-medium mb-12 text-center">
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result: any, index: number) => {
                const IconComponent = result.icon ? iconMap[result.icon as keyof typeof iconMap] : Star
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-shark-900/30 border border-shark-800 hover:border-[#00C3D0]/30 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-block p-3 bg-[#00C3D0]/10 rounded-full mb-4">
                      <IconComponent className="w-6 h-6 text-[#00C3D0]" />
                    </div>
                    <p className="instrument-serif text-5xl md:text-6xl font-medium text-[#00C3D0] mb-2">
                      {result.metric}
                    </p>
                    <p className="dm-sans text-shark-300">{result.description}</p>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="animate-fade-in-up">
            <h2 className="instrument-serif text-4xl md:text-5xl font-medium mb-12">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((item: any, index: number) => (
                <div key={index} className="group rounded-xl overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img
                    src={item.image}
                    alt={item.caption || `Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.caption && (
                    <p className="dm-sans text-sm text-shark-400 mt-2 px-2">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonial */}
        {testimonial && testimonial.quote && (
          <section className="bg-shark-900/30 rounded-xl p-8 md:p-12 border border-shark-800 animate-fade-in-up">
            <blockquote className="mb-6">
              <p className="dm-sans text-xl md:text-2xl text-shark-50 italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </blockquote>
            {testimonial.author && (
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="dm-sans font-semibold text-shark-50">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="dm-sans text-sm text-shark-400">{testimonial.role}</p>
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </article>
  )
}

export default PortfolioItem
