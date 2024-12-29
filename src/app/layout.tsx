import '@/styles/reset.css';
import '@/styles/global.css';

import React from 'react';
import CoreProvider from '@/components/providers/CoreProvider';
import localFont from 'next/font/local';
import Layout from '@/components/layouts/Layout';
import { darkTheme } from '@/styles/theme.css';

interface Props {
  children: React.ReactNode;
}

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
});

export default function HomeLayout({ children }: Props) {
  return (
    <html className={[pretendard.className, darkTheme].join(' ')}>
      <body>
        <CoreProvider>
          <Layout>{children}</Layout>
        </CoreProvider>
      </body>
    </html>
  );
}
