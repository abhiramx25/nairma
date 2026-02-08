'use client';
import { initiatePayment } from '@/lib/payment';
import type { Metadata } from 'next';
import { Check, X, MessageCircle, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Subscription Plans - NAIRmatchu Pricing',
  description: 'Choose the perfect plan for your matrimony journey. Start free or upgrade to AI Match+ for unlimited access and premium features.',
};

const comparisonFeatures = [
  {
    category: 'Profile & Visibility',
    features: [
      { name: 'Create profile', free: true, plus: true },
      { name: 'Profile photo upload', free: 'Up to 2', plus: 'Unlimited' },
      { name: 'Profile visibility', free: 'Standard', plus: 'Boosted Priority' },
      { name: 'Appear in AI recommendations', free: 'Limited', plus: 'Priority Placement' },
      { name: 'Featured in search results', free: false, plus: true },
    ],
  },
  {
    category: 'Match Suggestions',
    features: [
      { name: 'AI match suggestions', free: '3 per day', plus: 'Unlimited' },
      { name: 'Compatibility score', free: 'Basic', plus: 'Detailed Analysis' },
      { name: 'Match reasons & insights', free: false, plus: true },
      { name: 'Priority matching', free: false, plus: true },
    ],
  },
  {
    category: 'Search & Discovery',
    features: [
      { name: 'View profiles per day', free: '10', plus: 'Unlimited' },
      { name: 'Basic search filters', free: true, plus: true },
      { name: 'Advanced filters', free: false, plus: true },
      { name: 'Save searches', free: false, plus: true },
      { name: 'See who viewed you', free: false, plus: true },
    ],
  },
  {
    category: 'Communication',
    features: [
      { name: 'Send interests/likes', free: '5 per day', plus: 'Unlimited' },
      { name: 'Receive interests', free: true, plus: true },
      { name: 'Reply to interests', free: false, plus: true },
      { name: 'Chat with matches', free: false, plus: true },
      { name: 'Share contact details', free: false, plus: true },
      { name: 'Voice/video call support', free: false, plus: true },
    ],
  },
  {
    category: 'AI Features',
    features: [
      { name: 'AI profile creation', free: 'Basic', plus: 'Advanced + Optimization' },
      { name: 'AI horoscope matching', free: false, plus: true },
      { name: 'Compatibility analysis', free: false, plus: true },
      { name: 'Personalized recommendations', free: false, plus: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'WhatsApp support', free: 'Standard', plus: 'Priority' },
      { name: 'Profile assistance', free: false, plus: true },
      { name: 'Success manager', free: false, plus: true },
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Award size={18} className="text-gold-600" />
                <span>Choose Your Plan</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Start Free, Upgrade When Ready
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Begin your matrimony journey at no cost. Upgrade to unlock unlimited 
                matches and premium features when you're ready to connect.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* Free Plan */}
            <AnimatedSection delay={0.1}>
              <div className="card border-2 border-gray-200 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={40} className="text-gray-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-maroon-700 mb-2 font-serif">
                    Explore
                  </h2>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    Free
                  </div>
                  <p className="text-gray-600">Forever free to explore</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h3 className="font-bold text-maroon-700 mb-4 text-lg">Perfect For:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Getting started with NAIRmatchu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Exploring the platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Understanding how AI matching works</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
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
              </div>
            </AnimatedSection>

            {/* Plus Plan */}
            <AnimatedSection delay={0.2}>
              <div className="card-premium h-full flex flex-col relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-maroon-900 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                  <Award size={18} />
                  MOST POPULAR
                </div>

                <div className="text-center mb-8 mt-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={40} className="text-gold-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 font-serif">
                    AI Match+
                  </h2>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold">₹999</span>
                    <span className="text-xl opacity-80">/ 3 months</span>
                  </div>
                  <p className="opacity-90">Just ₹299 per month</p>
                </div>

                <div className="border-t border-white/20 pt-8 mb-8">
                  <h3 className="font-bold mb-4 text-lg">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>Serious about finding a match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>Want unlimited access & features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>Need priority visibility & support</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => initiatePayment('AI Match+ (3 months)', 999)}
                    className="bg-white text-maroon-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg w-full"
                  >
                    <MessageCircle size={20} />
                    Pay ₹999 Now
                  </button>
                  <p className="text-center text-sm mt-3 opacity-75">
                    Secure payment via Razorpay
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Detailed Comparison Table */}
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-maroon-700 text-center mb-12 font-serif">
                Detailed Feature Comparison
              </h2>

              <div className="space-y-8">
                {comparisonFeatures.map((category, catIndex) => (
                  <AnimatedSection key={category.category} delay={catIndex * 0.05}>
                    <div className="card">
                      <h3 className="text-xl font-bold text-maroon-700 mb-6 font-serif border-b border-gray-200 pb-3">
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.features.map((feature, featIndex) => (
                          <div 
                            key={featIndex}
                            className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-100 last:border-0"
                          >
                            <div className="col-span-1 text-gray-700 font-medium">
                              {feature.name}
                            </div>
                            <div className="text-center">
                              {typeof feature.free === 'boolean' ? (
                                feature.free ? (
                                  <Check size={24} className="text-green-600 mx-auto" />
                                ) : (
                                  <X size={24} className="text-gray-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-gray-600 text-sm">{feature.free}</span>
                              )}
                            </div>
                            <div className="text-center">
                              {typeof feature.plus === 'boolean' ? (
                                feature.plus ? (
                                  <Check size={24} className="text-maroon-600 mx-auto" />
                                ) : (
                                  <X size={24} className="text-gray-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-maroon-600 font-medium text-sm">{feature.plus}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-maroon-700 text-center mb-12 font-serif">
                Why Upgrade to AI Match+?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card text-center">
                  <TrendingUp size={48} className="text-maroon-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                    3x More Matches
                  </h3>
                  <p className="text-gray-600">
                    Plus members receive 3 times more match suggestions with detailed compatibility insights
                  </p>
                </div>

                <div className="card text-center">
                  <Zap size={48} className="text-maroon-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                    5x Faster Connections
                  </h3>
                  <p className="text-gray-600">
                    Priority visibility means you connect with matches 5 times faster than free members
                  </p>
                </div>

                <div className="card text-center">
                  <Award size={48} className="text-maroon-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                    Premium Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated success manager and priority WhatsApp support for faster responses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQs about Plans */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-maroon-700 text-center mb-12 font-serif">
                Common Questions About Plans
              </h2>

              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-maroon-700 mb-3">
                    Can I try before upgrading?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! Start with our free Explore plan to understand how NAIRmatchu works. 
                    You can upgrade to AI Match+ anytime via WhatsApp when you're ready to unlock all features.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-maroon-700 mb-3">
                    What happens after 3 months?
                  </h3>
                  <p className="text-gray-600">
                    Your subscription will expire and you'll move to the free plan. You can renew 
                    anytime via WhatsApp to continue enjoying premium features.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-maroon-700 mb-3">
                    Can I cancel anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes. While we don't offer refunds for unused time, you can choose not to renew. 
                    Your premium features will remain active until the end of your subscription period.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-maroon-700 mb-3">
                    Is my payment secure?
                  </h3>
                  <p className="text-gray-600">
                    Yes. All payments are processed through secure, encrypted channels. We never 
                    store your payment information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Start free today and upgrade when you're ready to connect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink(whatsappMessages.explore)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-maroon-700 px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={24} />
                Start Free
              </a>
              <a
                href={getWhatsAppLink(whatsappMessages.upgrade)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-whatsapp-dark transition-all duration-300 hover:scale-105"
              >
                <Award size={24} />
                Get AI Match+
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
