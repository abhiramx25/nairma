'use client';

import Link from 'next/link';
import { Heart, MessageCircle, Mail, Phone } from 'lucide-react';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Subscription Plans', href: '/plans' },
    { name: 'Contact Us', href: '/contact' },
  ],
  support: [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Community Guidelines', href: '/guidelines' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-maroon-800 to-maroon-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-maroon-600 font-bold text-2xl shadow-lg">
                N
              </div>
              <div>
                <h2 className="text-3xl font-bold font-serif">NAIRmatchu</h2>
                <p className="text-maroon-200 text-sm">Kerala&apos;s Trusted Matrimony</p>
              </div>
            </div>
            <p className="text-maroon-100 mb-6 leading-relaxed max-w-md">
              Where tradition meets intelligent matchmaking. Exclusively for the Nair community, 
              powered by AI, delivered through WhatsApp.
            </p>
            <a
              href={getWhatsAppLink(whatsappMessages.start)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold hover:bg-whatsapp-dark transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={20} />
              Start Your Journey
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-maroon-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-maroon-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-maroon-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-maroon-200 text-sm text-center md:text-left">
              © {currentYear} NAIRmatchu. All rights reserved. Made with <Heart size={14} className="inline text-gold-500" /> for the Nair community.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href={getWhatsAppLink(whatsappMessages.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-200 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="mailto:sreeraggabru086@gmail.com"
                className="text-maroon-200 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
