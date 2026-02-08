import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Terms of Service - NAIRmatchu',
  description: 'Read the terms and conditions for using NAIRmatchu matrimony platform.',
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <FileText size={64} className="mx-auto mb-6 text-maroon-600" />
                <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
                  Terms of Service
                </h1>
                <p className="text-xl text-gray-600">
                  Last updated: February 2026
                </p>
              </div>

              <div className="card space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using NAIRmatchu, you accept and agree to be bound by these 
                    Terms of Service. If you do not agree to these terms, please do not use our 
                    platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Eligibility
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You must be at least 18 years old to use NAIRmatchu. By using this platform, 
                    you represent that you meet this age requirement and that all information you 
                    provide is accurate and truthful.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    User Responsibilities
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    As a user of NAIRmatchu, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account</li>
                    <li>Use the platform respectfully and lawfully</li>
                    <li>Not misrepresent yourself or your intentions</li>
                    <li>Not harass or abuse other users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Subscription and Payments
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Subscriptions are charged as outlined in our pricing plans. Payments are 
                    non-refundable. You can cancel your subscription at any time, and you will 
                    retain access to premium features until the end of your billing period.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Content and Conduct
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to remove any content or suspend accounts that violate 
                    our community guidelines or these terms. Prohibited conduct includes but is 
                    not limited to harassment, spam, fraudulent activity, or any illegal behavior.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    NAIRmatchu is a platform for facilitating connections. We are not responsible 
                    for the actions of users or the outcome of relationships formed through our 
                    platform. Users are responsible for their own decisions and interactions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Changes to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update these Terms of Service from time to time. Continued use of the 
                    platform after changes constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about these Terms of Service, please contact us via WhatsApp 
                    or email at sreeraggabru086@gmail.com.
                  </p>
                </section>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
