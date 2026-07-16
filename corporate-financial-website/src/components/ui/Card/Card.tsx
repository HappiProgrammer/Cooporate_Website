'use client';

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

// Card variants
export type CardVariant = 'elevated' | 'outlined' | 'filled';

// Card padding options
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

// Card props interface
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onDragLeave' | 'onDragEnter' | 'onAnimationStart' | 'onTransitionEnd'> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
}

// Variant style mappings
const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-card-background border border-border-default transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:translate-y-[-5px]',
  outlined: 'bg-card-background border border-border-default transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:translate-y-[-3px]',
  filled: 'bg-card-background border border-border-default transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-2px]',
};

// Padding style mappings
const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// Base card classes
const baseClasses = 'transition-all duration-300';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'elevated',
      padding = 'md',
      hoverable = false,
      clickable = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const classes = [
      baseClasses,
      variantStyles[variant],
      paddingStyles[padding],
      clickable ? 'cursor-pointer' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const motionProps = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      whileHover: hoverable ? { y: -5, transition: { duration: 0.2 } } : undefined,
    };

    return (
      <motion.div 
        ref={ref}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', title, description, children, ...props }, ref) => {
    const classes = `pb-4 ${className}`;

    if (title || description) {
      return (
        <div ref={ref} className={classes} {...props}>
          {title && <h3 className="text-xl font-semibold text-slate-900 mb-1">{title}</h3>}
          {description && <p className="text-slate-600">{description}</p>}
        </div>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card content component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    const classes = `pt-0 ${className}`;
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

// Card footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    const classes = `pt-4 mt-4 border-t border-slate-200 ${className}`;
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';