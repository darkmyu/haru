import React from 'react';
import * as styles from './Header.css';
import Button from '@/components/atoms/Button';
import ThemeSwitch from '@/components/layouts/ThemeSwitch';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.title}>HARU-TALK</p>
        <div className={styles.toolkit}>
          <ThemeSwitch />
          <Button variant={'outlined'} size={'medium'} radius={'large'}>
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
