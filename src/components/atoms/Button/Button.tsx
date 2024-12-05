import React from 'react';
import { button, ButtonVariants } from '@/components/atoms/Button/styles.css';

type Props = React.ComponentPropsWithoutRef<'button'> & ButtonVariants;

function Button({ color, radius, weight, children, ...props }: Props) {
  return (
    <button className={button({ color, radius, weight })} {...props}>
      {children}
    </button>
  );
}

export default Button;
