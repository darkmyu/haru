import { createTheme } from '@vanilla-extract/css';
import { blackA, gray, grayDark, indigo, indigoDark, whiteA } from '@radix-ui/colors';

export const [light, vars] = createTheme({
  colors: {
    ...whiteA,
    ...blackA,
    ...gray,
    ...indigo,
  },
});

export const dark = createTheme(vars, {
  colors: {
    ...whiteA,
    ...blackA,
    ...grayDark,
    ...indigoDark,
  },
});
