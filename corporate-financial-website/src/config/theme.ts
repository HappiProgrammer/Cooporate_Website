import { colors, typography, spacing, borders, shadows } from '../styles/tokens/design-tokens';

export const theme = {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  
  // Component-specific configurations
  components: {
    button: {
      base: {
        borderRadius: borders.radius.md,
        fontWeight: typography.fontWeights.semibold,
        transition: 'all 150ms ease-in-out',
      },
      sizes: {
        sm: {
          padding: `${spacing.sm} ${spacing.md}`,
          fontSize: typography.fontSizes.sm,
        },
        md: {
          padding: `${spacing.md} ${spacing.lg}`,
          fontSize: typography.fontSizes.base,
        },
        lg: {
          padding: `${spacing.lg} ${spacing.xl}`,
          fontSize: typography.fontSizes.lg,
        },
      },
      variants: {
        primary: {
          backgroundColor: colors.primary[600],
          color: colors.neutral[50],
          border: 'none',
          '&:hover': {
            backgroundColor: colors.primary[700],
          },
          '&:focus': {
            outline: '2px solid',
            outlineColor: colors.primary[500],
            outlineOffset: '2px',
          },
          '&:disabled': {
            backgroundColor: colors.neutral[300],
            cursor: 'not-allowed',
          },
        },
        secondary: {
          backgroundColor: colors.secondary[100],
          color: colors.secondary[700],
          border: 'none',
          '&:hover': {
            backgroundColor: colors.secondary[200],
          },
          '&:focus': {
            outline: '2px solid',
            outlineColor: colors.secondary[500],
            outlineOffset: '2px',
          },
        },
        outline: {
          backgroundColor: 'transparent',
          color: colors.primary[600],
          border: `1px solid ${colors.primary[600]}`,
          '&:hover': {
            backgroundColor: colors.primary[50],
          },
          '&:focus': {
            outline: '2px solid',
            outlineColor: colors.primary[500],
            outlineOffset: '2px',
          },
        },
      },
    },
    
    card: {
      base: {
        borderRadius: borders.radius.lg,
        boxShadow: shadows.md,
        backgroundColor: colors.neutral[50],
        transition: 'box-shadow 300ms ease-in-out',
      },
      variants: {
        elevated: {
          boxShadow: shadows.xl,
          '&:hover': {
            boxShadow: shadows['2xl'],
          },
        },
        outlined: {
          border: `1px solid ${colors.neutral[200]}`,
          boxShadow: 'none',
          backgroundColor: 'white',
        },
        filled: {
          backgroundColor: colors.secondary[50],
          boxShadow: 'none',
        },
      },
      padding: {
        none: '0',
        sm: spacing.md,
        md: spacing.lg,
        lg: spacing.xl,
      },
    },
    
    typography: {
      heading: {
        fontFamily: typography.fontFamilies.heading.join(', '),
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        color: colors.neutral[900],
      },
      body: {
        fontFamily: typography.fontFamilies.sans.join(', '),
        fontWeight: typography.fontWeights.normal,
        lineHeight: typography.lineHeights.relaxed,
        color: colors.neutral[700],
      },
    },
  },
  
  // Layout configurations
  layout: {
    container: {
      maxWidth: '1280px',
      paddingX: {
        mobile: spacing.md,
        tablet: spacing.lg,
        desktop: spacing.xl,
      },
    },
    grid: {
      columns: 12,
      gap: spacing.lg,
    },
  },
  
  // Animation configurations
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'ease-in-out',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
    },
  },
};

export type Theme = typeof theme;