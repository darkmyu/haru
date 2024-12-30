import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { gray, grayDark, jade, jadeDark } from '@radix-ui/colors';

export const vars = createGlobalThemeContract(
  {
    colors: {
      primary: null,
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
      solid: {
        gray9: null,
        gray10: null,
      },
      content: {
        gray11: null,
        gray12: null,
      },
    },
  },
  (_, path) => path.join('-'),
);

createGlobalTheme(':root', vars, {
  colors: {
    primary: jade.jade10,
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
    solid: {
      gray9: gray.gray9,
      gray10: gray.gray10,
    },
    content: {
      gray11: gray.gray11,
      gray12: gray.gray12,
    },
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  colors: {
    primary: jadeDark.jade10,
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
    solid: {
      gray9: grayDark.gray9,
      gray10: grayDark.gray10,
    },
    content: {
      gray11: grayDark.gray11,
      gray12: grayDark.gray12,
    },
  },
});
