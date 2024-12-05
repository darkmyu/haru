import '@/styles/reset.css';
import '@/styles/global.css';

import React from 'react';
import { light } from '@/styles/theme.css';
import CoreProvider from '@/components/providers/CoreProvider';
import localFont from 'next/font/local';
import Layout from '@/components/layouts/Layout';

interface Props {
  children: React.ReactNode;
}

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
});

export default function HomeLayout({ children }: Props) {
  return (
    <html className={pretendard.className}>
      <body className={light}>
        <CoreProvider>
          <Layout>{children}</Layout>
        </CoreProvider>
      </body>
    </html>
  );
}
