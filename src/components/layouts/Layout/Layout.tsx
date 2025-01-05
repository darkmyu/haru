import React from 'react';
import * as styles from './Layout.css';
import Header from '@/components/layouts/Header';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
