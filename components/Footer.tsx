'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/utils/client-only';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-white/90 mb-0">
                  Subscribe to our newsletter for the latest updates on Office add-in development and special offers.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                    aria-label="Email address"
                  />
                  <button 
                    type="submit" 
                    className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-md flex items-center justify-center text-white font-bold text-xl">
                    OP
                  </div>
                </div>
                <span className="text-xl font-bold">Office AddIns</span>
              </div>
              <p className="text-gray-400 mb-6">
                Professional MS Office Add-in development services to enhance productivity and streamline workflows.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/domains" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Domains
                  </Link>
                </li>
                <li>
                  <Link href="/technologies" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/faqs" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors hover:pl-1 block">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Office Plaza, Business District, 10001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-primary flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary flex-shrink-0" />
                  <span className="text-gray-400">info@officepluginspro.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                &copy; {currentYear} Office Plugins Pro. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 