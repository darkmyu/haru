import React from 'react';
import { root } from '@/components/layouts/Layout/styles.css';
import Header from '@/components/layouts/Header';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={root}>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
