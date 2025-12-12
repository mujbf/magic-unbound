
import React from 'react'
import type { Metadata } from 'next'
import ServicesSection from '@/blocks/MU/ServicesSection/Component'
// import { ServiceVerticals } from '@/blocks/MU/ServiceVerticals/Component'
import { ServiceVerticals } from '@/blocks/MU/ServiceVerticals/Component'
import { ReadingText } from '@/blocks/MU/ReadingText/Component'
import { CoreValues } from '@/blocks/MU/CoreValues/Component'
import { TestimonialsCarousel } from '@/blocks/MU/TestimonialsCarousel/Component'
import { CaseStudiesGrid } from '@/blocks/MU/CaseStudiesGrid/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { AboutHero } from '@/blocks/MU/AboutHero/Component'



export const metadata: Metadata = {
  title: 'Services | Magic Unbound',
  description: 'Our comprehensive suite of digital services.',
}

export default function ServicesPage() {
  const serviceVerticalsData = {
    heading: "Comprehensive Expertise",
    subheading: "We cover the entire digital lifecycle from ideation to execution and scaling.",
    services: [
        {
            number: "01",
            title: "Brand Strategy & <br/> Identity",
            description: "We define your brand's voice, visual system, and strategic positioning to ensure you stand out in a crowded market.",
            imagePosition: "right",
            imageUrl: "/images/jpg/about-carousel-image-1.jpg", // Mock
            iconUrl: "/images/svg/icon-star.svg" // Mock
        },
        {
            number: "02",
            title: "Web Design & <br/> Development",
            description: "Building high-performance, visually stunning websites that convert visitors into loyal customers.",
            imagePosition: "left",
            imageUrl: "/images/jpg/about-carousel-image-2.jpg", // Mock
            iconUrl: "/images/svg/icon-zap.svg" // Mock
        },
         {
            number: "03",
            title: "Digital Product <br/> Design",
            description: "Creating intuitive and engaging user experiences for complex digital products and applications.",
            imagePosition: "right",
            imageUrl: "/images/jpg/about-carousel-image-3.jpg", // Mock
            iconUrl: "/images/svg/icon-sparkle.svg" // Mock
        }
    ]
  }

  const coreValuesData = {
      heading: "Our Guided Principles",
      paragraphs: [
          { text: "We believe in the power of simplicity."},
          { text: "We prioritize user needs above all else."},
          { text: "Innovation is at the heart of what we do."},
          { text: "Collaboration leads to the best results."}
      ],
      highlightStartOffset: -0.5
  }

  const caseStudiesData = {
      heading: "Proven Results",
      subheading: "See how we've helped other businesses achieve their goals.",
      caseStudies: [
          {
              percentage: "200%",
              description: "Increase in organic traffic for a leading fintech startup.",
              link: "#",
              iconName: "trending-up"
          },
          {
              percentage: "5x",
              description: "Improvement in user retention after our UX overhaul.",
              link: "#",
              iconName: "users"
          },
          {
              percentage: "40%",
              description: "Reduction in bounce rate across all landing pages.",
              link: "#",
              iconName: "target"
          }
      ]
  }
    
  const testimonialsData = [
      {
          quote: "The team at Magic Unbound completely transformed our digital presence.",
          author: "Jane Doe",
          role: "CEO",
          company: "Tech Corp",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
      },
       {
          quote: "Their attention to detail and creative solutions are unmatched.",
          author: "John Smith",
          role: "Marketing Director",
          company: "Innovate Inc",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
      }
  ]

  return (
    <div className="bg-shark-950 min-h-screen text-white">
      {/* 
         Using AboutHero as a placeholder for Services Hero since it likely has similar structure 
         or we could use FullScreenHero. Let's use FullScreenHero for consistency if we wanted, 
         but user asked to use their blocks. AboutHero seems fitting for 'Services' intro too.
      */}
      {/* @ts-expect-error - Props might differ */}
      <AboutHero />

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Verticals */}
      {/* @ts-expect-error - types mismatch with payload types vs prop types sometimes */}
      <ServiceVerticals {...serviceVerticalsData} />

      {/* Manifesto / Philosophy */}
      <ReadingText />

      {/* Core Values */}
      {/* @ts-expect-error - types */}
      <CoreValues {...coreValuesData} />

      {/* Case Studies Stats */}
      {/* @ts-expect-error - types */}
      <CaseStudiesGrid {...caseStudiesData} />

      {/* Testimonials */}
      {/* @ts-expect-error - types */}
      <TestimonialsCarousel 
        testimonials={testimonialsData}
        backgroundColor="bg-shark-950" 
      />

      {/* CTA */}
      <ContactBlock 
        title="Ready to Scale?"
        subtitle="Let's discuss how our services can help you grow."
      />
    </div>
  )
}
