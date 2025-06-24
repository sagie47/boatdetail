'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideIn' | 'zoomIn';
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className, animationType = 'fadeIn' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const animationVariants: Record<string, Variants> = {
    fadeIn: {
      visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: [0.25, 1, 0.5, 1] } },
      hidden: { opacity: 0, y: 20 },
    },
    slideIn: {
      visible: { opacity: 1, x: 0, transition: { duration: 2.0, ease: [0.25, 1, 0.5, 1] } },
      hidden: { opacity: 0, x: -20 },
    },
    zoomIn: {
      visible: { opacity: 1, scale: 1, transition: { duration: 2.0, ease: [0.25, 1, 0.5, 1] } },
      hidden: { opacity: 0, scale: 0.95 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animationVariants[animationType]}
    >
      {children}
    </motion.section>
  );
};

export default ScrollAnimatedSection;