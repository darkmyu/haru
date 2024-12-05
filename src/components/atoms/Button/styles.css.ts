import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const button = recipe({
  base: {
    border: 'none',
  },

  variants: {
    color: {
      base: {
        color: vars.colors.content400,
        backgroundColor: vars.colors.primary,
      },
      dark: {
        color: vars.colors.content400,
        backgroundColor: vars.colors.bg400,
      },
      gray: {
        color: vars.colors.content100,
        backgroundColor: vars.colors.bg200,
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
      semi: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },

  defaultVariants: {
    color: 'base',
    radius: 'small',
    weight: 'normal',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
