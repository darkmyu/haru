import React from 'react';
import TanStackQueryProvider from '@/components/providers/TanStackQueryProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';

interface Props {
  children: React.ReactNode;
}

function CoreProvider({ children }: Props) {
  return (
    <TanStackQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TanStackQueryProvider>
  );
}

export default CoreProvider;
