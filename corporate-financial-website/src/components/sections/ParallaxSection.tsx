'use client';

import React, { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';

// TypeScript interfaces
interface ParallaxSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  alignment?: 'left' | 'right';
  overlayOpacity?: number;
  enableParallax?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

/**
 * Reusable parallax storytelling section with immersive background and floating content
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  title,
  description,
  alignment = 'right',
  overlayOpacity = 0.4,
  enableParallax = true,
  ctaText,
  ctaHref,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxTransform = useParallax(sectionRef, { 
    speed: 0.3, 
    disabled: !enableParallax 
  });

  // Determine content alignment classes
  const contentAlignment = alignment === 'left' 
    ? 'md:left-12 lg:left-24' 
    : 'md:right-12 lg:right-24';

  // Determine overlay gradient direction
  const overlayGradient = alignment === 'left'
    ? `linear-gradient(90deg, rgba(15, 23, 42, ${overlayOpacity}) 0%, rgba(15, 23, 42, 0) 70%)`
    : `linear-gradient(270deg, rgba(15, 23, 42, ${overlayOpacity}) 0%, rgba(15, 23, 42, 0) 70%)`;

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${parallaxTransform}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: overlayGradient }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className={`container mx-auto px-4 md:px-6 lg:px-8`}>
          <div className={`
            max-w-2xl bg-white/95 backdrop-blur-sm p-8 md:p-12
            animate-fade-in-up
            ${contentAlignment}
            transition-all duration-700 ease-out
            md:w-2/3 lg:w-1/2
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)]
            hover:translate-y-[-5px]
            border border-slate-200
          `}>
            {/* Content */}
            <div className="space-y-6">
              <Heading 
                level="h2" 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight"
              >
                {title}
              </Heading>
              
              <Text 
                variant="body-large" 
                className="text-slate-700 leading-relaxed"
              >
                {description}
              </Text>
              
              {/* CTA Button */}
              {ctaText && (
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    variant="primary"
                    className="group"

                  >
                    {ctaHref ? (
                      <a href={ctaHref} className="inline-flex items-center">
                        {ctaText}
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    ) : (
                      ctaText
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-white/40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};