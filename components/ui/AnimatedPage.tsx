'use client';

import dynamic from 'next/dynamic';

const ScrollAnimatedSection = dynamic(() => import('@/components/ui/ScrollAnimatedSection'), { ssr: false });

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}