'use client'
import React from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, ArrowRight } from 'lucide-react'

import { Button } from '@/app/(frontend)/branding/components/Button'

// Static nav items (same as header)
const STATIC_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Resources', href: '/resources' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
]

interface FooterProps {
  logo?: string
  siteName?: string
}

export const Footer: React.FC<FooterProps> = ({
  logo = '/logo-dark.png',
  siteName = 'Magic Unbound',
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={logo} alt={siteName} className="h-6 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {STATIC_NAV.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-white text-sm md:text-base uppercase font-normal hover:opacity-70 transition-opacity ease-in"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          {/* Copyright */}
          <div className="text-white/60 text-sm order-2 md:order-1">
            © {currentYear} {siteName}. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            {LEGAL_LINKS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 order-3">
            {SOCIAL_LINKS.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label={item.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Mobile Contact Button */}
        <div className="md:hidden mt-6 flex justify-center">
          <Button variant="primary" icon={<ArrowRight size={18} />}>
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
