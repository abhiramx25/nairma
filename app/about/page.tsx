import type { Metadata } from 'next';
import { Heart, Target, Users, Sparkles, Shield, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About NAIRmatchu - Our Vision & Mission',
  description: 'Learn about NAIRmatchu\'s mission to revolutionize matrimony for the Nair community through AI-powered matchmaking and WhatsApp-first approach.',
};

const values = [
  {
    icon: Heart,
    title: 'Tradition Meets Technology',
    description: 'We honor the rich heritage of the Nair community while leveraging cutting-edge AI to make matchmaking more intelligent and effective.',
  },
  {
    icon: Shield,
    title: 'Privacy & Trust',
    description: 'Your privacy is paramount. We never share your data without permission and ensure every profile is verified and authentic.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Built exclusively for the Nair community, we understand your cultural values, traditions, and what matters in a life partner.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Intelligence',
    description: 'Our advanced algorithms learn from your preferences to suggest the most compatible matches, saving you time and effort.',
  },
];

const stats = [
  { number: '500+', label: 'Active Members' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '50+', label: 'Success Stories' },
  { number: '24/7', label: 'WhatsApp Support' },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full mb-6 font-medium">
                <Heart size={18} className="text-gold-600" />
                <span>About NAIRmatchu</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Reimagining Matrimony for the Nair Community
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NAIRmatchu is Kerala&apos;s first AI-powered matrimony platform built exclusively 
                for the Nair community, combining traditional values with modern technology 
                to help you find your perfect life partner.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-maroon-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-50 to-ivory-100">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target size={40} className="text-maroon-600" />
                  <h2 className="text-4xl font-bold text-maroon-700 font-serif">Our Vision</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    To become the most trusted matrimony platform for the Nair community, 
                    where every member finds their ideal life partner through intelligent 
                    matchmaking that respects tradition while embracing innovation.
                  </p>
                  <p>
                    We envision a future where finding a compatible match is not just about 
                    browsing endless profiles, but about meaningful connections suggested by 
                    AI that truly understands your preferences, values, and aspirations.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Nair Exclusive Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center">Why Nair-Exclusive?</h2>
              <p className="section-subheading text-center">
                Understanding our community&apos;s unique needs
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  The Nair community has a rich cultural heritage with specific traditions, 
                  values, and expectations when it comes to matrimony. By focusing exclusively 
                  on the Nair community, we can:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Cultural Understanding
                    </h3>
                    <p className="text-gray-600">
                      Our platform is designed with deep understanding of Nair traditions, 
                      family values, and cultural expectations.
                    </p>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Relevant Matches
                    </h3>
                    <p className="text-gray-600">
                      Every profile you see is from within the community, ensuring cultural 
                      compatibility from the start.
                    </p>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Community Trust
                    </h3>
                    <p className="text-gray-600">
                      Members feel more comfortable knowing they&apos;re part of a trusted, 
                      close-knit community platform.
                    </p>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Specialized Support
                    </h3>
                    <p className="text-gray-600">
                      Our support team understands community-specific queries and can 
                      provide relevant guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* AI & Technology Section */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <Sparkles size={40} className="text-gold-600" />
                <h2 className="text-4xl font-bold text-maroon-700 font-serif">
                  The Role of AI in Matchmaking
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="text-center mb-8 text-xl">
                  Our AI doesn&apos;t replace the human element in matrimony—it enhances it by 
                  helping you find the most compatible matches faster and more accurately.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card text-center">
                    <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-maroon-600" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Smart Learning
                    </h3>
                    <p className="text-gray-600">
                      AI learns from your preferences and behavior to improve match suggestions over time.
                    </p>
                  </div>

                  <div className="card text-center">
                    <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-maroon-600" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Compatibility Analysis
                    </h3>
                    <p className="text-gray-600">
                      Advanced algorithms analyze multiple factors to determine compatibility scores.
                    </p>
                  </div>

                  <div className="card text-center">
                    <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles size={32} className="text-maroon-600" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif">
                      Personalized Experience
                    </h3>
                    <p className="text-gray-600">
                      Every user gets a unique, personalized matchmaking experience tailored to their needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-heading text-center">Our Core Values</h2>
            <p className="section-subheading text-center">
              The principles that guide everything we do
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="card flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-maroon-100 rounded-lg flex items-center justify-center">
                        <value.icon size={28} className="text-maroon-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-maroon-700 mb-3 font-serif">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust & Privacy Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Shield size={64} className="mx-auto mb-6 text-gold-400" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Your Trust is Our Priority
              </h2>
              <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                <p>
                  At NAIRmatchu, we understand that matrimony is one of the most important 
                  decisions in life. That&apos;s why we&apos;ve built our platform with trust, privacy, 
                  and security as foundational pillars.
                </p>
                <p>
                  Every profile is manually verified. Your data is encrypted and never shared 
                  without your explicit permission. Our WhatsApp-first approach means you&apos;re 
                  always in control of your conversations and connections.
                </p>
                <p>
                  We&apos;re not just a platform—we&apos;re your partner in finding the right match, 
                  with your best interests at heart every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
