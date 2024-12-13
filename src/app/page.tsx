import React from 'react';
import Button from '@/components/atoms/Button';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', gap: 16, padding: 16 }}>
      <Button size={'large'}>Gray</Button>
      <Button color={'indigo'}>Indigo</Button>
      <Button variant={'outlined'}>Gray Outlined</Button>
      <Button variant={'outlined'} color={'indigo'}>
        Indigo Outlined
      </Button>
    </div>
  );
}
