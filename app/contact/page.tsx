import type { Metadata } from 'next';
import { MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with NAIRmatchu',
  description: 'Have questions? Reach out to NAIRmatchu via WhatsApp for instant support. We\'re here to help you find your perfect match.',
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Fastest way to reach us. Get instant responses to your queries.',
    detail: 'Response time: 2-4 hours',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries or partnership opportunities.',
    detail: 'sreeraggabru086@gmail.com',
    primary: false,
  },
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM IST' },
  { day: 'Saturday', hours: '10:00 AM - 5:00 PM IST' },
  { day: 'Sunday', hours: 'WhatsApp bot available 24/7' },
];

const quickLinks = [
  { 
    title: 'General Inquiry',
    description: 'Questions about how NAIRmatchu works',
    message: whatsappMessages.contact,
  },
  { 
    title: 'Technical Support',
    description: 'Issues with profile or features',
    message: 'Hi! I need technical support with NAIRmatchu',
  },
  { 
    title: 'Subscription Help',
    description: 'Questions about plans and billing',
    message: whatsappMessages.plans,
  },
  { 
    title: 'Profile Assistance',
    description: 'Help with creating or optimizing profile',
    message: 'Hi! I need help with my NAIRmatchu profile',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full mb-6 font-medium">
                <MessageCircle size={18} className="text-gold-600" />
                <span>We&apos;re Here to Help</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have questions about NAIRmatchu? Our support team is ready to assist you 
                on your journey to finding the perfect match.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                <div className={`card h-full ${method.primary ? 'border-2 border-whatsapp' : ''}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    method.primary ? 'bg-whatsapp' : 'bg-maroon-100'
                  }`}>
                    <method.icon size={32} className={method.primary ? 'text-white' : 'text-maroon-600'} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-maroon-700 mb-3 font-serif">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="text-lg font-medium text-maroon-600 mb-6">
                    {method.detail}
                  </div>

                  {method.primary ? (
                    <a
                      href={getWhatsAppLink(whatsappMessages.contact)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full"
                    >
                      <MessageCircle size={20} />
                      Chat on WhatsApp
                    </a>
                  ) : (
                    <a
                      href={`mailto:${method.detail}`}
                      className="btn-outline w-full flex items-center justify-center gap-2"
                    >
                      <Mail size={20} />
                      Send Email
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-heading">Quick Contact Options</h2>
              <p className="section-subheading">
                Choose the topic that best matches your query
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {quickLinks.map((link, index) => (
                <AnimatedSection key={link.title} delay={index * 0.1}>
                  <a
                    href={getWhatsAppLink(link.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group hover:shadow-maroon transition-all duration-300 hover:scale-105 block h-full"
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-bold text-maroon-700 mb-3 font-serif group-hover:text-maroon-600">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {link.description}
                      </p>
                      <div className="flex items-center gap-2 text-whatsapp font-medium">
                        <span>Start Chat</span>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg mb-6">
                <strong className="text-maroon-700">Pro Tip:</strong> We respond faster on WhatsApp! 
                Our AI bot is available 24/7 for instant answers.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Office Hours */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Clock size={48} className="mx-auto mb-4 text-maroon-600" />
                <h2 className="text-3xl font-bold text-maroon-700 mb-4 font-serif">
                  Support Hours
                </h2>
                <p className="text-gray-600">
                  Our human support team is available during these hours
                </p>
              </div>

              <div className="card">
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div 
                      key={schedule.day}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-maroon-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-whatsapp-light p-4 rounded-lg">
                    <p className="text-gray-700 text-center">
                      <strong className="text-whatsapp-dark">WhatsApp AI Bot:</strong> Available 24/7 
                      for instant answers to common questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Location */}
      <AnimatedSection>
        <section className="py-20 kerala-pattern">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card text-center">
                <MapPin size={48} className="mx-auto mb-4 text-maroon-600" />
                <h2 className="text-3xl font-bold text-maroon-700 mb-4 font-serif">
                  Our Office
                </h2>
                <p className="text-xl text-gray-700 mb-2">
                  NAIRmatchu Matrimony Services
                </p>
                <p className="text-gray-600 mb-6">
                  Kochi, Kerala, India
                </p>
                <p className="text-sm text-gray-500">
                  For in-person meetings, please schedule an appointment via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white">
          <div className="container-custom text-center">
            <MessageCircle size={64} className="mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Don&apos;t wait! Connect with us on WhatsApp and begin finding your perfect match today.
            </p>
            <a
              href={getWhatsAppLink(whatsappMessages.start)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-6 rounded-lg font-bold text-xl shadow-lg hover:bg-whatsapp-dark transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={28} />
              Start on WhatsApp
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
