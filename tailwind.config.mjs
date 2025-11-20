import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',

        // Addtional Variables
        system: {
          light_100: 'rgba(251,251,253,1)',
          light_90: 'rgba(251,251,253,0.9)',
          light_80: 'rgba(251,251,253,0.8)',
          light_70: 'rgba(251,251,253,0.7)',
          light_60: 'rgba(251,251,253,0.6)',
          light_50: 'rgba(251,251,253,0.5)',
          light_40: 'rgba(251,251,253,0.4)',
          light_30: 'rgba(251,251,253,0.3)',
          light_20: 'rgba(251,251,253,0.2)',
          light_10: 'rgba(251,251,253,0.1)',

          dark_100: 'rgba(29,29,31,1)',
          dark_90: 'rgba(29,29,31,0.9)',
          dark_80: 'rgba(29,29,31,0.8)',
          dark_70: 'rgba(29,29,31,0.7)',
          dark_60: 'rgba(29,29,31,0.6)',
          dark_50: 'rgba(29,29,31,0.5)',
          dark_40: 'rgba(29,29,31,0.4)',
          dark_30: 'rgba(29,29,31,0.3)',
          dark_20: 'rgba(29,29,31,0.2)',
          dark_10: 'rgba(29,29,31,0.1)',
        },
        shark: {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#cfd0d2',
          300: '#adaeb3',
          400: '#84858c',
          500: '#696a71',
          600: '#595961',
          700: '#4c4d52',
          800: '#434347',
          900: '#3b3b3e',
          950: '#1d1d1f',
        },
        alabaster: {
          50: '#fbfbfd',
          100: '#eaeaf4',
          200: '#d0d1e7',
          300: '#a7aad2',
          400: '#787eb8',
          500: '#575da0',
          600: '#444885',
          700: '#383b6c',
          800: '#31335b',
          900: '#2d2e4d',
          950: '#1e1e33',
        },
        scooter: {
          50: '#ebfffe',
          100: '#ceffff',
          200: '#a2fdff',
          300: '#63f8fd',
          400: '#1ce9f4',
          500: '#00c3d0',
          600: '#03a3b7',
          700: '#0a8194',
          800: '#126778',
          900: '#145665',
          950: '#063946',
        },

      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
