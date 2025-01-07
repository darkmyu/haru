import React from 'react';
import * as styles from './header.css';
import Button from '../../atoms/button';
import ThemeSwitch from '../theme_switch';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.logo}>HARU-TALK</p>
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
