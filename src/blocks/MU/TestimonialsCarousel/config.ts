import type { Block, Field } from 'payload'

const testimonialFields: Field[] = [
  {
    name: 'quote',
    type: 'textarea',
    required: true,
  },
  {
    name: 'author',
    type: 'text',
    required: true,
  },
  {
    name: 'role',
    type: 'text',
    required: true,
  },
  {
    name: 'company',
    type: 'text',
    required: true,
  },
  {
    name: 'avatar',
    type: 'text',
    required: true,
    label: 'Avatar Image URL',
  },
  {
    name: 'logo',
    type: 'text',
    label: 'Company Logo URL (optional)',
  },
]

export const TestimonialsCarousel: Block = {
  slug: 'testimonialsCarousel',
  interfaceName: 'TestimonialsCarouselBlock',
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      fields: testimonialFields,
    },
    {
      name: 'backgroundVideo',
      type: 'text',
      label: 'Background Video URL',
      defaultValue: '/videos/about2.mp4',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'bg-shark-950',
      options: [
        { label: 'Dark', value: 'bg-shark-950' },
        { label: 'Black', value: 'bg-black' },
        { label: 'Gray', value: 'bg-gray-900' },
      ],
    },
  ],
}
