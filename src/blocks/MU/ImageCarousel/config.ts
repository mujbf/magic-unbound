import type { Block, Field } from 'payload'

export const ImageCarousel: Block = {
  slug: 'imageCarousel',
  interfaceName: 'ImageCarouselBlock',
  fields: [
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'topMargin',
      type: 'text',
      label: 'Top Margin (CSS value)',
      defaultValue: '-160px',
    },
  ],
}
