import React from 'react'

// Modern glassmorphic button variants
const buttonVariants = {
  primary:
    'relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border border-shark-950/30 dark:border-alabaster-50/30 bg-shark-950/10 dark:bg-alabaster-50/10 backdrop-blur-md text-shark-950 dark:text-alabaster-50 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-shark-950 dark:before:bg-alabaster-50 before:translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 hover:text-alabaster-50 dark:hover:text-shark-950',

  secondary:
    'relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border-2 border-shark-950 dark:border-alabaster-50 bg-transparent text-shark-950 dark:text-alabaster-50 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-shark-950/5 dark:before:bg-alabaster-50/5 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300',

  accent:
    'relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border border-accent-600/30 bg-accent-600/10 backdrop-blur-md text-accent-700 dark:text-accent-400 overflow-hidden rounded-full before:absolute before:inset-0 before:bg-accent-600 before:translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 hover:text-alabaster-50',

  ghost:
    'relative px-8 py-4 font-semibold text-sm uppercase tracking-wide border border-transparent bg-transparent text-shark-950 dark:text-alabaster-50 overflow-hidden rounded-full hover:border-shark-950/20 dark:hover:border-alabaster-50/20 hover:bg-shark-950/5 dark:hover:bg-alabaster-50/5 transition-all duration-300',

  link: 'relative px-4 py-2 font-medium text-sm text-shark-950 dark:text-alabaster-50 bg-transparent hover:text-shark-700 dark:hover:text-alabaster-300 underline-offset-4 hover:underline transition-colors duration-200',
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
        className={`inline-flex items-center justify-center gap-2 group ${variantStyles} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
