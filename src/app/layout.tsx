import React from 'react';
import { light } from '@/app/theme.css';

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <html>
      <body className={light}>{children}</body>
    </html>
  );
}
