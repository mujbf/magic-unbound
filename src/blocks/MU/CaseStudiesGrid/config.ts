import type { Block, Field } from 'payload'

const caseStudyFields: Field[] = [
  {
    name: 'percentage',
    type: 'text',
    required: true,
    label: 'Percentage or Title',
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
  },
  {
    name: 'iconName',
    type: 'select',
    required: true,
    options: [
      { label: 'Sparkles', value: 'sparkles' },
      { label: 'Rocket', value: 'rocket' },
      { label: 'Zap', value: 'zap' },
      { label: 'Star', value: 'star' },
      { label: 'Heart', value: 'heart' },
      { label: 'Trophy', value: 'trophy' },
    ],
  },
  {
    name: 'link',
    type: 'text',
    required: true,
    label: 'Case Study Link',
  },
]

export const CaseStudiesGrid: Block = {
  slug: 'caseStudiesGrid',
  interfaceName: 'CaseStudiesGridBlock',
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
      name: 'caseStudies',
      type: 'array',
      required: true,
      minRows: 1,
      fields: caseStudyFields,
    },
  ],
}
