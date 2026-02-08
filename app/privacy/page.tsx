import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy - NAIRmatchu',
  description: 'Learn how NAIRmatchu protects your privacy and handles your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield size={64} className="mx-auto mb-6 text-maroon-600" />
                <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-600">
                  Last updated: February 2026
                </p>
              </div>

              <div className="card space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Your Privacy Matters
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    At NAIRmatchu, we are committed to protecting your privacy and ensuring the 
                    security of your personal information. This Privacy Policy outlines how we 
                    collect, use, and safeguard your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Information We Collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We collect information you provide when creating your profile, including but 
                    not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Personal details (name, age, location)</li>
                    <li>Educational and professional information</li>
                    <li>Family background</li>
                    <li>Preferences and requirements</li>
                    <li>Photos and media you upload</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your information is used to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Provide AI-powered match suggestions</li>
                    <li>Enable communication with matches</li>
                    <li>Improve our services</li>
                    <li>Send relevant updates and notifications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement industry-standard security measures to protect your data. All 
                    information is encrypted and stored securely. We never share your personal 
                    information with third parties without your explicit consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Your Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to access, update, or delete your personal information at 
                    any time. Contact us via WhatsApp to exercise these rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us via 
                    WhatsApp or email at hello@nairmatchu.com.
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
