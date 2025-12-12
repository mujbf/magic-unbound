import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const serviceCardFields: Field[] = [
  {
    name: 'number',
    type: 'text',
    required: true,
    label: 'Service Number (e.g., "01")',
  },
  {
    name: 'title',
    type: 'text',
    required: true,
    label: 'Service Title',
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
    label: 'Service Description',
  },
  {
    name: 'iconUrl',
    type: 'text',
    required: true,
    label: 'Icon Image URL',
  },
  {
    name: 'imageUrl',
    type: 'text',
    label: 'Service Image URL (optional)',
  },
  {
    name: 'imagePosition',
    type: 'select',
    defaultValue: 'right',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
    ],
  },
]

export const ServiceVerticals: Block = {
  slug: 'serviceVerticals',
  interfaceName: 'ServiceVerticalsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Section Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      label: 'Section Subheading',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: serviceCardFields,
    },
  ],
}
