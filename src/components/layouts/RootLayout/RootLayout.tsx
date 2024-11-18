import React from 'react';

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return <main>{children}</main>;
}

export default RootLayout;
