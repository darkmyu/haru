import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  height: '100dvh',
  backgroundColor: vars.colors.background.gray2,
});

export const main = style({
  maxWidth: 1440,
  padding: '64px 32px',
  margin: '0 auto',
});
