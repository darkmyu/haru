import React from 'react';
import TanStackQueryProvider from '@/components/providers/TanStackQueryProvider';

interface Props {
  children: React.ReactNode;
}

function CoreProvider({ children }: Props) {
  return <TanStackQueryProvider>{children}</TanStackQueryProvider>;
}

export default CoreProvider;
