import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  gap: 24,
  padding: '18px 16px',
  backgroundColor: vars.colors.interactive.gray3,
  borderRadius: 9,
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const title = style({
  fontSize: 16,
  fontWeight: 700,
});

export const description = style({
  fontSize: 14,
  fontWeight: 700,
  color: vars.colors.content.gray11,
});
