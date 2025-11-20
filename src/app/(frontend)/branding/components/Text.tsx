'use client'
import React from 'react'

import '../styles/client.css'

interface TextProps {
  // Add fonts here after defining them in ../styles/client.css
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'b3' | 'b4'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  className?: string
  children: React.ReactNode
}

// Fixed text variants for consistency, variables can be passed as classnames.
const variantStyles = {
  h1: 'instrument-serif text-6xl lg:text-8xl tracking-tight',
  h2: 'instrument-serif text-4xl md:text-6xl font-normal tracking-tight',
  h3: 'instrument-serif text-3xl md:text-5xl font-normal tracking-tight',
  h4: 'dm-sans-font text-lg md:text-3xl font-medium',
  b1: 'dm-sans-font text-base md:text-xl font-medium',
  b2: 'dm-sans text-base md:text-xl font-normal',
  b3: 'dm-sans text-sm md:text-lg font-normal',
  b4: 'dm-sans text-xs md:text-base font-normal',
}

export const Text = ({
  variant = 'h1',
  as: Component = 'p',
  className = '',
  children,
}: TextProps) => {
  const variantClass = variantStyles[variant]
  return <Component className={` ${variantClass} ${className}`}>{children}</Component>
}
