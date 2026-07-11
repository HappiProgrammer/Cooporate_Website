'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

interface HeaderProps {
  navItems?: NavItem[];
}

export function Header({ navItems = [] }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  // Calculate transparency based on scroll position
  const transparency = Math.min(scrollY / 100, 0.95); // Max 95% opacity
  const blurAmount = Math.min(scrollY / 2, 10); // Max 10px blur
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm' : ''}`}
      style={{
        backgroundColor: scrolled 
          ? `rgba(255, 255, 255, ${transparency})` 
          : 'transparent',
        backdropFilter: scrolled ? `blur(${blurAmount}px)` : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span 
                className="text-xl font-heading font-bold transition-colors duration-300"
                style={{
                  color: scrolled 
                    ? `rgba(26, 54, 93, ${Math.max(0.7, 1 - transparency * 0.3)})`
                    : '#1a365d'
                }}
              >
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button 
                      className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10"
                      style={{
                        color: scrolled 
                          ? `rgba(45, 55, 72, ${Math.max(0.7, 1 - transparency * 0.3)})`
                          : '#2d3748',
                        backgroundColor: isActive(item.href) && scrolled 
                          ? `rgba(240, 249, 255, ${0.3 + transparency * 0.2})`
                          : 'transparent'
                      }}
                    >
                      {item.title}
                    </button>
                    <div className="absolute left-0 mt-2 w-48 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      style={{
                        backgroundColor: scrolled 
                          ? `rgba(255, 255, 255, ${Math.max(0.95, transparency)})`
                          : 'white',
                        backdropFilter: scrolled ? 'blur(10px)' : 'none'
                      }}>
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-slate-50"
                            style={{
                              color: scrolled 
                                ? `rgba(45, 55, 72, ${Math.max(0.8, 1 - transparency * 0.2)})`
                                : '#2d3748'
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium transition-all duration-300"
                    style={{
                      color: isActive(item.href) 
                        ? (scrolled 
                            ? `rgba(26, 54, 93, ${Math.max(0.8, 1 - transparency * 0.2)})`
                            : '#1a365d')
                        : (scrolled 
                            ? `rgba(45, 55, 72, ${Math.max(0.7, 1 - transparency * 0.3)})`
                            : '#2d3748'),
                      backgroundColor: isActive(item.href) 
                        ? (scrolled 
                            ? `rgba(240, 249, 255, ${0.3 + transparency * 0.2})`
                            : '#f0f9ff')
                        : 'transparent'
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <Button 
              size="sm" 
              variant="outline"
              className="transition-all duration-300"
              style={{
                color: scrolled 
                  ? `rgba(45, 55, 72, ${Math.max(0.8, 1 - transparency * 0.2)})`
                  : '#2d3748',
                borderColor: scrolled 
                  ? `rgba(226, 232, 240, ${Math.max(0.5, 1 - transparency * 0.3)})`
                  : '#e2e8f0',
                backgroundColor: scrolled 
                  ? `rgba(255, 255, 255, ${0.1 + transparency * 0.1})`
                  : 'transparent'
              }}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors duration-300"
              aria-expanded="false"
              style={{
                color: scrolled 
                  ? `rgba(45, 55, 72, ${Math.max(0.7, 1 - transparency * 0.3)})`
                  : '#2d3748',
                backgroundColor: scrolled 
                  ? `rgba(241, 245, 249, ${0.2 + transparency * 0.1})`
                  : 'transparent'
              }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <div>
                  <button className="w-full text-left px-3 py-2 text-base font-medium text-text-secondary hover:text-brand-primary hover:bg-background-light">
                    {item.title}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-base text-text-tertiary hover:text-brand-primary hover:bg-background-light"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-brand-primary bg-background-light'
                      : 'text-text-secondary hover:text-brand-primary hover:bg-background-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4 border-t border-slate-200">
            <Button className="w-full" size="md" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}