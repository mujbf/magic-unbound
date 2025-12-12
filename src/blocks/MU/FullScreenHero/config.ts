import type { Block } from 'payload'
import { linkGroup } from '../../../fields/linkGroup'

export const FullScreenHero: Block = {
  slug: 'fullScreenHero',
  interfaceName: 'FullScreenHeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Hero Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Hero Subtitle',
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
      label: 'Background Video URL',
      defaultValue: '/videos/hero3.mp4',
    },
    {
      name: 'gradient',
      type: 'text',
      label: 'Title Gradient (CSS)',
      defaultValue: 'linear-gradient(90deg, #ffffffff 0%, #ebfffe 35%, #ceffff 65%, #a2fdff 100%)',
    },
    linkGroup({
      appearances: ['default', 'outline', 'primary', 'secondary', 'ghost', 'accent', 'link'],
      overrides: {
        maxRows: 3,
      },
    }),
  ],
}
