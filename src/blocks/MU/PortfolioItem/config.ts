import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const PortfolioItem: Block = {
  slug: 'portfolioItem',
  interfaceName: 'PortfolioItemBlock',
  fields: [
    {
      name: 'projectTitle',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
    },
    {
      name: 'client',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Client Name',
        },
        {
          name: 'industry',
          type: 'text',
          label: 'Industry',
        },
        {
          name: 'logo',
          type: 'text',
          label: 'Client Logo URL',
        },
      ],
    },
    {
      name: 'projectDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'heroImage',
      type: 'text',
      required: true,
      label: 'Hero Image URL',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services Provided',
      fields: [
        {
          name: 'service',
          type: 'text',
        },
      ],
    },
    {
      name: 'challenge',
      type: 'richText',
      label: 'The Challenge',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'solution',
      type: 'richText',
      label: 'Our Solution',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'results',
      type: 'array',
      label: 'Key Results',
      fields: [
        {
          name: 'metric',
          type: 'text',
          required: true,
          label: 'Metric (e.g., "40%")',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Description',
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Trending Up', value: 'trending-up' },
            { label: 'Users', value: 'users' },
            { label: 'Target', value: 'target' },
            { label: 'Zap', value: 'zap' },
            { label: 'Award', value: 'award' },
            { label: 'Star', value: 'star' },
          ],
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Project Gallery',
      fields: [
        {
          name: 'image',
          type: 'text',
          required: true,
          label: 'Image URL',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      label: 'Client Testimonial',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'avatar',
          type: 'text',
          label: 'Author Avatar URL',
        },
      ],
    },
  ],
}
