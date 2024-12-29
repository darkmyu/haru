import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const button = recipe({
  base: {
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  variants: {
    variant: {
      contained: {
        border: 'none',
      },
      outlined: {
        border: '1px solid',
      },
    },
    color: {
      gray: {
        color: vars.colors.content,
        backgroundColor: vars.colors.interactive.gray4,
      },
      indigo: {
        color: vars.colors.contentInverse,
        backgroundColor: vars.colors.primary,
      },
    },
    radius: {
      small: {
        borderRadius: 4,
      },
      medium: {
        borderRadius: 12,
      },
      large: {
        borderRadius: 24,
      },
    },
    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
    size: {
      small: {
        fontSize: 13,
        padding: '4px 10px',
      },
      medium: {
        fontSize: 14,
        padding: '6px 16px',
      },
      large: {
        fontSize: 15,
        padding: '8px 22px',
      },
    },
  },

  compoundVariants: [
    // outlined compound styles
    {
      variants: { variant: 'outlined', color: 'gray' },
      style: { backgroundColor: 'transparent', borderColor: vars.colors.border.gray7 },
    },
    {
      variants: { variant: 'outlined', color: 'indigo' },
      style: { backgroundColor: 'transparent', borderColor: vars.colors.primary, color: vars.colors.primary },
    },
  ],

  defaultVariants: {
    variant: 'contained',
    color: 'gray',
    radius: 'small',
    weight: 'semiBold',
    size: 'large',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
