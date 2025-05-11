"use client";

import { useEffect } from "react";

export default function Refund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-8 lg:px-16 motion-fade-in">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12">
          <h1 className="text-4xl font-bold mb-6 text-[#f36d21] font-jockey-one">Refund Policy</h1>
          <p className="text-lg text-gray-700 mb-6 font-itim">
            We regret to inform you that <span className="font-bold">no refunds are allowed</span> for any reason once payment has been made for event registrations or purchases. <br /><br />
            All payments are <span className="font-bold">final and non-refundable</span>. This policy applies to all circumstances, including but not limited to event cancellations, scheduling conflicts, personal emergencies, or changes in plans. <br /><br />
            This strict policy is necessary due to the advance planning, logistics, and commitments required to organize our events, as well as to ensure fairness to all participants. <br /><br />
            If you have any questions or concerns about an event or your registration, please <a href="mailto:utpt.rvquizcorp@gmail.com" className="underline hover:text-[#f36d21]">contact us</a> before making your payment. Thank you for your understanding and support.
          </p>
        </div>
      </div>
    </div>
  );
} 