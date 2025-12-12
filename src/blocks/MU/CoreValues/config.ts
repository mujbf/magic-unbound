import type { Block, Field } from 'payload'

export const CoreValues: Block = {
  slug: 'coreValues',
  interfaceName: 'CoreValuesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Section Heading',
    },
    {
      name: 'paragraphs',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'highlightStartOffset',
      type: 'number',
      label: 'Highlight Start Offset',
      defaultValue: -0.3,
      admin: {
        description: 'Controls when text starts highlighting. Negative values start before section enters viewport.',
      },
    },
  ],
}
