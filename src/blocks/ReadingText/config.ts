// src/blocks/SplitTextHero.ts
import type { Block } from 'payload'

export const SplitTextHero: Block = {
  slug: 'splitTextHero',
  interfaceName: 'SplitTextHeroBlock',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image for the hero section'
      }
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
      admin: {
        description: 'Small uppercase text above the main heading (e.g., "ABOUT")'
      }
    },
    {
      name: 'primaryText',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Main text that will be displayed in white color'
      }
    },
    {
      name: 'secondaryText',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Secondary text that will be displayed in gray color'
      }
    },
    {
      name: 'animationSpeed',
      type: 'number',
      defaultValue: 1000,
      admin: {
        description: 'Delay between each letter animation in milliseconds (default: 30ms)'
      }
    },
    {
      name: 'enableGradient',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Apply gradient effect to primary text'
      }
    }
  ]
}