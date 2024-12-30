import React from 'react';
import Button from '@/components/atoms/Button';
import { container, header, title, toolkit } from '@/components/layouts/Header/styles.css';
import ThemeSwitch from '@/components/layouts/ThemeSwitch';

function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <p className={title}>HARU-TALK</p>
        <div className={toolkit}>
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
