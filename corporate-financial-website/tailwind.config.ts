module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Premium financial services color hierarchy
        text: {
          primary: '#1a365d',      // Deep navy blue for headings
          secondary: '#2d3748',    // Dark slate for body
          tertiary: '#4a5568',     // Muted slate for captions
          muted: '#718096',        // Muted blue-gray text
        },
        // Premium brand colors
        brand: {
          primary: '#1a365d',     // Navy blue
          secondary: '#2c5282',   // Deep sky blue
          accent: '#d69e2e',      // Gold accent
        },
        // Background colors
        background: {
          light: '#f1f5f9',       // Subtle warm gray
        },
        // Card background
        card: {
          background: '#f8fafc',  // Light card background
        },
        // Border colors
        border: {
          default: '#e2e8f0',     // Light gray
        }
      },
      fontFamily: {
        // Corporate font families
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        // Explicit naming for clarity
        'sans-corporate': ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        'serif-corporate': ['var(--font-serif)', 'Playfair Display', 'serif'],
        // Heading and body specific fonts
        heading: ['var(--font-serif)', 'Playfair Display', 'serif'],
        body: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display headings
        'display-1': ['4.5rem', { 
          lineHeight: '1.05', 
          fontWeight: '700',
          letterSpacing: '-0.02em'
        }],
        'display-2': ['3.5rem', { 
          lineHeight: '1.1', 
          fontWeight: '600',
          letterSpacing: '-0.015em'
        }],
        'display-3': ['2.75rem', { 
          lineHeight: '1.15', 
          fontWeight: '600',
          letterSpacing: '-0.01em'
        }],
        
        // Section headings
        'heading-1': ['2.25rem', { 
          lineHeight: '1.2', 
          fontWeight: '600',
          letterSpacing: '-0.01em'
        }],
        'heading-2': ['1.875rem', { 
          lineHeight: '1.25', 
          fontWeight: '500',
          letterSpacing: '-0.005em'
        }],
        'heading-3': ['1.5rem', { 
          lineHeight: '1.3', 
          fontWeight: '500'
        }],
        'heading-4': ['1.25rem', { 
          lineHeight: '1.35', 
          fontWeight: '500'
        }],
        
        // Body text variations
        'body-xl': ['1.25rem', { 
          lineHeight: '1.6', 
          fontWeight: '400'
        }],
        'body-large': ['1.125rem', { 
          lineHeight: '1.65', 
          fontWeight: '400'
        }],
        'body': ['1rem', { 
          lineHeight: '1.7', 
          fontWeight: '400'
        }],
        'body-small': ['0.875rem', { 
          lineHeight: '1.6', 
          fontWeight: '400'
        }],
        'caption': ['0.75rem', { 
          lineHeight: '1.5', 
          fontWeight: '400'
        }],
        
        // Utility sizes
        'micro': ['0.625rem', { 
          lineHeight: '1.4', 
          fontWeight: '400'
        }],
      },
      // Enhanced typography utilities
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            '[class~="lead"]': {
              color: '#334155',
            },
            a: {
              color: '#0284c7',
              '&:hover': {
                color: '#0369a1',
              },
            },
            strong: {
              color: '#0f172a',
            },
            h1: {
              color: '#0f172a',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
            },
            h2: {
              color: '#0f172a',
              fontFamily: 'var(--font-serif)',
              fontWeight: '600',
            },
            h3: {
              color: '#0f172a',
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
            },
            h4: {
              color: '#334155',
              fontFamily: 'var(--font-sans)',
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}