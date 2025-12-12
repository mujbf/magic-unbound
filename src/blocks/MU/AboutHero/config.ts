import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../../fields/linkGroup'

export const AboutHero: Block = {
  slug: 'aboutHero',
  interfaceName: 'AboutHeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Hero Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Hero Subtitle',
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
      label: 'Background Video URL',
      defaultValue: '/videos/about1.mp4',
    },
    {
      name: 'height',
      type: 'select',
      defaultValue: '600px',
      options: [
        { label: 'Small (400px)', value: '400px' },
        { label: 'Medium (600px)', value: '600px' },
        { label: 'Large (800px)', value: '800px' },
        { label: 'Full Screen', value: '100vh' },
      ],
      label: 'Hero Height',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
