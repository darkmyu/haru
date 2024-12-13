import { StyleRule } from '@vanilla-extract/css';

interface MediaStyles<T extends StyleRule> {
  desktop?: T;
  laptop?: T;
  tablet?: T;
  mobile?: T;
}

const MAX_DESKTOP = 1920;
const MAX_LAPTOP = 1440;
const MAX_TABLET = 1024;
const MAX_MOBILE = 768;

export const mediaQuery = <T extends StyleRule>({ desktop, laptop, tablet, mobile }: MediaStyles<T>) => ({
  '@media': {
    ...(desktop && { [`screen and (max-width: ${MAX_DESKTOP}px)`]: desktop }),
    ...(laptop && { [`screen and (max-width: ${MAX_LAPTOP}px)`]: laptop }),
    ...(tablet && { [`screen and (max-width: ${MAX_TABLET}px)`]: tablet }),
    ...(mobile && { [`screen and (max-width: ${MAX_MOBILE}px)`]: mobile }),
  },
});
