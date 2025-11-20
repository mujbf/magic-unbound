import React from 'react'
import { ArrowRight, Send, ChevronRight, Plus, Check } from 'lucide-react'

// Simple button variants - all properties are optional
const buttonVariants = {
  primary:
    'py-3 px-6 bg-shark-950 dark:bg-alabaster-50 text-alabaster-50 dark:text-shark-950 hover:bg-shark-800 dark:hover:bg-alabaster-200 active:bg-shark-900 dark:active:bg-alabaster-300',

  secondary:
    'py-3 px-6 border-2 border-shark-950 dark:border-alabaster-50 bg-transparent text-shark-950 dark:text-alabaster-50 hover:bg-shark-950/10 dark:hover:bg-alabaster-50/10 active:bg-shark-950/20 dark:active:bg-alabaster-50/20',

  accent: 'py-3 px-6 bg-accent-600 text-alabaster-50 hover:bg-accent-700 active:bg-accent-800',

  ghost:
    'py-3 px-6 bg-transparent text-shark-950 dark:text-alabaster-50 hover:bg-shark-950/5 dark:hover:bg-alabaster-50/5 active:bg-shark-950/10 dark:active:bg-alabaster-50/10',

  link: 'py-2 px-0 bg-transparent text-shark-950 dark:text-alabaster-50 hover:text-shark-700 dark:hover:text-alabaster-300 underline-offset-4 hover:underline',
}

// Reusable Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', children, icon, iconPosition = 'right', className = '', ...props },
    ref,
  ) => {
    const variantStyles = buttonVariants[variant]

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-medium rounded transition-all duration-200 ease-out ${variantStyles} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </button>
    )
  },
)

Button.displayName = 'Button'

// Documentation section data
const buttonData = {
  primary: {
    name: 'Primary Button',
    description: 'Main call-to-action button with solid background',
    example: 'Get Started',
    icon: <ArrowRight size={18} />,
  },
  secondary: {
    name: 'Secondary Button',
    description: 'Outlined button for secondary actions',
    example: 'Learn More',
    icon: <ChevronRight size={18} />,
  },
  accent: {
    name: 'Accent Button',
    description: 'Highlighted button using accent color',
    example: 'Subscribe',
    icon: <Check size={18} />,
  },
  ghost: {
    name: 'Ghost Button',
    description: 'Subtle button with minimal styling',
    example: 'View All',
    icon: <ChevronRight size={18} />,
  },
  link: {
    name: 'Link Button',
    description: 'Text button styled as an underlined link',
    example: 'Read Documentation',
    icon: <ArrowRight size={16} />,
  },
}

// Documentation Preview Component
const ButtonPreview = ({ variant }: { variant: keyof typeof buttonData }) => {
  const btn = buttonData[variant]

  return (
    <div className="p-6 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 bg-alabaster-100 dark:bg-shark-900 transition-colors">
      <div className="grid grid-cols-2 gap-1 mb-4 text-sm text-shark-950/80 dark:text-alabaster-50/80">
        <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
          <span className="font-medium">Name:</span> {btn.name}
        </div>
        <div className="p-2 bg-shark-950/10 dark:bg-alabaster-50/10 rounded">
          <span className="font-medium">Description:</span> {btn.description}
        </div>
      </div>

      <div className="border-l-2 border-shark-950/60 dark:border-alabaster-50/60 pl-4 flex flex-wrap gap-3">
        <Button variant={variant}>{btn.example}</Button>
        <Button variant={variant} icon={btn.icon}>
          {btn.example}
        </Button>
        <Button variant={variant} icon={btn.icon} iconPosition="left">
          {btn.example}
        </Button>
      </div>
    </div>
  )
}

// Main Documentation Section
export default function ButtonsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="skr-type-heading mb-2 text-shark-950 dark:text-alabaster-50">
          ◼ Button Components
        </h2>
        <p className="skr-type-paragraph text-shark-950/60 dark:text-alabaster-50/60">
          Modern, minimal button variants that adapt to your color palette.
        </p>
      </div>

      <div className="space-y-4">
        {Object.keys(buttonData).map((key) => (
          <ButtonPreview key={key} variant={key as keyof typeof buttonData} />
        ))}
      </div>

      {/* Usage Examples */}
      <div className="p-6 rounded-lg border border-shark-950/60 dark:border-alabaster-50/60 bg-alabaster-100 dark:bg-shark-900">
        <h3 className="text-xl font-medium mb-4 text-shark-950 dark:text-alabaster-50">
          Interactive Examples
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            icon={<Send size={18} />}
            onClick={() => alert('Primary clicked!')}
          >
            Send Message
          </Button>
          <Button
            variant="secondary"
            icon={<Plus size={18} />}
            onClick={() => alert('Secondary clicked!')}
          >
            Add Item
          </Button>
          <Button
            variant="accent"
            icon={<Check size={18} />}
            onClick={() => alert('Accent clicked!')}
          >
            Confirm
          </Button>
          <Button variant="ghost" onClick={() => alert('Ghost clicked!')}>
            Cancel
          </Button>
          <Button
            variant="link"
            icon={<ArrowRight size={16} />}
            onClick={() => alert('Link clicked!')}
          >
            View Details
          </Button>
        </div>

        <div className="mt-6 p-4 bg-shark-950/10 dark:bg-alabaster-50/10 rounded text-sm text-shark-950/80 dark:text-alabaster-50/80">
          <p className="font-medium mb-2">Usage:</p>
          <code className="block">
            {`<Button variant="primary" icon={<ArrowRight size={18} />}>Click Me</Button>`}
          </code>
        </div>
      </div>
    </div>
  )
}
