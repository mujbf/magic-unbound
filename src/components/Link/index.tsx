import { Button } from '@/app/(frontend)/branding/components/Button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'default' | 'outline' | 'primary' | 'secondary' | 'ghost' | 'accent' | 'link' | null
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  size?: 'default' | 'lg' | 'sm' | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'primary',
    children,
    className,
    label,
    newTab,
    reference,
    url,
    size,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  // Map 'default' to 'primary' and 'outline' to 'secondary', all others remain the same
  const getButtonVariant = (appearance: string): 'primary' | 'secondary' | 'ghost' | 'accent' | 'link' => {
    if (appearance === 'default') return 'primary'
    if (appearance === 'outline') return 'secondary'
    return appearance as 'primary' | 'secondary' | 'ghost' | 'accent' | 'link'
  }

  const buttonVariant = getButtonVariant(appearance || 'primary')

  return (
    <Link href={href || url || ''} {...newTabProps} className={cn(className)}>
      <Button variant={buttonVariant} size={size || 'default'}>
        {label && label}
        {children && children}
      </Button>
    </Link>
  )
}

