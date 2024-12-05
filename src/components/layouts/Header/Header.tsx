import React from 'react';
import { header } from '@/components/layouts/Header/styles.css';

function Header() {
  return (
    <header className={header}>
      <div>HARU-TALK</div>
      <div>Login</div>
    </header>
  );
}

export default Header;
