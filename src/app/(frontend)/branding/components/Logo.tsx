'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

// Import ALL your images
import iconLight from '../assets/logo/icon-light.png'
import iconDark from '../assets/logo/icon-dark.png'
import logoLight from '../assets/logo/logo-primary-light.png'
import logoDark from '../assets/logo/logo-primary-dark.png'
import secondaryLight from '../assets/logo/logo-secondary-light.png'
import secondaryDark from '../assets/logo/logo-secondary-dark.png'

const logoData = {
  icon: {
    light: iconLight,
    dark: iconDark,
    name: 'Brand Icon',
  },
  primary: {
    light: logoLight,
    dark: logoDark,
    name: 'Primary Logo',
  },
  secondary: {
    light: secondaryLight,
    dark: secondaryDark,
    name: 'Secondary Logo',
  },
}

interface LogoProps {
  variant?: 'icon' | 'primary' | 'secondary'
  className?: string
  alt?: string
}

export const Logo = ({
  variant = 'primary',
  className = 'max-h-32 w-auto object-contain',
  alt,
}: LogoProps) => {
  const getLogoData = (): {
    src: StaticImageData
    darkSrc: StaticImageData | null
    alt: string
  } => {
    switch (variant) {
      case 'icon':
        return {
          src: logoData.icon.light,
          darkSrc: logoData.icon.dark,
          alt: alt || logoData.icon.name,
        }
      case 'primary':
        return {
          src: logoData.primary.light,
          darkSrc: logoData.primary.dark,
          alt: alt || logoData.primary.name,
        }
      case 'secondary':
        return {
          src: logoData.secondary.light,
          darkSrc: logoData.secondary.dark,
          alt: alt || logoData.secondary.name,
        }
      default:
        return {
          src: logoData.primary.light,
          darkSrc: logoData.primary.dark,
          alt: alt || logoData.primary.name,
        }
    }
  }

  const { src, darkSrc, alt: logoAlt } = getLogoData()

  // If there's no dark version, just show one image
  if (!darkSrc) {
    return <Image src={src} alt={logoAlt} className={className} />
  }

  // Show light version by default, dark version in dark mode
  return (
    <>
      <Image src={src} alt={logoAlt} className={`${className} dark:hidden`} />
      <Image src={darkSrc} alt={logoAlt} className={`${className} hidden dark:block`} />
    </>
  )
}
