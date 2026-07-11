import React from 'react';

// Define icon types
export type IconType = 
  | 'bank'
  | 'person'
  | 'family'
  | 'chart'
  | 'money'
  | 'building'
  | 'shield'
  | 'leaf'
  | 'briefcase'
  | 'arrowRight'
  | 'check'
  | 'chevronDown'
  | 'chevronUp'
  | 'menu'
  | 'close'
  | 'linkedin'
  | 'twitter'
  | 'facebook'
  | 'instagram';

// Icon mapping to SVG paths
const iconPaths: Record<IconType, React.SVGProps<SVGSVGElement>> = {
  bank: {
    children: (
      <>
        <rect x="2" y="9" width="20" height="11" rx="2" />
        <path d="M4 9V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
        <path d="M10 14h.01" />
        <path d="M2 14h20" />
        <path d="M14 14h.01" />
      </>
    ),
  },
  person: {
    children: (
      <>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  family: {
    children: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <path d="M9 12v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1" />
        <path d="M9 10V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
        <circle cx="9" cy="7" r="2" />
        <circle cx="15" cy="7" r="2" />
      </>
    ),
  },
  chart: {
    children: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
  money: {
    children: (
      <>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </>
    ),
  },
  building: {
    children: (
      <>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8h2" />
        <path d="M18 9h2" />
        <path d="M18 13h2" />
        <path d="M18 17h2" />
        <path d="M6 9H4" />
        <path d="M6 13H4" />
        <path d="M6 17H4" />
        <path d="M10 13v4" />
        <path d="M14 13v4" />
        <path d="M10 9h4" />
        <path d="M10 5h4" />
        <path d="M10 17h4" />
      </>
    ),
  },
  shield: {
    children: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
  },
  leaf: {
    children: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
  briefcase: {
    children: (
      <>
        <path d="M16 20a2 2 0 0 0 2-2V8a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v10a2 2 0 0 0 2 2Z" />
        <path d="M12 4v12" />
        <path d="M8 21v-3" />
        <path d="M16 21v-3" />
      </>
    ),
  },
  arrowRight: {
    children: (
      <path d="M5 12h14M12 5l7 7-7 7" />
    ),
  },
  check: {
    children: (
      <path d="M20 6 9 17l-5-5" />
    ),
  },
  chevronDown: {
    children: (
      <path d="m6 9 6 6 6-6" />
    ),
  },
  chevronUp: {
    children: (
      <path d="m18 15-6-6-6 6" />
    ),
  },
  menu: {
    children: (
      <>
        <path d="M3 12h18M3 6h18M3 18h18" />
      </>
    ),
  },
  close: {
    children: (
      <path d="M18 6 6 18M6 6l12 12" />
    ),
  },
  linkedin: {
    children: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  twitter: {
    children: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  },
  facebook: {
    children: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  instagram: {
    children: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
};

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconType;
  size?: number;
  className?: string;
  strokeWidth?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  strokeWidth = 2,
  color,
  ...props
}) => {
  const iconProps = iconPaths[name];

  if (!iconProps) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        ...props.style,
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200"
      >
        {iconProps.children}
      </svg>
    </span>
  );
};