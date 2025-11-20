'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

import { Button } from '@/app/(frontend)/branding/components/Button'
import type { Header } from '@/payload-types'

// Static nav items
const STATIC_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Resources', href: '/resources' },
]

interface HeaderNavProps {
  data?: Header | null
  logoLight?: string
  logoDark?: string
  siteName?: string
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  data,
  logoLight = '/logo-dark.png',
  logoDark = '/logo-dark.png',
  siteName = 'Magic Unbound',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dynamicItems = data?.navItems ?? []

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={isScrolled ? logoDark : logoLight} alt={siteName} className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {STATIC_NAV.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-white text-sm md:text-base uppercase font-normal hover:opacity-70 transition-opacity ease-in"
              >
                {item.label}
              </Link>
            ))}
            {dynamicItems &&
              Array.isArray(dynamicItems) &&
              dynamicItems.map((item, i) => {
                if (!item?.link) return null

                const href =
                  item.link.type === 'reference' && item.link.reference
                    ? `/${typeof item.link.reference.value === 'string' ? item.link.reference.value : item.link.reference.value?.slug || ''}`
                    : item.link.url || '#'

                return (
                  <Link
                    key={`cms-${i}`}
                    href={href}
                    target={item.link.newTab ? '_blank' : undefined}
                    rel={item.link.newTab ? 'noopener noreferrer' : undefined}
                    className="text-white text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    {item.link.label}
                  </Link>
                )
              })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-2 mt-4">
              {STATIC_NAV.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-white py-2 px-4 hover:bg-white/10 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {dynamicItems &&
                Array.isArray(dynamicItems) &&
                dynamicItems.map((item, i) => {
                  if (!item?.link) return null

                  const href =
                    item.link.type === 'reference' && item.link.reference
                      ? `/${typeof item.link.reference.value === 'string' ? item.link.reference.value : item.link.reference.value?.slug || ''}`
                      : item.link.url || '#'

                  return (
                    <Link
                      key={`cms-mobile-${i}`}
                      href={href}
                      target={item.link.newTab ? '_blank' : undefined}
                      rel={item.link.newTab ? 'noopener noreferrer' : undefined}
                      className="text-white py-2 px-4 hover:bg-white/10 rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.link.label}
                    </Link>
                  )
                })}
              <Link
                href="/contact"
                className="mt-2 py-2 px-4 bg-white text-black text-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
