"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-warm text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+90 XXX XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4" />
                <span>info@arkanmarkapatent.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4" />
              <span>Pazartesi - Cuma: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-warm' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-white rounded-xl flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-all duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="Arkan Marka Logo" 
                    width={499} 
                    height={499} 
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary-800 group-hover:text-primary-600 transition-colors">
                  Arkan Marka Patent
                </h1>
                <p className="text-xs text-secondary-500 font-medium">
                  Kalite Yönetim ve Danışmanlık
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-all duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-warm transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+90XXXXXXXXX"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors flex items-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Hemen Arayın</span>
              </Link>
              <Link
                href="/iletisim"
                className="btn-primary flex items-center space-x-2"
              >
                <span>Ücretsiz Danışmanlık</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-secondary-600 hover:text-primary-600 transition-colors p-2"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden py-4 border-t border-gray-200 bg-white"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-secondary-600 hover:text-primary-600 font-medium transition-colors px-4 py-3 rounded-lg hover:bg-primary-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    href="tel:+90XXXXXXXXX"
                    className="flex items-center space-x-2 text-primary-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>+90 XXX XXX XX XX</span>
                  </Link>
                  <Link
                    href="/iletisim"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsOpen(false)}
                  >
                    Ücretsiz Danışmanlık
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
} 