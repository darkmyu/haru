'use client';

import React, { useEffect, useState } from 'react';
import { container } from '@/components/layouts/ThemeSwitch/styles.css';
import { MoonIcon, SunIcon } from 'lucide-react';
import { vars } from '@/styles/theme.css';
import { useTheme } from 'next-themes';

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={container} onClick={handleChangeTheme}>
      {resolvedTheme === 'light' && <MoonIcon color={vars.colors.content.gray12} />}
      {resolvedTheme === 'dark' && <SunIcon color={vars.colors.content.gray12} />}
    </div>
  );
}

export default ThemeSwitch;
