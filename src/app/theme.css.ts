import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    teal100: null,
    teal200: null,
    teal300: null,
    teal400: null,
    teal500: null,
    teal600: null,
    teal700: null,
    teal800: null,
    teal900: null,
    teal950: null,
    gray100: null,
    gray200: null,
    gray300: null,
    gray400: null,
    gray500: null,
    gray600: null,
    gray700: null,
    gray800: null,
    gray900: null,
    gray950: null,
  },
});

export const light = createTheme(vars, {
  colors: {
    teal100: '#E0F7FA',
    teal200: '#B2EBF2',
    teal300: '#80DEEA',
    teal400: '#4DD0E1',
    teal500: '#26C6DA',
    teal600: '#00BCD4',
    teal700: '#00ACC1',
    teal800: '#0097A7',
    teal900: '#00838F',
    teal950: '#006F72',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    gray950: '#121212',
  },
});

export const dark = createTheme(vars, {
  colors: {
    teal100: '#00695C',
    teal200: '#00796B',
    teal300: '#00897B',
    teal400: '#009688',
    teal500: '#00B8A9',
    teal600: '#26C6DA',
    teal700: '#4DD0E1',
    teal800: '#80DEEA',
    teal900: '#B2EBF2',
    teal950: '#E0F7FA',
    gray100: '#121212',
    gray200: '#1E1E1E',
    gray300: '#2C2C2C',
    gray400: '#424242',
    gray500: '#616161',
    gray600: '#757575',
    gray700: '#9E9E9E',
    gray800: '#BDBDBD',
    gray900: '#E0E0E0',
    gray950: '#F5F5F5',
  },
});
