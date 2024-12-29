import React from 'react';
import { vars } from '@/styles/theme.css';
import { container, header, theme, title, toolkit } from '@/components/layouts/Header/styles.css';
import Button from '@/components/atoms/Button';
import { MoonIcon, SunIcon } from 'lucide-react';

function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <p className={title}>HARU-TALK</p>
        <div className={toolkit}>
          <div className={theme}>
            <SunIcon color={vars.colors.content.gray12} />
            <MoonIcon color={vars.colors.content.gray12} />
          </div>
          <Button variant={'outlined'} size={'medium'} radius={'large'}>
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
