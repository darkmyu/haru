import React from 'react';
import { button, ButtonVariants } from '@/components/atoms/Button/Button.css';

type Props = React.ComponentProps<'button'> & ButtonVariants;

function Button({ variant, color, radius, weight, size, children, ...props }: Props) {
  return (
    <button className={button({ variant, color, radius, weight, size })} {...props}>
      {children}
    </button>
  );
}

export default Button;
