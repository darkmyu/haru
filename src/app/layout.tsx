import '@/styles/reset.css';
import '@/styles/theme.css';
import '@/styles/global.css';

import React from 'react';
import localFont from 'next/font/local';
import Layout from '@/components/layouts/layout';
import CoreProvider from '@/components/providers/core_provider';

interface Props {
  children: React.ReactNode;
}

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
});

export default function HomeLayout({ children }: Props) {
  return (
    <html className={pretendard.className} suppressHydrationWarning>
      <body>
        <CoreProvider>
          <Layout>{children}</Layout>
        </CoreProvider>
      </body>
    </html>
  );
}
