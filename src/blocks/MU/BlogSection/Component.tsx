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
    <div className="h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-shark-950/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10 shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Text variant="b4" className="mb-2 text-scooter-400 font-medium">
          {post.date}
        </Text>

        <Text
          variant="h4"
          className="mb-3 text-white group-hover:text-scooter-300 transition-colors duration-300"
        >
          {post.title}
        </Text>

        <Text variant="b3" className="mb-5 line-clamp-2 text-shark-300 flex-grow">
          {post.excerpt}
        </Text>

        <div className="mt-auto">
            <Text variant="b4" className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                Read More <ArrowRight size={16} className="text-scooter-400" />
            </Text>
        </div>
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
    <div className="relative w-full bg-shark-950 py-24 text-white z-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20 text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <Text variant="h1" className="text-white">
            Someone is typing<span className="text-scooter-400 animate-pulse">...</span>
          </Text>
        </div>
        <Text variant="b2" className="max-w-2xl mx-auto text-center text-shark-300">
          Fleeting thoughts, moments of joy, and letters of rumination from a seriously interesting
          team of creatives.
        </Text>
      </div>

      {/* Blog Slider */}
      <div className="w-screen">
        <div
          className="flex gap-6 animate-scroll group-hover:pause pl-6 md:pl-12"
          style={{
            animation: 'scroll 35s linear infinite',
          }}
        >
          {[...blogPosts, ...blogPosts].map((post, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0"
            >
              <div className="group bg-shark-900/50 border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-scooter-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                <BlogCard post={post} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16 mb-16">
        <Button variant="secondary" className="border-shark-700 text-white hover:bg-white hover:text-shark-950 hover:border-white">View All Articles</Button>
      </div>
    </div>
  )
}

export default BlogSection
