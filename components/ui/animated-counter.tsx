import React, { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export const AnimatedCounter = ({
  value,
  duration = 2,
  decimals = 0,
  className,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.23, 1, 0.32, 1],
        onUpdate: (latest) => setCount(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};