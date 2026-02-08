'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Plans', href: '/plans' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-maroon-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-maroon group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <h1 className="text-2xl font-bold text-maroon-700 font-serif">NAIRmatchu</h1>
              <p className="text-xs text-gray-500 -mt-1">Kerala's Trusted Matrimony</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-maroon-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href={getWhatsAppLink(whatsappMessages.start)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base py-3 px-6"
            >
              <MessageCircle size={20} />
              Start on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-maroon-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-3 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-maroon-50 hover:text-maroon-600 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={getWhatsAppLink(whatsappMessages.start)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-base py-3"
                >
                  <MessageCircle size={20} />
                  Start on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
