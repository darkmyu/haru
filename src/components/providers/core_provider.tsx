import React from 'react';
import TanStackQueryProvider from '@/components/providers/tan_stack_query_provider';
import ThemeProvider from '@/components/providers/theme_provider';

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
