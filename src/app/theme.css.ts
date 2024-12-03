import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  colors: {},
});

export const lightTheme = createGlobalThemeContract({});
