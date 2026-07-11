'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';

interface CorporateBackgroundSectionProps {
  backgroundImage: string;
  heading: string;
  description: string;
  ctaText?: string;
  onCTAClick?: () => void;
  alignment?: 'left' | 'right';
  minHeight?: string;
  children?: React.ReactNode;
  showCTA?: boolean;
}

export function CorporateBackgroundSection({
  backgroundImage,
  heading,
  description,
  ctaText = 'Learn More',
  onCTAClick,
  alignment = 'right',
  minHeight = 'h-[600px]',
  children,
  showCTA = true
}: CorporateBackgroundSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple fade-in animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isLeftAligned = alignment === 'left';

  return (
    <section className={`relative w-full overflow-hidden ${minHeight}`}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: isVisible ? 'scale(1.05)' : 'scale(1.1)'
        }}
      >
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-700/30"></div>
        
        {/* Subtle Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Empty column for spacing when content is right-aligned */}
            {isLeftAligned && <div></div>}
            
            {/* Floating Content Card */}
            <div className={`${
              isLeftAligned ? 'lg:col-start-1' : 'lg:col-start-2'
            } transform transition-all duration-700 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}>
              <div className="bg-card-background backdrop-blur-md shadow-2xl p-8 md:p-12 border border-border-default">
                {/* Content */}
                <div className="max-w-lg">
                  <Heading 
                    level="h2" 
                    className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight"
                  >
                    {heading}
                  </Heading>
                  
                  <Text 
                    as="p" 
                    variant="body" 
                    className="text-slate-700 mb-8 text-lg leading-relaxed"
                  >
                    {description}
                  </Text>
                  
                  {showCTA && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="primary" 
                        size="lg"
                        onClick={onCTAClick}
                        className="group hover:scale-105 transition-transform duration-300"
                      >
                        {ctaText}
                      </Button>
                    </div>
                  )}
                  
                  {children && (
                    <div className="mt-8">
                      {children}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Empty column for spacing when content is left-aligned */}
            {!isLeftAligned && <div></div>}
          </div>
        </div>
      </div>

      {/* Subtle Animated Elements */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full bg-white/40 animate-pulse`}
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}