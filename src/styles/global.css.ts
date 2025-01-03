import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

globalStyle('body', {
  color: vars.colors.content.gray12,
});

globalStyle('button, input, textarea, pre', {
  fontFamily: 'inherit',
});
