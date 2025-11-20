// src/blocks/CaseStudy/config.ts
import type { Block } from 'payload'

export const CaseStudySection: Block = {
  slug: 'caseStudySection',
  interfaceName: 'CaseStudySectionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Selected Work',
      admin: {
        description: 'Main section title (e.g., "Selected Work", "Our Projects")'
      }
    },
    {
      name: 'caseStudies',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'Add case studies to display in this section'
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Case study title'
          }
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Short description of the case study'
          }
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'execution',
          options: [
            {
              label: 'Ideas',
              value: 'ideas'
            },
            {
              label: 'Execution',
              value: 'execution'
            },
            {
              label: 'Experiments',
              value: 'experiments'
            }
          ],
          admin: {
            description: 'Category for filtering'
          }
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Main image for the case study card'
          }
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Optional video that plays on hover (MP4 format recommended)'
          }
        },
        {
          name: 'linkType',
          type: 'radio',
          required: true,
          defaultValue: 'internal',
          options: [
            {
              label: 'Internal Page',
              value: 'internal'
            },
            {
              label: 'Custom URL',
              value: 'custom'
            }
          ],
          admin: {
            description: 'Choose whether to link to an internal page or use a custom URL'
          }
        },
        {
          name: 'internalLink',
          type: 'relationship',
          relationTo: 'pages',
          required: false,
          admin: {
            description: 'Select an internal page',
            condition: (data, siblingData) => siblingData?.linkType === 'internal'
          }
        },
        {
          name: 'customUrl',
          type: 'text',
          required: false,
          admin: {
            description: 'Enter a custom URL (e.g., /case-studies/project-name)',
            condition: (data, siblingData) => siblingData?.linkType === 'custom'
          }
        }
      ]
    }
  ]
}