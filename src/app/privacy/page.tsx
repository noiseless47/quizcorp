"use client";

import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 font-jockey-one">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700 font-itim text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Institution details</li>
                <li>Payment information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process your event registrations</li>
                <li>Send you important updates about events</li>
                <li>Communicate with you about your inquiries</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Event partners and sponsors (with your consent)</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Improve your browsing experience</li>
                <li>Analyze website traffic</li>
                <li>Remember your preferences</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:utpt.rvquizcorp@gmail.com" className="hover:text-[#f36d21] transition-colors">
                  Email: utpt.rvquizcorp@gmail.com<br />
                </a>
                <a href="tel:+919448417237" className="hover:text-[#4c8693] transition-colors">
                  Phone: +91 94484 17237
                </a>
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500 mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 