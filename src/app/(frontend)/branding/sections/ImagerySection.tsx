import React from 'react'

const imageryData = {
  hero: {
    name: 'Hero Images',
    description: 'Large, impactful images for hero sections',
    guidelines: [
      'Minimum resolution: 1920x1080px',
      'Aspect ratio: 16:9 or 21:9',
      'Format: WebP with JPG fallback',
      'Style: Bold, high-contrast, editorial',
    ],
    example: 'linear-gradient(135deg, #9f8151 0%, #6f5139 100%)',
  },
  product: {
    name: 'Product Photography',
    description: 'Clean, professional product shots',
    guidelines: [
      'White or neutral background',
      'Consistent lighting and shadows',
      'Multiple angles available',
      'Square format: 1:1 ratio',
    ],
    example: 'linear-gradient(135deg, #b78958 0%, #8d5f41 100%)',
  },
  lifestyle: {
    name: 'Lifestyle Photography',
    description: 'Authentic, relatable lifestyle imagery',
    guidelines: [
      'Natural lighting preferred',
      'Candid, authentic moments',
      'Diverse representation',
      'Aspect ratio: 4:3 or 3:2',
    ],
    example: 'linear-gradient(135deg, #1aaf75 0%, #0b714e 100%)',
  },
  icons: {
    name: 'Icons & Graphics',
    description: 'Custom iconography and graphic elements',
    guidelines: [
      'Line weight: 2px',
      'Style: Minimal, geometric',
      'Format: SVG',
      'Colors: Brand palette only',
    ],
    example: 'linear-gradient(135deg, #6d6d6d 0%, #3d3d3d 100%)',
  },
}

interface ImageryProps {
  variant?: keyof typeof imageryData
}

const Imagery = ({ variant = 'hero' }: ImageryProps) => {
  const img = imageryData[variant]

  return (
    <div className="p-6 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 bg-alabaster-100 dark:bg-shark-900 transition-colors">
      <div className="grid grid-cols-2 gap-1 mb-4 text-sm text-shark-950/80 dark:text-alabaster-50/80">
        <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
          <span className="font-medium">Name:</span> {img.name}
        </div>
        <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
          <span className="font-medium">Description:</span> {img.description}
        </div>
      </div>

      <div
        className="w-full h-48 rounded border border-shark-950/60 dark:border-alabaster-50/60 mb-4 flex items-center justify-center text-alabaster-50 font-medium"
        style={{ background: img.example }}
      >
        Sample {img.name}
      </div>

      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded text-sm text-shark-950/80 dark:text-alabaster-50/80">
        <span className="font-medium">Guidelines:</span>
        <ul className="mt-1 space-y-0.5">
          {img.guidelines.map((guideline, idx) => (
            <li key={idx}>• {guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ImagerySection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="skr-type-heading mb-2 text-shark-950 dark:text-alabaster-50">
          ◼ Imagery & Photography
        </h2>
        <p className="skr-type-paragraph text-shark-950/60 dark:text-alabaster-50/60">
          Guidelines for visual content and photography styles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.keys(imageryData).map((key) => (
          <Imagery key={key} variant={key as keyof typeof imageryData} />
        ))}
      </div>
    </div>
  )
}
