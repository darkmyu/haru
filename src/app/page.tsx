import React from 'react';
import Button from '@/components/atoms/Button';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', gap: 16, padding: 16 }}>
      <Button size={'large'}>Confirm</Button>
      <Button variant={'outlined'} size={'large'}>
        Confirm
      </Button>
      <Button variant={'text'} size={'large'}>
        Confirm
      </Button>
    </div>
  );
}
