import type { Block } from 'payload'

export const VideoSection: Block = {
  slug: 'videoSection',
  interfaceName: 'VideoSectionBlock',
  fields: [
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
      label: 'Video URL',
    },
    {
      name: 'rounded',
      type: 'checkbox',
      defaultValue: true,
      label: 'Rounded Corners',
    },
    {
      name: 'containerPadding',
      type: 'select',
      defaultValue: 'py-16',
      options: [
        { label: 'None', value: 'py-0' },
        { label: 'Small', value: 'py-8' },
        { label: 'Medium', value: 'py-16' },
        { label: 'Large', value: 'py-24' },
      ],
    },
  ],
}
