import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  return <NextThemeProvider defaultTheme={'system'}>{children}</NextThemeProvider>;
}

export default ThemeProvider;
