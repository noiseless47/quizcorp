"use client";

import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 font-jockey-one">Terms & Conditions</h1>
          
          <div className="space-y-6 text-gray-700 font-itim text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the RV QuizCorp website, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on RV QuizCorp's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">3. Event Registration</h2>
              <p>
                By registering for any RV QuizCorp event, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Comply with all event rules and regulations</li>
                <li>Accept responsibility for any fees associated with the event</li>
                <li>Follow the refund policy as specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">4. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, and images, is the property of RV QuizCorp and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">5. Disclaimer</h2>
              <p>
                The materials on RV QuizCorp's website are provided on an 'as is' basis. RV QuizCorp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">6. Limitations</h2>
              <p>
                In no event shall RV QuizCorp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RV QuizCorp's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">7. Revisions and Errata</h2>
              <p>
                The materials appearing on RV QuizCorp's website could include technical, typographical, or photographic errors. RV QuizCorp does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="mt-2">
                Email: utpt.rvquizcorp@gmail.com<br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 