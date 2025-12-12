import React from 'react'
import type { BlogPostBlock as BlogPostBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Clock, Calendar, User } from 'lucide-react'

type Props = BlogPostBlockProps

export const BlogPost: React.FC<Props> = ({
  title,
  subtitle,
  author,
  publishDate,
  category,
  featuredImage,
  content,
  tags,
  readTime,
}) => {
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 lg:py-20">
      {/* Category Badge */}
      {category && (
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-[#00C3D0] text-white rounded-full">
            {category}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 animate-fade-in-up">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="dm-sans text-xl md:text-2xl text-shark-300 mb-8 animate-fade-in-up animate-delay-100">
          {subtitle}
        </p>
      )}

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 text-shark-400 animate-fade-in-up animate-delay-200">
        {author && (
          <div className="flex items-center gap-2">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name || ''}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <User className="w-5 h-5" />
            )}
            <div className="flex flex-col">
              <span className="dm-sans text-sm font-medium text-shark-50">{author.name}</span>
              {author.role && <span className="dm-sans text-xs">{author.role}</span>}
            </div>
          </div>
        )}

        {formattedDate && (
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="dm-sans text-sm">{formattedDate}</span>
          </div>
        )}

        {readTime && (
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="dm-sans text-sm">{readTime} min read</span>
          </div>
        )}
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl animate-scale-in animate-delay-300">
          <img
            src={featuredImage}
            alt={title || 'Blog post featured image'}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg prose-invert max-w-none mb-12 animate-fade-in-up animate-delay-400">
        <RichText data={content} enableGutter={false} />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-8 border-t border-shark-800 animate-fade-in">
          {tags.map((item: any, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-shark-900 text-shark-300 rounded-full hover:bg-shark-800 transition-colors duration-200"
            >
              #{item.tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default BlogPost
