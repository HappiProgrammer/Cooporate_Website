'use client';

import React, { forwardRef } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { useScrollAnimation, scrollVariants, getStaggerDelay } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

interface ScrollAnimatedProps extends MotionProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

export const ScrollAnimated = forwardRef<HTMLDivElement, ScrollAnimatedProps>(
  (
    {
      children,
      animationType = 'slide-up',
      delay = 0,
      threshold = 0.1,
      className = '',
      triggerOnce = true,
      ...props
    },
    ref
  ) => {
    const { isVisible, ref: scrollRef } = useScrollAnimation({
      threshold,
      triggerOnce,
    });

    const getVariants = (): Variants => {
      switch (animationType) {
        case 'fade':
          return {
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 0.6, delay }
            }
          };
        case 'slide-left':
          return {
            hidden: scrollVariants.hiddenLeft,
            visible: {
              ...scrollVariants.visibleLeft,
              transition: {
                ...scrollVariants.visibleLeft.transition,
                delay
              }
            }
          };
        case 'slide-right':
          return {
            hidden: scrollVariants.hiddenRight,
            visible: {
              ...scrollVariants.visibleRight,
              transition: {
                ...scrollVariants.visibleRight.transition,
                delay
              }
            }
          };
        case 'scale':
          return {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }
            }
          };
        case 'slide-up':
        default:
          return {
            hidden: scrollVariants.hidden,
            visible: {
              ...scrollVariants.visible,
              transition: {
                ...scrollVariants.visible.transition,
                delay
              }
            }
          };
      }
    };

    return (
      <motion.div
        ref={(node) => {
          scrollRef(node);
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getVariants()}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollAnimated.displayName = 'ScrollAnimated';

// Staggered container for multiple elements
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  threshold = 0.1,
}) => {
  const { isVisible, ref } = useScrollAnimation({ threshold });

  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * staggerDelay,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};