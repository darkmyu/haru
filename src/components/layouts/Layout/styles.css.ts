import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const root = style({
  height: '100dvh',
  backgroundColor: vars.colors.background,
});
