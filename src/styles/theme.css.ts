import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { gray, grayDark, indigo, indigoDark } from '@radix-ui/colors';

export const vars = createThemeContract({
  colors: {
    primary: null,
    content: null,
    contentInverse: null,
    background: null,
    interactive: {
      gray1: null,
      gray2: null,
      gray3: null,
    },
    border: {
      gray1: null,
      gray2: null,
      gray3: null,
    },
  },
});

export const light = createTheme(vars, {
  colors: {
    primary: indigo.indigo10,
    content: gray.gray12,
    contentInverse: gray.gray1,
    background: gray.gray2,
    interactive: {
      gray1: gray.gray3,
      gray2: gray.gray4,
      gray3: gray.gray5,
    },
    border: {
      gray1: gray.gray6,
      gray2: gray.gray7,
      gray3: gray.gray8,
    },
  },
});

export const dark = createTheme(vars, {
  colors: {
    primary: indigoDark.indigo10,
    content: grayDark.gray12,
    contentInverse: grayDark.gray1,
    background: grayDark.gray2,
    interactive: {
      gray1: grayDark.gray3,
      gray2: grayDark.gray4,
      gray3: grayDark.gray5,
    },
    border: {
      gray1: grayDark.gray6,
      gray2: grayDark.gray7,
      gray3: grayDark.gray8,
    },
  },
});
