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
        color: vars.colors.gray12,
        backgroundColor: vars.colors.gray4,
      },
      indigo: {
        color: vars.colors.gray1,
        backgroundColor: vars.colors.indigo10,
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
    /** outlined styles */
    {
      variants: { variant: 'outlined', color: 'gray' },
      style: { backgroundColor: 'transparent', borderColor: vars.colors.gray10 },
    },
    {
      variants: { variant: 'outlined', color: 'indigo' },
      style: { backgroundColor: 'transparent', borderColor: vars.colors.indigo10, color: vars.colors.indigo10 },
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
