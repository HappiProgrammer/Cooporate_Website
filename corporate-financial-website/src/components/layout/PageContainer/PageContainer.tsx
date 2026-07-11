import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  paddingX?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const paddingXClasses = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-12',
};

const paddingYClasses = {
  none: 'py-0',
  sm: 'py-4',
  md: 'py-8',
  lg: 'py-12',
  xl: 'py-16',
};

export function PageContainer({
  children,
  className = '',
  maxWidth = 'xl',
  paddingX = 'md',
  paddingY = 'md',
}: PageContainerProps) {
  const containerClasses = [
    'mx-auto',
    maxWidthClasses[maxWidth],
    paddingXClasses[paddingX],
    paddingYClasses[paddingY],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}