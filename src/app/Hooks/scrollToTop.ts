// components/ScrollToTopOnRefresh.tsx
'use client';

import { useEffect } from 'react';

export default function ScrollToTopOnRefresh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
