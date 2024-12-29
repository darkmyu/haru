import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { gray, grayDark, indigo, indigoDark } from '@radix-ui/colors';

export const vars = createGlobalThemeContract(
  {
    colors: {
      primary: null,
      content: null,
      contentInverse: null,
      background: {
        gray1: null,
        gray2: null,
      },
      interactive: {
        gray3: null,
        gray4: null,
        gray5: null,
      },
      border: {
        gray6: null,
        gray7: null,
        gray8: null,
      },
    },
  },
  (_, path) => path.join('-'),
);

createGlobalTheme(':root', vars, {
  colors: {
    primary: indigo.indigo10,
    content: gray.gray12,
    contentInverse: gray.gray1,
    background: {
      gray1: gray.gray1,
      gray2: gray.gray2,
    },
    interactive: {
      gray3: gray.gray3,
      gray4: gray.gray4,
      gray5: gray.gray5,
    },
    border: {
      gray6: gray.gray6,
      gray7: gray.gray7,
      gray8: gray.gray8,
    },
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  colors: {
    primary: indigoDark.indigo10,
    content: grayDark.gray12,
    contentInverse: grayDark.gray1,
    background: {
      gray1: grayDark.gray1,
      gray2: grayDark.gray2,
    },
    interactive: {
      gray3: grayDark.gray3,
      gray4: grayDark.gray4,
      gray5: grayDark.gray5,
    },
    border: {
      gray6: grayDark.gray6,
      gray7: grayDark.gray7,
      gray8: grayDark.gray8,
    },
  },
});
