'use client'
import React, { useState } from 'react'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'

const tabs = [
  { id: 'primary' as const, label: 'Primary' },
  { id: 'secondary' as const, label: 'Secondary' },
  { id: 'icon' as const, label: 'Icon' },
]

export default function LogoSection() {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'icon'>('primary')

  return (
    <div className="space-y-8 p-4 lg:p-8 bg-alabaster-100/50 dark:bg-shark-900/30 rounded-b-[8px]">
      <div>
        <Text variant="h2" className="text-shark-950 dark:text-alabaster-50 mb-2">
          ◼ Logo System
        </Text>
        <Text variant="b1" className="text-shark-950/60 dark:text-alabaster-50/60 mt-2 lg:mt-4">
          Brand logos with automatic light/dark mode switching.
        </Text>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 border-b border-shark-950/20 dark:border-alabaster-50/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm uppercase font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-shark-950 dark:border-alabaster-50 text-shark-950 dark:text-alabaster-50'
                : 'border-transparent text-shark-950/60 dark:text-alabaster-50/60 hover:text-shark-950 dark:hover:text-alabaster-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Logo Display */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Light Version Preview */}
        <div className="p-3 lg:p-6 bg-alabaster-100 dark:bg-alabaster-100 rounded-lg border border-shark-950/60">
          <Text variant="b2" className="text-shark-950 font-medium mb-4">
            Light Mode
          </Text>
          <div className="flex items-center justify-center p-8 bg-alabaster-50 rounded border border-shark-950/20 min-h-[200px]">
            <Logo variant={activeTab} className="max-h-32 w-auto object-contain" />
          </div>
        </div>

        {/* Dark Version Preview */}
        <div className="p-6 bg-shark-900 dark:bg-shark-900 rounded-lg border border-alabaster-50/60">
          <Text variant="b2" className="text-alabaster-50 font-medium mb-4">
            Dark Mode
          </Text>
          <div className="flex items-center justify-center p-8 bg-shark-950 rounded border border-alabaster-50/20 min-h-[200px]">
            <Logo variant={activeTab} className="max-h-32 w-auto object-contain" />
          </div>
        </div>

        {/* Auto Switch Preview */}
        <div className="p-6 bg-alabaster-100 dark:bg-shark-900 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 transition-colors">
          <Text variant="b2" className="text-shark-950 dark:text-alabaster-50 font-medium mb-4">
            Auto (Current Theme)
          </Text>
          <div className="flex items-center justify-center p-8 bg-alabaster-50 dark:bg-shark-950 rounded border border-shark-950/20 dark:border-alabaster-50/20 min-h-[200px] transition-colors">
            <Logo variant={activeTab} className="max-h-32 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
