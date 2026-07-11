import React, { forwardRef, useState } from 'react';

// Typography variants for premium corporate styling
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 
  | 'display-1' 
  | 'display-2' 
  | 'display-3'
  | 'heading-1' 
  | 'heading-2' 
  | 'heading-3' 
  | 'heading-4'
  | 'body-xl'
  | 'body-large' 
  | 'body' 
  | 'body-small' 
  | 'caption'
  | 'micro';

// Base typography props with luxury styling options
interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'inherit';
  hoverEffect?: boolean;
  editorialStyle?: boolean;
  corporateStyle?: boolean;
}

// Heading props
export interface HeadingProps extends BaseTypographyProps {
  level?: HeadingLevel;
  as?: HeadingLevel;
  clickable?: boolean;
  onClick?: () => void;
  isClicked?: boolean;
}

// Text props
export interface TextProps extends BaseTypographyProps {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div' | 'strong' | 'em' | 'small' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

// Premium color classes matching corporate palette
const colorClasses = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  muted: 'text-text-muted',
  inherit: 'text-inherit',
  brand: 'text-brand-primary',
  accent: 'text-brand-accent',
};

// Luxury hover effect classes
const hoverClasses = 'transition-all duration-300 hover:text-red-800 hover:decoration-red-800 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full';

// Clickable header classes for red underline effect
const clickableHeaderClasses = 'cursor-pointer transition-all duration-300 text-red-800 decoration-red-800 underline relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-800 after:transition-all after:duration-300';

// Editorial styling for premium typography
const editorialClasses = 'font-serif font-normal text-text-primary';
const corporateClasses = 'font-sans font-normal text-text-secondary';

// Heading level mappings with premium styling
const headingLevels: Record<HeadingLevel, string> = {
  h1: 'text-display-1 font-bold leading-tight',
  h2: 'text-display-2 font-semibold leading-tight',
  h3: 'text-heading-1 font-semibold leading-snug',
  h4: 'text-heading-2 font-medium leading-normal',
  h5: 'text-heading-3 font-medium leading-relaxed',
  h6: 'text-heading-4 font-medium leading-relaxed',
};

// Text variant mappings with editorial hierarchy
const textVariants: Record<TextVariant, string> = {
  'display-1': 'text-display-1 font-bold leading-tight',
  'display-2': 'text-display-2 font-semibold leading-tight',
  'display-3': 'text-display-3 font-semibold leading-snug',
  'heading-1': 'text-heading-1 font-semibold leading-snug',
  'heading-2': 'text-heading-2 font-medium leading-normal',
  'heading-3': 'text-heading-3 font-medium leading-normal',
  'heading-4': 'text-heading-4 font-medium leading-relaxed',
  'body-xl': 'text-body-xl leading-relaxed',
  'body-large': 'text-body-large leading-relaxed',
  'body': 'text-body leading-relaxed',
  'body-small': 'text-body-small leading-relaxed',
  'caption': 'text-caption leading-relaxed',
  'micro': 'text-micro leading-tight',
};

// Weight classes for fine typography control
const weightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

// Premium Heading component
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      level = 'h2',
      as: Component = level,
      className = '',
      color = 'primary',
      hoverEffect = false,
      editorialStyle = false,
      corporateStyle = false,
      clickable = false,
      isClicked = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [localClicked, setLocalClicked] = useState(false);
    
    const handleClick = () => {
      if (clickable) {
        setLocalClicked(!localClicked);
      }
      if (onClick) {
        onClick();
      }
    };

    const classes = [
      headingLevels[level],
      colorClasses[color],
      hoverEffect && !clickable && hoverClasses,
      clickable && (localClicked ? clickableHeaderClasses : ''),
      isClicked && clickableHeaderClasses,
      editorialStyle && editorialClasses,
      corporateStyle && corporateClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component ref={ref} className={classes} onClick={handleClick} {...props}>
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

// Premium Text component
export const Text = ({
  children,
  variant = 'body',
  as: Component = 'p',
  className = '',
  color = 'secondary',
  weight,
  italic = false,
  underline = false,
  strikethrough = false,
  hoverEffect = false,
  editorialStyle = false,
  corporateStyle = false,
  ...props
}: TextProps) => {
    const classes = [
      textVariants[variant],
      colorClasses[color],
      weight && weightClasses[weight],
      italic && 'italic',
      underline && 'underline',
      strikethrough && 'line-through',
      hoverEffect && hoverClasses,
      editorialStyle && editorialClasses,
      corporateStyle && corporateClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component className={classes} {...props}>
        {children}
      </Component>
    );
  };

Text.displayName = 'Text';

// Predefined heading components with premium styling
export const H1 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h1" {...props} />
));
H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h2" {...props} />
));
H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h3" {...props} />
));
H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h4" {...props} />
));
H4.displayName = 'H4';

export const H5 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h5" {...props} />
));
H5.displayName = 'H5';

export const H6 = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level' | 'as'>>((props, ref) => (
  <Heading ref={ref} level="h6" {...props} />
));
H6.displayName = 'H6';

// Predefined text components with editorial variants
export const Display1 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="display-1" as="h1" {...props} />
);
Display1.displayName = 'Display1';

export const Display2 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="display-2" as="h2" {...props} />
);
Display2.displayName = 'Display2';

export const Display3 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="display-3" as="h3" {...props} />
);
Display3.displayName = 'Display3';

export const Heading1 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="heading-1" as="h2" {...props} />
);
Heading1.displayName = 'Heading1';

export const Heading2 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="heading-2" as="h3" {...props} />
);
Heading2.displayName = 'Heading2';

export const Heading3 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="heading-3" as="h4" {...props} />
);
Heading3.displayName = 'Heading3';

export const Heading4 = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="heading-4" {...props} />
);
Heading4.displayName = 'Heading4';

export const BodyXL = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="body-xl" {...props} />
);
BodyXL.displayName = 'BodyXL';

export const BodyLarge = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="body-large" {...props} />
);
BodyLarge.displayName = 'BodyLarge';

export const Body = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="body" {...props} />
);
Body.displayName = 'Body';

export const BodySmall = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="body-small" {...props} />
);
BodySmall.displayName = 'BodySmall';

export const Caption = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="caption" {...props} />
);
Caption.displayName = 'Caption';

export const Micro = (props: Omit<TextProps, 'variant' | 'as'>) => (
  <Text variant="micro" {...props} />
);
Micro.displayName = 'Micro';