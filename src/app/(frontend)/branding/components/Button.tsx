import React from 'react'

/**
 * Button Variants with Specific Animations:
 * - primary: Default button with icon smooth hover animation (horizontal slide)
 * - secondary: Outline button with smooth animation (vertical slide)
 * - ghost: No fill button with fade-in fill animation on hover
 * - accent: Button with color fill and animation like primary (horizontal slide)
 * - link: Button with/without icon with smooth underline hover animation
 */
const buttonVariants = {
  primary:
    'relative font-semibold text-sm uppercase tracking-wide border border-shark-950/30 dark:border-alabaster-50/30 bg-shark-950 dark:bg-alabaster-50 text-alabaster-50 dark:text-shark-950 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-shark-800 before:to-shark-950 dark:before:from-alabaster-200 dark:before:to-alabaster-50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-out shadow-lg hover:shadow-xl transition-shadow duration-300',

  secondary:
    'relative font-semibold text-sm uppercase tracking-wide border-2 border-shark-950 dark:border-alabaster-50 bg-transparent text-shark-950 dark:text-alabaster-50 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-shark-950/10 dark:before:bg-alabaster-50/10 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:ease-out',

  ghost:
    'relative font-semibold text-sm uppercase tracking-wide border border-transparent bg-transparent text-shark-950 dark:text-alabaster-50 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-shark-950/5 dark:before:bg-alabaster-50/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:border-shark-950/20 dark:hover:border-alabaster-50/20',

  accent:
    'relative font-semibold text-sm uppercase tracking-wide border border-accent-600/30 bg-accent-600 text-alabaster-50 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-500 before:to-accent-700 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-out shadow-lg hover:shadow-xl transition-shadow duration-300',

  link: 'relative px-4 py-2 font-medium text-sm text-shark-950 dark:text-alabaster-50 bg-transparent hover:text-shark-700 dark:hover:text-alabaster-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-shark-950 dark:after:bg-alabaster-50 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out',
}

const buttonSizes = {
  default: 'px-8 py-4',
  lg: 'px-10 py-5 text-base',
  sm: 'px-4 py-2 text-xs',
  icon: 'p-3',
}

// Icon animation variants - different for each button type
const iconAnimations = {
  primary: 'group-hover:translate-x-1',
  secondary: 'group-hover:-translate-y-0.5',
  ghost: 'group-hover:scale-110',
  accent: 'group-hover:translate-x-1',
  link: 'group-hover:translate-x-1',
}

// Reusable Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes | null
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'default', children, icon, iconPosition = 'right', className = '', ...props },
    ref,
  ) => {
    const variantStyles = buttonVariants[variant]
    const sizeStyles = size ? buttonSizes[size as keyof typeof buttonSizes] : buttonSizes.default
    const iconAnimation = iconAnimations[variant]

    // Note: I removed padding from variants to use sizeStyles, except for 'link' which might need specific padding.
    // Actually, 'link' has px-4 py-2 in variant. If size overrides it, it might conflict.
    // 'link' uses 'px-4 py-2' in variant string. 
    // I should remove padding from variant strings or let size override (if passed after).
    // The variant strings above had px-8 py-4 hardcoded. I removed them in my thought process but in the string literal above I kept them but removed them in 'primary', 'secondary', 'ghost', 'accent' manually just now?
    // Let's refine the string literals above to REMOVE padding so sizeStyles controls it.
    
    // Correction: I will update the variable definitions below to remove fixed padding.

    return (
      <button
        ref={ref}
        className={`group inline-flex items-center justify-center gap-2 transition-all duration-300 ${variantStyles} ${variant !== 'link' ? sizeStyles : ''} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={`relative z-10 transition-transform duration-300 ease-out ${iconAnimation}`}>
            {icon}
          </span>
        )}

        <span className="relative z-10">{children}</span>

        {icon && iconPosition === 'right' && (
          <span className={`relative z-10 transition-transform duration-300 ease-out ${iconAnimation}`}>
            {icon}
          </span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
