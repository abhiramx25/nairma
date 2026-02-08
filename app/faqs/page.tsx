'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'Is NAIRmatchu only for the Nair community?',
        answer: 'Yes, NAIRmatchu is exclusively designed for the Nair community of Kerala. This ensures cultural compatibility and helps maintain the rich traditions and values of our community while finding the perfect life partner.',
      },
      {
        question: 'How does AI matchmaking work?',
        answer: 'Our AI analyzes multiple factors including your preferences, personality traits, education, profession, family values, and more. It learns from your behavior on the platform and continuously improves match suggestions. The AI considers compatibility across cultural values, lifestyle choices, and personal preferences to suggest the most suitable matches.',
      },
      {
        question: 'Is WhatsApp safe for matrimony?',
        answer: 'Absolutely! WhatsApp uses end-to-end encryption, meaning only you and the person you\'re chatting with can read your messages. No one else, not even WhatsApp or NAIRmatchu, can access your conversations. Additionally, you control what information you share and when.',
      },
      {
        question: 'Can parents manage profiles for their children?',
        answer: 'Yes! We understand that in our community, parents often play an active role in the matrimony process. Parents can create and manage profiles on behalf of their children through WhatsApp, view matches, and communicate with potential families.',
      },
      {
        question: 'How long does it take to find a match?',
        answer: 'The timeline varies for everyone. Some members find their perfect match within a few weeks, while others may take a few months. Our AI Match+ plan significantly speeds up the process with unlimited matches and priority visibility. On average, Plus members connect 5x faster than free members.',
      },
    ],
  },
  {
    category: 'Subscription & Payment',
    questions: [
      {
        question: 'How does the subscription work?',
        answer: 'You can start with our free "Explore" plan to get familiar with NAIRmatchu. When ready, upgrade to "AI Match+" for ₹999 for 3 months (just ₹299/month). Upgrades are done directly through WhatsApp with secure payment links. Your subscription lasts 3 months and doesn\'t auto-renew.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major payment methods including UPI, debit cards, credit cards, net banking, and digital wallets. All payments are processed through secure, encrypted payment gateways.',
      },
      {
        question: 'Can I get a refund if I\'m not satisfied?',
        answer: 'Due to the nature of our service providing immediate access to premium features, we don\'t offer refunds for unused subscription time. However, you can choose not to renew and will retain access to premium features until your subscription period ends.',
      },
      {
        question: 'What happens when my subscription expires?',
        answer: 'When your 3-month subscription expires, you\'ll automatically move to the free "Explore" plan. You can renew anytime by messaging us on WhatsApp. Your profile and connections remain saved.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    questions: [
      {
        question: 'How is my personal information protected?',
        answer: 'We take privacy seriously. Your data is encrypted and stored securely. We never share your information with third parties without your explicit consent. You control what details are visible on your profile and can hide or reveal information as needed.',
      },
      {
        question: 'How do you verify profiles?',
        answer: 'Every profile goes through manual verification. We verify phone numbers through OTP, review uploaded photos to ensure they\'re genuine, and may request additional verification for certain details. This helps ensure a safe and authentic community.',
      },
      {
        question: 'Can I hide my profile temporarily?',
        answer: 'Yes! Plus members can hide their profile anytime via WhatsApp. Your profile won\'t appear in searches or recommendations while hidden, but you can unhide it whenever you want.',
      },
      {
        question: 'What if I face inappropriate behavior?',
        answer: 'We have zero tolerance for harassment or inappropriate behavior. You can report any member directly through WhatsApp, and we\'ll investigate immediately. Verified cases result in permanent bans. Your safety and comfort are our top priorities.',
      },
    ],
  },
  {
    category: 'Using NAIRmatchu',
    questions: [
      {
        question: 'Do I need to download an app?',
        answer: 'No! Everything happens through WhatsApp, which you already have. Just click our WhatsApp link and start chatting with our AI bot. No app downloads, no complex registrations.',
      },
      {
        question: 'How do I create a profile?',
        answer: 'Simply click "Start on WhatsApp" and our AI bot will guide you through a conversational profile creation process. It takes about 5-10 minutes. The bot asks simple questions about you, your family, preferences, and more. You can complete it in one go or over multiple sessions.',
      },
      {
        question: 'Can I edit my profile later?',
        answer: 'Yes! You can edit your profile anytime by messaging our WhatsApp bot. Simply type "edit profile" and follow the prompts to update any information.',
      },
      {
        question: 'How do I receive match suggestions?',
        answer: 'Once your profile is complete, our AI starts working. Free members receive up to 3 match suggestions daily, while Plus members get unlimited suggestions. Matches are sent directly to your WhatsApp with profile details and compatibility scores.',
      },
      {
        question: 'What if I don\'t like a suggested match?',
        answer: 'You can simply skip any match. The AI learns from your skips and preferences to improve future suggestions. Plus members can also provide feedback on why they skipped a match to further refine the AI.',
      },
    ],
  },
  {
    category: 'Success & Support',
    questions: [
      {
        question: 'What happens after I find a match?',
        answer: 'Once you find your perfect match and both families agree, let us know! We love celebrating success stories. You can deactivate your profile while maintaining your subscription or let it expire naturally.',
      },
      {
        question: 'Do you offer any matchmaking assistance?',
        answer: 'Plus members get access to a dedicated success manager who can provide personalized guidance, profile tips, and help resolve any issues. All members can reach our support team via WhatsApp.',
      },
      {
        question: 'How can I contact support?',
        answer: 'Our support team is available via WhatsApp. Free members receive standard support (response within 24 hours), while Plus members get priority support (response within 2-4 hours). Simply message us with your query.',
      },
      {
        question: 'Can I provide feedback or suggestions?',
        answer: 'Absolutely! We love hearing from our community. Send your feedback, suggestions, or feature requests via WhatsApp. We regularly update NAIRmatchu based on member feedback.',
      },
    ],
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="card mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-bold text-maroon-700 flex-1">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} className="text-maroon-500 flex-shrink-0" />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...faqs.map(cat => cat.category)];

  const filteredFAQs = faqs.filter(category => {
    if (activeCategory !== 'All' && category.category !== activeCategory) return false;
    
    if (searchTerm) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  }).map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      !searchTerm || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Find answers to common questions about NAIRmatchu
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 focus:border-maroon-500 focus:outline-none text-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-maroon-500 text-white shadow-maroon'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-white to-ivory-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, catIndex) => (
                <div key={category.category} className="mb-16 last:mb-0">
                  <h2 className="text-3xl font-bold text-maroon-700 mb-8 font-serif">
                    {category.category}
                  </h2>
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      index={index}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500 mb-6">
                  No FAQs found matching your search.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn-outline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white">
          <div className="container-custom text-center">
            <MessageCircle size={64} className="mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Our support team is here to help. Get instant answers on WhatsApp.
            </p>
            <a
              href={getWhatsAppLink(whatsappMessages.contact)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-whatsapp-dark transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={28} />
              Chat with Support
            </a>
            <p className="mt-6 text-sm opacity-75">
              Average response time: 2-4 hours for Plus members, 24 hours for free members
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
