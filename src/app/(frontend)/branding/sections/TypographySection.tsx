'use client'
import React from 'react'
import { Text } from '../components/Text'

const typographyData = {
  type_h1: {
    name: 'System H1',
    font: 'dm-sans',
    variant: 'h1' as const,
    fontName: 'DM Sans',
    size: '48px | ',
    weight: '500',
    className: '',
    style: 'Normal',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
  type_h2: {
    name: 'System H2',
    font: 'dm-sans',
    variant: 'h2' as const,
    fontName: 'DM Sans',
    size: '36px',
    weight: '500',
    className: 'italic',
    style: 'Italic',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
  type_h3: {
    name: 'System H3',
    font: 'dm-sans',
    variant: 'h3' as const,
    fontName: 'DM Sans',
    size: '24px',
    weight: '500',
    className: 'underline',
    style: 'Underline',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
  type_b1: {
    name: 'Body 1',
    font: 'dm-sans',
    variant: 'b1' as const,
    fontName: 'DM Sans',
    size: '16px',
    weight: '400',
    className: '',
    style: 'Normal',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
  type_b2: {
    name: 'Body 2',
    font: 'dm-sans',
    variant: 'b2' as const,
    fontName: 'DM Sans',
    size: '14px',
    weight: '400',
    className: '',
    style: 'Normal',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
  type_b3: {
    name: 'Body 3',
    font: 'dm-sans',
    variant: 'b3' as const,
    fontName: 'DM Sans',
    size: '12px',
    weight: '400',
    className: '',
    style: 'Normal',
    sample: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
  },
}

interface TypographyProps {
  data: {
    name: string
    font: string
    fontName: string
    variant: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3'
    weight: string | number
    size: string
    className: string
    style: string
    sample: string
  }
}

const Typography = ({ data }: TypographyProps) => (
  <div className="p-3 lg:p-6 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 bg-alabaster-100 dark:bg-shark-900 transition-colors">
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 mb-4 text-xs lg:text-sm font-regular text-shark-950/80 dark:text-alabaster-50/80">
      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
        <span className="font-medium">Name:</span> {data.name}
      </div>
      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
        <span className="font-medium">Font:</span> {data.fontName}
      </div>
      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
        <span className="font-medium">Weight:</span> {data.weight}
      </div>
      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
        <span className="font-medium">Size:</span> {data.size}
      </div>
      <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
        <span className="font-medium">Style:</span> {data.style}
      </div>
    </div>

    <div className="border-l-2 border-shark-950/60 dark:border-alabaster-50/60 pl-4">
      <Text
        variant={data.variant}
        className={`${data.className} text-shark-950 dark:text-alabaster-50`}
      >
        {data.sample}
      </Text>
    </div>
  </div>
)

export default function TypographySection() {
  return (
    <div className="space-y-8 p-4 lg:p-8 bg-alabaster-100/50 dark:bg-shark-900/30 rounded-b-[8px]">
      <div>
        <Text variant="h2" className="text-shark-950 dark:text-alabaster-50 mb-2">
          ◼ Typography
        </Text>
        <Text variant="b1" className="text-shark-950/60 dark:text-alabaster-50/60 mt-2 lg:mt-4">
          Brand typography styles and samples.
        </Text>
      </div>

      <div className="space-y-4">
        {Object.values(typographyData).map((data, i) => (
          <Typography key={i} data={data} />
        ))}
      </div>
    </div>
  )
}
