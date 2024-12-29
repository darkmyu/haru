import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  height: 60,
  position: 'sticky',
  top: 0,
  backgroundColor: vars.colors.background.gray1,
});

export const container = style({
  height: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 32px',
});

export const title = style({
  fontSize: 24,
  fontWeight: 700,
  fontStyle: 'italic',
  cursor: 'pointer',
});

export const toolkit = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const theme = style({
  cursor: 'pointer',
});
