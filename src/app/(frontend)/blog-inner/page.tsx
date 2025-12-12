
import React from 'react'
import type { Metadata } from 'next'
import { BlogPost } from '@/blocks/MU/BlogPost/Component'
import { BlogSection } from '@/blocks/MU/BlogSection/Component'
import { ContactBlock } from '@/blocks/Contact/Component'

export const metadata: Metadata = {
  title: 'Article | Magic Unbound',
  description: 'Read our latest insights.',
}

export default function BlogInnerPage() {
  const postData = {
    title: "The Future of Design Systems in Enterprise",
    subtitle: "How scaling design consistency boosts developer velocity and brand integrity.",
    author: {
      name: "Alex Morgan",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
    },
    publishDate: "2024-11-02",
    category: "Design",
    readTime: 8,
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    tags: [{ tag: "Design Systems" }, { tag: "Enterprise" }, { tag: "UX" }],
    content: {
        root: {
            children: [
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "In the rapidly evolving landscape of digital product development, consistency is no longer just an aesthetic preference—it's a business imperative. Large enterprises are increasingly turning to robust design systems to bridge the gap between design and engineering, ensuring that every touchpoint resonates with the brand's core values.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1
                },
                {
                  children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Why maintain a design system?",
                            type: "text",
                            version: 1
                        }
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "heading",
                  tag: "h2",
                  version: 1
                },
                 {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "A well-maintained design system serves as the single source of truth for product teams. It reduces design debt, accelerates onboarding for new team members, and allows for rapid prototyping. Instead of reinventing the wheel for every dropdown or modal, teams can focus on solving unique user problems.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1
                },
                 {
                  children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Conclusion",
                            type: "text",
                            version: 1
                        }
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "heading",
                  tag: "h2",
                  version: 1
                },
                 {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Investing in a design system is investing in the future scalability of your organization. It's not just a library of components; it's a shared language that empowers teams to build better products, faster.",
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
    }
  }

  return (
    <div className="bg-shark-950 min-h-screen text-white">
      {/* @ts-expect-error - Metadata specific types might mismatch layout props */}
      <BlogPost {...postData} />

      <div className="py-20 border-t border-shark-800">
        <h3 className="text-center instrument-serif text-4xl text-white mb-10">Read Next</h3>
        <BlogSection />
      </div>
      
      <ContactBlock />
    </div>
  )
}
