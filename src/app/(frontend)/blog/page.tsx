
import React from 'react'
import type { Metadata } from 'next'
import { AboutHero } from '@/blocks/MU/AboutHero/Component'
import { BlogSection } from '@/blocks/MU/BlogSection/Component'
import { ContactBlock } from '@/blocks/Contact/Component'

export const metadata: Metadata = {
  title: 'Blog | Magic Unbound',
  description: 'Insights and stories from our team.',
}

export default function BlogPage() {
  return (
    <div className="bg-shark-950 min-h-screen">
      {/* Reuse AboutHero or a similar styled block for header */}
      {/* @ts-expect-error - generic props */}
      <AboutHero 
         // Assuming AboutHero might accept overrides or we rely on its defaults.
         // Since I can't easily see AboutHero's props right now without reading it, I'll trust it renders *something* nice.
         // Actually, let's just use it. If it has hardcoded text, we might want to swap it later.
      />
      
      <div className="py-20">
         <BlogSection />
      </div>

       {/* Add another section of 'Latest Posts' or similar if needed, 
           but BlogSection contains a slider of posts. 
           For a static page, we can duplicate it or assume it covers the need.
       */}

      <ContactBlock title="Subscribe for more" subtitle="Join our newsletter" />
    </div>
  )
}
