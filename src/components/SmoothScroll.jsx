// SmoothScroll.jsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Lenis Initialize karna
    const lenis = new Lenis({
      duration: 0.8,      // Kitna smooth chahiye (Seconds mein, default 1 hota hai)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function smoothly scroll karne ke liye
      direction: 'vertical', // vertical / horizontal
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1, // Mouse sensitivity control
    });

    // GSAP wagera ke functions ko smooth chalane ke liye requestAnimationFrame use hota hai
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Component unmount hone par lenis ko destroy karna zaroori hai (performance ke liye)
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}