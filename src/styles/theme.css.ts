import { createTheme } from '@vanilla-extract/css';
import { blackA, grass, grassA, grassDark, grassDarkA, gray, grayDark, whiteA } from '@radix-ui/colors';

export const [light, vars] = createTheme({
  colors: {
    ...whiteA,
    ...blackA,
    ...gray,
    ...grass,
    ...grassA,
  },
});

export const dark = createTheme(vars, {
  colors: {
    ...whiteA,
    ...blackA,
    ...grayDark,
    ...grassDark,
    ...grassDarkA,
  },
});
