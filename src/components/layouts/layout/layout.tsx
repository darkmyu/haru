import React from 'react';
import * as styles from './layout.css';
import Header from '../header';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      {/*<footer>Footer</footer>*/}
    </div>
  );
}

export default Layout;
