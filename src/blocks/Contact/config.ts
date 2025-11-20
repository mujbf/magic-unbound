// src/blocks/Contact/config.ts
import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Get in Touch',
      admin: {
        description: 'Main section title'
      }
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      admin: {
        description: 'Subtitle or tagline below the main title'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          required: false,
          admin: {
            description: 'Business address'
          }
        },
        {
          name: 'email',
          type: 'email',
          required: false,
          admin: {
            description: 'Contact email address'
          }
        },
      ]
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      admin: {
        description: 'Contact phone number (e.g., +1 (555) 123-4567)'
      }
    }
  ]
}