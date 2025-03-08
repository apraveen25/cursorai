'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useIsomorphicLayoutEffect } from '@/utils/client-only';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Domains', path: '/domains' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Process', path: '/process' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handlePathChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    handlePathChange(); // Set initial path

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-md transition-all duration-300 group-hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                OP
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Office AddIns
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm lg:text-base transition-all duration-300 ${
                  activeLink === link.path
                    ? 'text-primary font-medium'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 text-sm lg:text-base shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-3 rounded-md transition-all duration-300 ${
                  activeLink === link.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mt-4 bg-primary text-white px-4 py-3 rounded-md hover:bg-secondary transition-all duration-300 text-center shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '60px' }}
        />
      )}
    </nav>
  );
} 