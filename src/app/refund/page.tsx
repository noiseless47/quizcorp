"use client";

import { useEffect } from "react";

export default function Refund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 font-jockey-one">Refund Policy</h1>
          
          <div className="space-y-6 text-gray-700 font-itim text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">1. General Policy</h2>
              <p>
                RV QuizCorp strives to ensure customer satisfaction with all our events and services. This refund policy outlines the terms and conditions for requesting and receiving refunds for our events and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">2. Event Registration Refunds</h2>
              <p>
                For event registrations, the following refund policy applies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Full refund available up to 7 days before the event</li>
                <li>50% refund available between 7 days and 24 hours before the event</li>
                <li>No refunds available within 24 hours of the event</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">3. Cancellation by RV QuizCorp</h2>
              <p>
                In the event that RV QuizCorp cancels an event:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Full refund will be provided to all registered participants</li>
                <li>Participants will be notified immediately of the cancellation</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">4. Refund Process</h2>
              <p>
                To request a refund:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Send an email to utpt.rvquizcorp@gmail.com</li>
                <li>Include your registration details and reason for refund</li>
                <li>Our team will review your request and respond within 24 hours</li>
                <li>Once approved, refunds will be processed to the original payment method</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">5. Non-Refundable Items</h2>
              <p>
                The following items are non-refundable:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Event merchandise already shipped</li>
                <li>Processing fees</li>
                <li>Donations</li>
                <li>Special event packages with non-refundable components</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">6. Contact Information</h2>
              <p>
                For any questions regarding our refund policy, please contact us at:
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