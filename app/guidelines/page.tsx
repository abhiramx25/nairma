import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Community Guidelines - NAIRmatchu',
  description: 'Guidelines for respectful and safe interactions on NAIRmatchu platform.',
};

export default function GuidelinesPage() {
  return (
    <div className="pt-24">
      <section className="py-20 kerala-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users size={64} className="mx-auto mb-6 text-maroon-600" />
                <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
                  Community Guidelines
                </h1>
                <p className="text-xl text-gray-600">
                  Building a respectful and safe matrimony platform
                </p>
              </div>

              <div className="card space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Our Commitment
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    NAIRmatchu is committed to providing a safe, respectful, and trustworthy 
                    platform for the Nair community to find meaningful matches. These guidelines 
                    help ensure a positive experience for everyone.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Be Authentic
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Use real, recent photos</li>
                    <li>Provide accurate information about yourself and your family</li>
                    <li>Be honest about your intentions and expectations</li>
                    <li>Don&apos;t impersonate others or create fake profiles</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Be Respectful
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Treat all members with dignity and courtesy</li>
                    <li>Respect cultural and personal boundaries</li>
                    <li>Accept rejection gracefully</li>
                    <li>Avoid offensive language or behavior</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Be Safe
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Protect your personal information</li>
                    <li>Report suspicious profiles or behavior</li>
                    <li>Meet in public places when meeting in person</li>
                    <li>Trust your instincts</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Prohibited Behavior
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The following behaviors are strictly prohibited and will result in account 
                    suspension or termination:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Harassment, bullying, or threatening behavior</li>
                    <li>Sharing inappropriate content</li>
                    <li>Soliciting money or financial information</li>
                    <li>Spam or commercial activities</li>
                    <li>Discriminatory behavior based on caste, religion, or other factors</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-maroon-700 mb-4 font-serif">
                    Reporting Violations
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you encounter behavior that violates these guidelines, please report it 
                    immediately via WhatsApp. We take all reports seriously and investigate 
                    promptly to maintain a safe community.
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
