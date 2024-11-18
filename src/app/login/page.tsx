'use client';

import React from 'react';
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
  const supabase = createClient();

  return (
    <div>
      <span>Login Page</span>
      <button
        onClick={async () => {
          await supabase.auth.signInWithOAuth({
            provider: 'google',
          });
        }}
      >
        Google Login
      </button>
    </div>
  );
}
