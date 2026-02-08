'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Sparkles, 
  Shield, 
  Users, 
  Zap,
  ArrowRight,
  Check,
  Star,
  Heart,
  TrendingUp,
  Lock,
  Award
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';
import Link from 'next/link';

const heroImages = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
];

const features = [
  {
    icon: Sparkles,
    title: 'AI-Based Matching',
    description: 'Advanced algorithms understand preferences and personality to suggest the most compatible matches.',
  },
  {
    icon: Shield,
    title: 'Community-Verified Profiles',
    description: 'Every profile is verified to ensure authenticity within the Nair community.',
  },
  {
    icon: Lock,
    title: 'Privacy-First Platform',
    description: 'Your data is secure. Share only what you want, when you want.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp-First Experience',
    description: 'No app downloads. Manage everything directly through WhatsApp.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Click WhatsApp Link',
    description: 'Start your journey with a single tap. No registration forms or complex processes.',
  },
  {
    step: '02',
    title: 'Create Profile via AI',
    description: 'Our intelligent bot guides you through profile creation in a conversational way.',
  },
  {
    step: '03',
    title: 'Receive Smart Matches',
    description: 'Get personalized match suggestions based on your preferences and compatibility.',
  },
  {
    step: '04',
    title: 'Connect Securely',
    description: 'Communicate with matches through our secure platform and take it forward.',
  },
];

const testimonials = [
  {
    name: 'Priya & Rahul',
    location: 'Kochi, Kerala',
    text: 'NAIRmatchu made our family\'s search so simple. The AI suggested my husband on day 3, and we connected instantly. Forever grateful!',
    rating: 5,
  },
  {
    name: 'Lakshmi Nair',
    location: 'Thrissur, Kerala',
    text: 'As a parent, I loved how easy it was to manage my daughter\'s profile via WhatsApp. The matches were relevant and the process was respectful.',
    rating: 5,
  },
  {
    name: 'Vineeth Nair',
    location: 'Calicut, Kerala',
    text: 'The AI really understands what matters. I found my perfect match within a month. Highly recommend to fellow Nair community members.',
    rating: 5,
  },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 kerala-pattern">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full mb-6 font-medium"
              >
                <Sparkles size={18} className="text-gold-600" />
                <span>Exclusively for Nair Community</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-maroon-800 mb-6 leading-tight">
                Where Tradition Meets{' '}
                <span className="gradient-text">Intelligent Matchmaking</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                AI-powered matrimony exclusively for the Nair community of Kerala. 
                Find your perfect match through WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={getWhatsAppLink(whatsappMessages.start)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xl py-5 px-10"
                >
                  <MessageCircle size={24} />
                  Start on WhatsApp
                </a>
                <Link href="/plans" className="btn-secondary text-xl py-5 px-10">
                  View Plans
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  <span>100% Free to Start</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  <span>Verified Profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  <span>Privacy Protected</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-soft-lg"
            >
              {heroImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent"></div>
                </motion.div>
              ))}
              
              {/* Slideshow Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index 
                        ? 'bg-white w-8' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Highlight Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-whatsapp to-whatsapp-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <MessageCircle size={64} className="mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Everything Happens on WhatsApp
              </h2>
              <p className="text-xl mb-8 opacity-90">
                No app downloads. No complex registrations. Just open WhatsApp and start your matrimony journey.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Zap size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">One-Click Access</h3>
                  <p className="text-sm opacity-80">Start instantly with just one tap</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Shield size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Secure & Private</h3>
                  <p className="text-sm opacity-80">End-to-end encrypted chats</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Sparkles size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">AI-Powered</h3>
                  <p className="text-sm opacity-80">Smart matchmaking algorithm</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Family Friendly</h3>
                  <p className="text-sm opacity-80">Parents can easily manage</p>
                </div>
              </div>

              <a
                href={getWhatsAppLink(whatsappMessages.start)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-whatsapp-dark px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={28} />
                Chat on WhatsApp Now
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why NAIRmatchu Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">Why Choose NAIRmatchu?</h2>
              <p className="section-subheading">
                Combining the best of tradition and technology for the Nair community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <div className="card text-center group hover:border-2 hover:border-maroon-200">
                    <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-500 transition-colors duration-300">
                      <feature.icon size={32} className="text-maroon-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">How It Works</h2>
              <p className="section-subheading">
                Your journey to finding the perfect match in 4 simple steps
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {howItWorks.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.15}>
                  <div className="flex gap-6 mb-12 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-maroon-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-maroon">
                        {step.step}
                      </div>
                      {index < howItWorks.length - 1 && (
                        <div className="w-1 h-24 bg-maroon-200 mx-auto mt-4"></div>
                      )}
                    </div>
                    <div className="card flex-1">
                      <h3 className="text-2xl font-bold text-maroon-700 mb-3 font-serif">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={getWhatsAppLink(whatsappMessages.start)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Subscription Plans Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">Choose Your Plan</h2>
              <p className="section-subheading">
              Start free and upgrade when you&apos;re ready to connect
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <AnimatedSection delay={0.1}>
                <div className="card border-2 border-gray-200 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-maroon-700 mb-2 font-serif">
                      Explore
                    </h3>
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      Free
                    </div>
                    <p className="text-gray-600">Perfect to get started</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Create basic profile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Limited AI match suggestions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">View limited profiles per day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Send limited likes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Receive interests (reply locked)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Basic search filters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Standard visibility</span>
                    </li>
                  </ul>

                  <a
                    href={getWhatsAppLink(whatsappMessages.explore)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Start Free on WhatsApp
                  </a>
                </div>
              </AnimatedSection>

              {/* Plus Plan */}
              <AnimatedSection delay={0.2}>
                <div className="card-premium h-full flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-gold-500 text-maroon-900 px-4 py-1 rounded-bl-lg font-bold text-sm flex items-center gap-1">
                    <Award size={16} />
                    RECOMMENDED
                  </div>

                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 font-serif">
                      AI Match+
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold">₹999</span>
                      <span className="text-xl opacity-80">/ 3 months</span>
                    </div>
                    <p className="opacity-90">₹299 per month • Best value</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Boosted profile visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Unlimited AI match suggestions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Send & receive interests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Chat with matched profiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">View full profiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">See who viewed your profile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Advanced search filters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">AI profile creation & optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Automatic AI horoscope & compatibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Higher visibility in AI recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">Priority listing in search</span>
                    </li>
                  </ul>

                  <a
                    href={getWhatsAppLink(whatsappMessages.upgrade)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-maroon-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg w-full"
                  >
                    <MessageCircle size={20} />
                    Upgrade via WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <p className="text-center text-gray-600 mt-8">
              All plans include privacy protection and verified profiles
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">Success Stories</h2>
              <p className="section-subheading">
                Hear from our early members who found their perfect match
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                  <div className="card h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed flex-1 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-maroon-700">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom text-center relative z-10">
            <Heart size={64} className="mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join hundreds of Nair community members who have started their matrimony journey with NAIRmatchu
            </p>
            <a
              href={getWhatsAppLink(whatsappMessages.start)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-whatsapp-dark transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={28} />
              Start Your Journey on WhatsApp
              <ArrowRight size={24} />
            </a>
            <p className="mt-6 text-sm opacity-75">
              100% Free to start • No credit card required • Verified profiles only
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
