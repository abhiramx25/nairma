import type { Metadata } from 'next';
import { MessageCircle, UserPlus, Sparkles, Heart, Shield, Search, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'How It Works - NAIRmatchu Journey',
  description: 'Learn how NAIRmatchu uses AI and WhatsApp to help you find your perfect match in 4 simple steps.',
};

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Click WhatsApp Link',
    description: 'Start your journey with a single tap. No complex registration forms or app downloads needed.',
    details: [
      'Click on any "Start on WhatsApp" button on our website',
      'You\'ll be redirected to WhatsApp with our AI bot',
      'No need to create accounts or remember passwords',
      'Works on any device with WhatsApp installed',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Create Profile via AI',
    description: 'Our intelligent bot guides you through profile creation in a natural, conversational way.',
    details: [
      'Answer simple questions about yourself and preferences',
      'AI helps you create an attractive, complete profile',
      'Upload photos and add details at your own pace',
      'Parents can create and manage profiles for their children',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Receive Smart Matches',
    description: 'Get personalized match suggestions based on compatibility, preferences, and AI analysis.',
    details: [
      'AI analyzes your profile and preferences',
      'Receive daily match suggestions via WhatsApp',
      'See compatibility scores and reasons for each match',
      'Matches improve as AI learns your preferences',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Connect Securely',
    description: 'Express interest, chat with matches, and take your relationship forward—all through WhatsApp.',
    details: [
      'Send interests to profiles you like',
      'Chat directly with mutual matches',
      'Share contact details when ready',
      'Your privacy is protected at every step',
    ],
    color: 'from-red-500 to-red-600',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Control what you share and when. All communications are secure and private.',
  },
  {
    icon: Search,
    title: 'Advanced Filters',
    description: 'Search with detailed filters including education, profession, location, and more.',
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description: 'Get real-time updates on WhatsApp when someone views your profile or sends interest.',
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Intelligent suggestions that get better over time as the AI learns your preferences.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Sparkles size={18} className="text-gold-600" />
                <span>Simple & Effective</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Your Journey to Finding the Perfect Match
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NAIRmatchu makes matrimony simple, intelligent, and secure. 
                Here's exactly how it works in 4 easy steps.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="mb-20 last:mb-0">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                          {step.number}
                        </div>
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                          <step.icon size={28} />
                        </div>
                      </div>

                      <h2 className="text-4xl font-bold text-maroon-700 mb-4 font-serif">
                        {step.title}
                      </h2>
                      
                      <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight size={20} className="text-maroon-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className={`relative h-96 rounded-2xl bg-gradient-to-br ${step.color} p-1 shadow-soft-lg`}>
                        <div className="h-full rounded-xl bg-white flex items-center justify-center">
                          <step.icon size={120} className="text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-12">
                      <div className="w-1 h-20 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">Additional Features</h2>
              <p className="section-subheading">
                More reasons to choose NAIRmatchu
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

      {/* WhatsApp Advantages */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MessageCircle size={64} className="mx-auto mb-6 text-whatsapp" />
                <h2 className="section-heading">Why WhatsApp?</h2>
                <p className="section-subheading">
                  The perfect platform for matrimony
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Familiarity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Everyone already uses WhatsApp. No need to learn a new app or platform. 
                    Parents and family members can easily participate in the process.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Privacy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end encrypted messages mean your conversations are completely 
                    private. You control who sees what and when.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Convenience
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get notifications instantly. Respond when convenient. Share photos, voice 
                    messages, and video calls all in one place.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Trust
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    WhatsApp's verified business account badge ensures you're talking to the 
                    real NAIRmatchu, not an imposter.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join NAIRmatchu today and start your journey to finding your perfect match
            </p>
            <a
              href={getWhatsAppLink(whatsappMessages.start)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-whatsapp-dark transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={28} />
              Start on WhatsApp Now
              <ArrowRight size={24} />
            </a>
            <p className="mt-6 text-sm opacity-75">
              100% Free to start • Takes less than 5 minutes
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
