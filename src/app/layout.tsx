import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
