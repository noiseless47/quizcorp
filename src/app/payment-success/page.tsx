"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentStatusChecker() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'pending' | 'error'>('loading');
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/verify-payment?order_id=${orderId}`);
        const data = await response.json();

        if (data.status === 'Success') {
          setStatus('success');
        } else if (data.status === 'Pending') {
          setStatus('pending');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('error');
      }
    };

    if (orderId) {
      verifyPayment();
    }
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {status === 'loading' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 font-jockey-one mb-4">
              Verifying Payment...
            </h2>
            <p className="text-gray-600 font-itim">Please wait while we verify your payment.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 font-jockey-one mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 font-itim mb-8">
              Thank you for registering for UTPT. We'll send you a confirmation email shortly.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#4c8693] text-white px-6 py-3 rounded-lg hover:bg-[#3b697a] transition-all duration-300 font-jockey-one"
            >
              Return to Homepage
            </Link>
          </div>
        )}

        {status === 'pending' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-yellow-600 font-jockey-one mb-4">
              Payment Processing
            </h2>
            <p className="text-gray-600 font-itim mb-8">
              Your payment is being processed. We'll update you once it's confirmed.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#4c8693] text-white px-6 py-3 rounded-lg hover:bg-[#3b697a] transition-all duration-300 font-jockey-one"
            >
              Return to Homepage
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 font-jockey-one mb-4">
              Payment Failed
            </h2>
            <p className="text-gray-600 font-itim mb-8">
              We couldn't verify your payment. Please contact support if you believe this is an error.
            </p>
            <Link
              href="/register"
              className="inline-block bg-[#f36d21] text-white px-6 py-3 rounded-lg hover:bg-[#d85d18] transition-all duration-300 font-jockey-one"
            >
              Try Again
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 font-jockey-one mb-4">
            Loading...
          </h2>
        </div>
      </div>
    }>
      <PaymentStatusChecker />
    </Suspense>
  );
} 