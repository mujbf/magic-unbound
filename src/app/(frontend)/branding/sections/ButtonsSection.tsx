import React from 'react'
import { Button } from '../components/Button'
import {
  ArrowRight,
  Send,
  ChevronRight,
  Plus,
  Check,
  Sparkle,
  Download,
  Play,
  Heart,
  Star,
} from 'lucide-react'

// Documentation section data with detailed descriptions
const buttonData = {
  primary: {
    name: 'Primary',
    description: 'Default button with horizontal slide animation',
    animation: 'Smooth gradient slide from left to right on hover',
    useCases: 'Main CTAs, Form submissions, Primary actions',
    example: 'Get Started',
    icon: <ArrowRight size={18} />,
  },
  secondary: {
    name: 'Secondary',
    description: 'Outline button with vertical slide animation',
    animation: 'Background slides up from bottom on hover',
    useCases: 'Secondary actions, Cancel buttons, Alternative CTAs',
    example: 'Learn More',
    icon: <ChevronRight size={18} />,
  },
  ghost: {
    name: 'Ghost',
    description: 'Transparent button with fade-in fill animation',
    animation: 'Background fades in smoothly on hover',
    useCases: 'Subtle actions, Menu items, Low-priority buttons',
    example: 'View All',
    icon: <Plus size={18} />,
  },
  accent: {
    name: 'Accent',
    description: 'Accent color button with horizontal animation',
    animation: 'Gradient slide animation similar to primary',
    useCases: 'Special offers, Promotions, Highlighted actions',
    example: 'Subscribe',
    icon: <Sparkle size={18} />,
  },
  link: {
    name: 'Link',
    description: 'Text button with smooth underline animation',
    animation: 'Underline scales in from left to right on hover',
    useCases: 'Navigation links, Read more, Text-based actions',
    example: 'Read More',
    icon: <ArrowRight size={16} />,
  },
}

// Documentation Preview Component
const ButtonPreview = ({ variant }: { variant: keyof typeof buttonData }) => {
  const btn = buttonData[variant]

  return (
    <div className="p-6 rounded-lg border border-shark-950/10 dark:border-alabaster-50/10 bg-alabaster-50 dark:bg-shark-900 transition-colors shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-shark-950 dark:text-alabaster-50 mb-2">
          {btn.name}
        </h3>
        <p className="text-shark-950/70 dark:text-alabaster-50/70 mb-3">{btn.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="font-semibold text-shark-950 dark:text-alabaster-50">Animation:</span>
            <span className="text-shark-950/60 dark:text-alabaster-50/60">{btn.animation}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold text-shark-950 dark:text-alabaster-50">Use Cases:</span>
            <span className="text-shark-950/60 dark:text-alabaster-50/60">{btn.useCases}</span>
          </div>
        </div>
      </div>

      {/* Button Variants */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium text-shark-950/50 dark:text-alabaster-50/50 mb-2 uppercase tracking-wider">
            Without Icon
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant={variant}>{btn.example}</Button>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-shark-950/50 dark:text-alabaster-50/50 mb-2 uppercase tracking-wider">
            With Icon (Right)
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant={variant} icon={btn.icon}>
              {btn.example}
            </Button>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-shark-950/50 dark:text-alabaster-50/50 mb-2 uppercase tracking-wider">
            With Icon (Left)
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant={variant} icon={btn.icon} iconPosition="left">
              {btn.example}
            </Button>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-6 p-4 bg-shark-950/5 dark:bg-alabaster-50/5 rounded text-xs font-mono overflow-x-auto">
        <pre className="text-shark-950 dark:text-alabaster-50">
          {`<Button variant="${variant}" icon={<Icon />}>\n  ${btn.example}\n</Button>`}
        </pre>
      </div>
    </div>
  )
}

// Main Documentation Section
export default function ButtonsSection() {
  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-shark-950 dark:text-alabaster-50">
          Button System
        </h2>
        <p className="text-lg text-shark-950/70 dark:text-alabaster-50/70 leading-relaxed">
          A comprehensive button system with 5 distinct variants, each featuring unique hover
          animations and optimized for different use cases. All buttons are fully accessible and
          support both light and dark themes.
        </p>
      </div>

      {/* All Button Variants */}
      <div className="space-y-8">
        {Object.keys(buttonData).map((key) => (
          <ButtonPreview key={key} variant={key as keyof typeof buttonData} />
        ))}
      </div>

      {/* Interactive Playground */}
      <div className="p-8 rounded-lg border border-shark-950/10 dark:border-alabaster-50/10 bg-gradient-to-br from-alabaster-100 to-alabaster-200 dark:from-shark-900 dark:to-shark-800 shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-shark-950 dark:text-alabaster-50">
          Interactive Playground
        </h3>
        <p className="text-shark-950/70 dark:text-alabaster-50/70 mb-8">
          Click the buttons below to test their interactions and animations. Each button variant
          responds differently to hover and click events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button
            variant="primary"
            icon={<Send size={18} />}
            onClick={() => alert('Primary button clicked! 🚀')}
          >
            Send Message
          </Button>

          <Button
            variant="secondary"
            icon={<Download size={18} />}
            onClick={() => alert('Secondary button clicked! 📥')}
          >
            Download
          </Button>

          <Button
            variant="ghost"
            icon={<Plus size={18} />}
            onClick={() => alert('Ghost button clicked! ✨')}
          >
            Add Item
          </Button>

          <Button
            variant="accent"
            icon={<Star size={18} />}
            onClick={() => alert('Accent button clicked! ⭐')}
          >
            Special Offer
          </Button>

          <Button
            variant="link"
            icon={<ArrowRight size={16} />}
            onClick={() => alert('Link button clicked! 🔗')}
          >
            Learn More
          </Button>

          <Button
            variant="primary"
            icon={<Play size={18} />}
            iconPosition="left"
            onClick={() => alert('Watch now! 🎬')}
          >
            Watch Video
          </Button>

          <Button
            variant="secondary"
            icon={<Heart size={18} />}
            iconPosition="left"
            onClick={() => alert('Added to favorites! ❤️')}
          >
            Save
          </Button>

          <Button
            variant="accent"
            icon={<Check size={18} />}
            onClick={() => alert('Confirmed! ✅')}
          >
            Confirm
          </Button>

          <Button
            variant="ghost"
            onClick={() => alert('Cancelled! 🚫')}
          >
            Cancel
          </Button>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-8 rounded-lg border border-shark-950/10 dark:border-alabaster-50/10 bg-alabaster-50 dark:bg-shark-900">
        <h3 className="text-2xl font-bold mb-4 text-shark-950 dark:text-alabaster-50">
          Best Practices
        </h3>
        <div className="space-y-4 text-shark-950/70 dark:text-alabaster-50/70">
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Consistency
            </h4>
            <p>
              Use the same button variant for similar actions throughout your application to
              maintain consistency and improve user experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Hierarchy
            </h4>
            <p>
              Use <strong>primary</strong> for main actions, <strong>secondary</strong> for
              alternative actions, and <strong>ghost</strong> or <strong>link</strong> for
              low-priority actions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Accessibility
            </h4>
            <p>
              All buttons have proper focus states and are keyboard accessible. Ensure button
              labels are clear and descriptive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">Icons</h4>
            <p>
              Icons should reinforce the button&apos;s action. Use right-positioned icons for forward
              actions and left-positioned for backward/previous actions.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="p-8 rounded-lg border border-shark-950/10 dark:border-alabaster-50/10 bg-alabaster-50 dark:bg-shark-900">
        <h3 className="text-2xl font-bold mb-4 text-shark-950 dark:text-alabaster-50">
          Implementation
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Import the Button
            </h4>
            <pre className="p-4 bg-shark-950/5 dark:bg-alabaster-50/5 rounded text-sm font-mono overflow-x-auto">
              <code className="text-shark-950 dark:text-alabaster-50">
                {`import { Button } from '@/app/(frontend)/branding/components/Button'`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Basic Usage
            </h4>
            <pre className="p-4 bg-shark-950/5 dark:bg-alabaster-50/5 rounded text-sm font-mono overflow-x-auto">
              <code className="text-shark-950 dark:text-alabaster-50">
                {`<Button variant="primary">Click Me</Button>`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              With Icon
            </h4>
            <pre className="p-4 bg-shark-950/5 dark:bg-alabaster-50/5 rounded text-sm font-mono overflow-x-auto">
              <code className="text-shark-950 dark:text-alabaster-50">
                {`<Button variant="primary" icon={<ArrowRight />}>\n  Get Started\n</Button>`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold text-shark-950 dark:text-alabaster-50 mb-2">
              Available Props
            </h4>
            <div className="p-4 bg-shark-950/5 dark:bg-alabaster-50/5 rounded text-sm">
              <ul className="space-y-2 text-shark-950 dark:text-alabaster-50">
                <li>
                  <code className="font-mono">variant</code>: &apos;primary&apos; | &apos;secondary&apos; | &apos;ghost&apos; |
                  &apos;accent&apos; | &apos;link&apos;
                </li>
                <li>
                  <code className="font-mono">icon</code>: React.ReactNode (optional)
                </li>
                <li>
                  <code className="font-mono">iconPosition</code>: &apos;left&apos; | &apos;right&apos; (default:
                  &apos;right&apos;)
                </li>
                <li>
                  <code className="font-mono">className</code>: string (optional, for custom
                  styling)
                </li>
                <li>All standard HTML button attributes are also supported</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
