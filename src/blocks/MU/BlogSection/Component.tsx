import React from 'react'
import Link from 'next/link'
import { ArrowRight, Files } from 'lucide-react'

import { Text } from '@/app/(frontend)/branding/components/Text'
import { Button } from '@/app/(frontend)/branding/components/Button'
import { GradientText } from '@/components/ui/shadcn-io/gradient-text'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 max-w-3xl">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-gray-100">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Text variant="b4" className="mb-2">
          {post.date}
        </Text>

        <Text
          variant="h4"
          className="mb-3 group-hover:text-emerald-600 transition-colors duration-300"
        >
          {post.title}
        </Text>

        <Text variant="b3" className="mb-5 line-clamp-2">
          {post.excerpt}
        </Text>

        <Button variant="primary">Read More</Button>
      </div>
    </div>
  )
}

export const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Design Systems in Enterprise',
      excerpt:
        'Exploring how modern design systems are revolutionizing the way large organizations build and maintain digital products.',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=500&fit=crop',
      date: 'Nov 2, 2025',
      category: 'Design',
    },
    {
      id: 2,
      title: 'AI-Powered Workflows: A New Paradigm',
      excerpt:
        'How artificial intelligence is transforming creative workflows and enabling teams to work smarter, not harder.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      date: 'Oct 28, 2025',
      category: 'Technology',
    },
    {
      id: 3,
      title: 'Building Brands That Resonate',
      excerpt:
        'The art and science of creating brand identities that connect with audiences on a deeper emotional level.',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=500&fit=crop',
      date: 'Oct 25, 2025',
      category: 'Branding',
    },
  ]
  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-neutral-900 z-10">
      <div className="mb-14 md:mb-20 text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <Text variant="h1">
            Someone is typing<span className="text-emerald-500 animate-pulse">...</span>
          </Text>
        </div>
        <Text variant="b2" className="max-w-2xl mx-auto text-center">
          Fleeting thoughts, moments of joy, and letters of rumination from a seriously interesting
          team of creatives.
        </Text>
      </div>

      {/* Blog Slider */}
      <div className="w-screen">
        <div
          className="flex gap-6 animate-scroll group-hover:pause"
          style={{
            animation: 'scroll 35s linear infinite',
          }}
        >
          {[...blogPosts, ...blogPosts].map((post, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0"
            >
              <div className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
                <BlogCard post={post} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16 mb-16">
        <Button variant="secondary">View All Articles</Button>
      </div>
    </div>
  )
}

export default BlogSection
