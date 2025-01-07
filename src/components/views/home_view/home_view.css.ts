import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 32,
});

export const section = style({
  gridColumn: 'span 3',
  display: 'flex',
  flexDirection: 'column',
  gap: 64,
});

export const aside = style({
  borderRadius: 8,
  backgroundColor: vars.colors.interactive.gray3,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const title = style({
  fontSize: 24,
  fontWeight: 'bold',
});

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 32,
});
