// Design System Preview Page
// Slug: /branding

'use client'
import React from 'react'
import { useTheme } from '@payloadcms/ui'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import LogoSection from './sections/LogoSection'
import ColorsSection from './sections/ColorsSection'
import TypographySection from './sections/TypographySection'
import ButtonsSection from './sections/ButtonsSection'
import ImagerySection from './sections/ImagerySection'
import { Text } from './components/Text'

import {
  PuzzlePieceIcon,
  PaletteIcon,
  TextAaIcon,
  CursorClickIcon,
  ImagesIcon,
} from '@phosphor-icons/react'

import './styles/main.css'

export default function Branding() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = React.useState<
    'logo' | 'colors' | 'typography' | 'buttons' | 'imagery'
  >('logo')

  const renderContent = () => {
    switch (activeTab) {
      case 'logo':
        return <LogoSection />
      case 'colors':
        return <ColorsSection />
      case 'typography':
        return <TypographySection />
      case 'buttons':
        return <ButtonsSection />
      case 'imagery':
        return <ImagerySection />
    }
  }

  // Map each tab to its corresponding icon
  const tabIcons = {
    logo: PuzzlePieceIcon,
    colors: PaletteIcon,
    typography: TextAaIcon,
    buttons: CursorClickIcon,
    imagery: ImagesIcon,
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-alabaster-50 dark:bg-shark-950">
      <div className="max-w-7xl mx-auto p-4 lg:px-0 lg:py-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-center">
          <div>
            <Text variant="h1" className="text-shark-950 dark:text-alabaster-50">
              Design System
            </Text>
            <Text variant="b1" className="text-shark-950/60 dark:text-alabaster-50/60 mt-2 lg:mt-4">
              Complete design system, branding guidelines and reusable components.
            </Text>
          </div>

          {/* Payload Theme Selector */}
          <ThemeSelector />
        </div>
        <hr className="pt-2 lg:pt-8 text-shark-100 dark:text-alabaster-900" />
        <div>
          {/* Tabs */}
          <div className="flex border-b border-shark-950/60 dark:border-alabaster-50/60 ">
            {(['logo', 'colors', 'typography', 'buttons', 'imagery'] as const).map((tab) => {
              const Icon = tabIcons[tab]
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex gap-2 items-center px-3 md:px-6 py-3 dm-sans text-base uppercase transition-colors border-b-2 ${
                    activeTab === tab
                      ? 'border-shark-950 dark:border-alabaster-50 bg-gradient-to-t from-alabaster-200 to-alabaster-100 dark:from-shark-800 dark:to-shark-900 rounded-t text-shark-950 dark:text-alabaster-50'
                      : 'border-transparent text-shark-950/60 dark:text-alabaster-50/60 hover:text-shark-950 dark:hover:text-alabaster-50'
                  }`}
                  aria-label={tab}
                >
                  <Icon size={24} weight={activeTab === tab ? 'fill' : 'duotone'} />
                  <span className="hidden md:inline">{tab}</span>
                </button>
              )
            })}
          </div>
          {/* Content */}
          <div className="pb-16">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
