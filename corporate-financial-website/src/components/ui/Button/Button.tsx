'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

// Button variants and sizes
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Button props interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

// Variant style mappings
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-white hover:bg-brand-secondary focus:ring-brand-primary border-transparent shadow-sm hover:shadow-md',
  secondary: 'bg-brand-accent text-white hover:bg-brand-secondary focus:ring-brand-accent border-brand-accent shadow-sm hover:shadow',
  outline: 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-accent focus:ring-brand-primary shadow-sm hover:shadow',
  ghost: 'bg-transparent text-brand-primary hover:bg-background-light focus:ring-brand-primary border-transparent',
  link: 'bg-transparent text-brand-primary underline hover:text-brand-secondary focus:ring-brand-primary border-transparent p-0 h-auto',
};

// Size style mappings
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// Base button classes
const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = [
      baseClasses,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const spinner = (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    const motionProps = {
      whileHover: !disabled ? { scale: 1.03 } : undefined,
      whileTap: !disabled ? { scale: 0.98 } : undefined,
    };

    // Filter out Radix UI specific props that cause conflicts
    const { asChild, ...restProps } = props;

    return (
      <motion.button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || isLoading}
        {...motionProps}
        {...restProps}
      >
        {isLoading && spinner}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';