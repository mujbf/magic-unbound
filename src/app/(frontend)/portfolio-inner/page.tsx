
import React from 'react'
import type { Metadata } from 'next'
import { PortfolioItem } from '@/blocks/MU/PortfolioItem/Component'
import { ImpactSection } from '@/blocks/MU/ImpactSection/Component'
import { TestimonialsCarousel } from '@/blocks/MU/TestimonialsCarousel/Component'
import { ContactBlock } from '@/blocks/Contact/Component'

export const metadata: Metadata = {
  title: 'Project Details | Magic Unbound',
  description: 'Detailed view of our project.',
}

export default function PortfolioInnerPage() {
  // Mock data for the static view
  const projectData = {
    projectTitle: "The Future of Fintech",
    tagline: "Revolutionizing how people interact with their finances through intuitive design.",
    client: {
      name: "FinFlow",
      industry: "Fintech",
      logo: "/images/logo.svg" // Placeholder, might be broken image if not exists
    },
    projectDate: "2024-03-15",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    services: [
      { service: "UX/UI Design" },
      { service: "Mobile App Development" },
      { service: "Design System" }
    ],
    challenge: {
        root: {
            children: [
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "The fintech market is saturated with complex, user-hostile applications. FinFlow needed to stand out by offering a radically simple, transparent, and engaging user experience that could demystify personal finance for the next generation of investors.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1
                }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    },
    solution: {
        root: {
            children: [
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "We designed a mobile-first experience centered around behavioral psychology. By gamifying savings and simplifying investment jargon into bite-sized visual cards, we created an interface that feels more like a lifestyle app than a banking tool.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1
                }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    },
    results: [
      { metric: "400%", description: "Increase in Daily Active Users", icon: "trending-up" },
      { metric: "4.8", description: "App Store Rating", icon: "star" },
      { metric: "2M+", description: "Transactions Processed", icon: "zap" }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2670&auto=format&fit=crop", caption: "Dashboard View" },
      { image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop", caption: "Mobile Interaction" },
    ],
    testimonial: {
      quote: "Magic Unbound didn't just design an app; they defined our entire digital brand. The feedback from our users has been overwhelmingly positive.",
      author: "Sarah Jenkins",
      role: "CTO, FinFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
    }
  }

  return (
    <div className="bg-shark-950 min-h-screen text-white">
      {/* @ts-expect-error - Metadata specific types might mismatch slightly but structure is correct for component */}
      <PortfolioItem {...projectData} />
      
      <ImpactSection />
      
      {/* @ts-expect-error - TestimonialsCarousel doesn't require props for static demo if it has defaults */}
      <TestimonialsCarousel />
      
      <ContactBlock 
        title="Like what you see?"
        subtitle="Let's build your success story."
      />
    </div>
  )
}
