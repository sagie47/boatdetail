'use client';

import { useEffect } from 'react';

export function useAppHeight() {
  useEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', setAppHeight);
    setAppHeight();

    return () => {
      window.removeEventListener('resize', setAppHeight);
    };
  }, []);
}