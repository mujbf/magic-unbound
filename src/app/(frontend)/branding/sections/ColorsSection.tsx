import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

import { Text } from '../components/Text'

const colorData = {
  shark: {
    name: 'Shark',
    shades: {
      50: '#f5f5f6',
      100: '#e6e6e7',
      200: '#cfd0d2',
      300: '#adaeb3',
      400: '#84858c',
      500: '#696a71',
      600: '#595961',
      700: '#4c4d52',
      800: '#434347',
      900: '#3b3b3e',
      950: '#1d1d1f',
    },
  },
  alabaster: {
    name: 'Alabaster',
    shades: {
      50: '#fbfbfd',
      100: '#eaeaf4',
      200: '#d0d1e7',
      300: '#a7aad2',
      400: '#787eb8',
      500: '#575da0',
      600: '#444885',
      700: '#383b6c',
      800: '#31335b',
      900: '#2d2e4d',
      950: '#1e1e33',
    },
  },
  azureRadiance: {
    name: 'Azure Radiance',
    shades: {
      50: '#edfaff',
      100: '#d6f2ff',
      200: '#b5eaff',
      300: '#83dfff',
      400: '#48cbff',
      500: '#1eacff',
      600: '#068eff',
      700: '#007aff',
      800: '#085dc5',
      900: '#0d519b',
      950: '#0e315d',
    },
  },
  fuchsiaPink: {
    name: 'Fuchsia Pink',
    shades: {
      50: '#fbf7fc',
      100: '#f8eef9',
      200: '#f0dbf3',
      300: '#e6bfe8',
      400: '#d799d9',
      500: '#c170c5',
      600: '#a550a7',
      700: '#8b408b',
      800: '#723672',
      900: '#5f305e',
      950: '#3c163b',
    },
  },
  brilliantRose: {
    name: 'Brilliant Rose',
    shades: {
      50: '#fef1f8',
      100: '#fde6f2',
      200: '#fecce7',
      300: '#fea3d2',
      400: '#fc6ab3',
      500: '#f74f9e',
      600: '#e61c71',
      700: '#c80e57',
      800: '#a50f47',
      900: '#8a113f',
      950: '#550221',
    },
  },
  carnation: {
    name: 'Carnation',
    shades: {
      50: '#fff1f1',
      100: '#ffe1e2',
      200: '#ffc7c9',
      300: '#ffa0a3',
      400: '#ff5257',
      500: '#f83b40',
      600: '#e51d23',
      700: '#c11419',
      800: '#a01418',
      900: '#84181b',
      950: '#480709',
    },
  },
  flushOrange: {
    name: 'Flush Orange',
    shades: {
      50: '#fff8ed',
      100: '#ffefd5',
      200: '#fddbab',
      300: '#fcc175',
      400: '#f99c3e',
      500: '#f7811b',
      600: '#e8650e',
      700: '#c04c0e',
      800: '#993c13',
      900: '#7b3313',
      950: '#421708',
    },
  },
  supernova: {
    name: 'Supernova',
    shades: {
      50: '#ffffea',
      100: '#fffdc5',
      200: '#fffb85',
      300: '#fff246',
      400: '#ffe51b',
      500: '#ffc600',
      600: '#e29a00',
      700: '#bb6d02',
      800: '#985408',
      900: '#7c450b',
      950: '#482400',
    },
  },
  mantis: {
    name: 'Mantis',
    shades: {
      50: '#f4fbf2',
      100: '#e7f6e2',
      200: '#d0ecc6',
      300: '#aadc99',
      400: '#7cc464',
      500: '#62ba46',
      600: '#448a2f',
      700: '#386d28',
      800: '#305724',
      900: '#28481f',
      950: '#11270c',
    },
  },
  osloGray: {
    name: 'Oslo Gray',
    shades: {
      50: '#f6f6f6',
      100: '#e7e7e7',
      200: '#d1d1d1',
      300: '#b0b0b0',
      400: '#8c8c8c',
      500: '#6d6d6d',
      600: '#5d5d5d',
      700: '#4f4f4f',
      800: '#454545',
      900: '#3d3d3d',
      950: '#262626',
    },
  },
}

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)
  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return { copied, copy }
}

const Colors = ({
  variant = 'shark',
}: {
  variant?:
    | 'shark'
    | 'alabaster'
    | 'azureRadiance'
    | 'fuchsiaPink'
    | 'brilliantRose'
    | 'carnation'
    | 'flushOrange'
    | 'supernova'
    | 'mantis'
    | 'osloGray'
}) => {
  const { copied, copy } = useCopyToClipboard()
  const color = colorData[variant]

  return (
    <div className="p-3 lg:p-6 bg-alabaster-100 dark:bg-shark-900 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 transition-colors pb-9 lg:pb-12">
      <Text
        variant="b1"
        className="text-shark-950 dark:text-alabaster-50 mb-4 capitalize p-2 bg-shark-950/50 dark:bg-alabaster-50/10 rounded w-fit"
      >
        {color.name}
      </Text>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-8">
        {Object.entries(color.shades).map(([shade, hex]) => (
          <button
            key={shade}
            onClick={() => copy(hex)}
            className="group relative aspect-square rounded border border-shark-950/60 dark:border-alabaster-50/60 hover:scale-105 transition-transform cursor-pointer"
            style={{ backgroundColor: hex }}
            title={`${color.name}-${shade}: ${hex}`}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 rounded transition-opacity">
              {copied ? (
                <Check size={16} className="text-white" />
              ) : (
                <Copy size={16} className="text-white" />
              )}
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-shark-950/80 dark:text-alabaster-50/80">
              {shade}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ColorsSection() {
  return (
    <div className="space-y-8 p-4 lg:p-8 bg-alabaster-100/50 dark:bg-shark-900/30 rounded-b-[8px]">
      <div>
        <Text variant="h2" className="text-shark-950 dark:text-alabaster-50 mb-2">
          ◼ Color Palette
        </Text>
        <Text variant="b1" className="text-shark-950/60 dark:text-alabaster-50/60 mt-2 lg:mt-4">
          Brand colors and shades (click on any color to copy HEX).
        </Text>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <Colors variant="shark" />
        <Colors variant="alabaster" />
        <Colors variant="azureRadiance" />
        <Colors variant="fuchsiaPink" />
        <Colors variant="brilliantRose" />
        <Colors variant="carnation" />
        <Colors variant="flushOrange" />
        <Colors variant="supernova" />
        <Colors variant="mantis" />
        <Colors variant="osloGray" />
      </div>
    </div>
  )
}
