import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  height: 60,
  position: 'sticky',
  top: 0,
  backgroundColor: vars.colors.background.gray1,
});

export const wrapper = style({
  maxWidth: 1440,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 32px',
  margin: '0 auto',
});

export const logo = style({
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
