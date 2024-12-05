import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const button = recipe({
  base: {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      contained: {
        border: 'none',
      },
      outlined: {
        border: '1px solid',
      },
      text: {
        border: 'none',
        backgroundColor: 'transparent',
      },
    },
    color: {
      primary: {},
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
      semi: {
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
    {
      variants: {
        variant: 'contained',
        color: 'primary',
      },
      style: {
        color: vars.colors.gray1,
        backgroundColor: vars.colors.grass9,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grass10,
          },
        },
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'primary',
      },
      style: {
        color: vars.colors.grass9,
        backgroundColor: 'transparent',
        borderColor: vars.colors.grass9,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grassA2,
          },
        },
      },
    },
    {
      variants: {
        variant: 'text',
        color: 'primary',
      },
      style: {
        color: vars.colors.grass9,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grassA2,
          },
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'contained',
    color: 'primary',
    radius: 'small',
    weight: 'semi',
    size: 'small',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
