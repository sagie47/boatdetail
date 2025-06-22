"use client";

import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEntryExt extends PerformanceEntry {
  processingStart: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if performance API is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
        console.log('FCP:', metrics.fcp);
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
          console.log('LCP:', metrics.lcp);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const fidEntry = entry as PerformanceEntryExt;
            metrics.fid = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', metrics.fid);
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const layoutShift = entry as LayoutShift;
            if (!layoutShift.hadRecentInput) {
              clsValue += layoutShift.value;
            }
          });
          metrics.cls = clsValue;
          console.log('CLS:', metrics.cls);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', metrics.ttfb);
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Report metrics after page load
    const reportMetrics = () => {
      // In a real app, you'd send these to your analytics service
      console.log('Performance Metrics:', metrics);
      
      // Example: Send to analytics
      // analytics.track('performance_metrics', metrics);
    };

    // Report after a delay to ensure all metrics are captured
    setTimeout(reportMetrics, 5000);

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // This component doesn't render anything
  return null;
}