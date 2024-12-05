import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    primary: null,
    bg100: null,
    bg200: null,
    bg300: null,
    bg400: null,
    content100: null,
    content200: null,
    content300: null,
    content400: null,
  },
});

export const light = createTheme(vars, {
  colors: {
    primary: '#50b654',
    bg100: '#FFFFFF',
    bg200: '#CFCFCF',
    bg300: '#8C8C8C',
    bg400: '#141517',
    content100: '#121212',
    content200: '#595959',
    content300: '#A0A0A0',
    content400: '#FFFFFF',
  },
});

// export const dark = createTheme(vars, {});
