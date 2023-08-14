import React, { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion';

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -document.body.scrollHeight]);
  const springConfig = { damping: 25, stiffness: 100 };

  const style = useSpring(scrollY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);
    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.div
      style={{ y: style }}
      className="smooth-scroll-container"
    >
      {children}
    </motion.div>
  );
}