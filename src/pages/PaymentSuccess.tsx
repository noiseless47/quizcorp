import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function PaymentStatusChecker() {
  const [searchParams] = useSearchParams();
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
    } else {
        setStatus('error');
    }
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {status === 'loading' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900  mb-4">
              Verifying Payment...
            </h2>
            <p className="text-gray-600 ">Please wait while we verify your payment.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600  mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600  mb-8">
              Thank you for registering for UTPT. We'll send you a confirmation email shortly.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#4c8693] text-white px-6 py-3 rounded-lg hover:bg-[#3b697a] transition-all duration-300 "
            >
              Return to Homepage
            </Link>
          </div>
        )}

        {status === 'pending' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-yellow-600  mb-4">
              Payment Processing
            </h2>
            <p className="text-gray-600  mb-8">
              Your payment is being processed. We'll update you once it's confirmed.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#4c8693] text-white px-6 py-3 rounded-lg hover:bg-[#3b697a] transition-all duration-300 "
            >
              Return to Homepage
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600  mb-4">
              Payment Failed
            </h2>
            <p className="text-gray-600  mb-8">
              We couldn't verify your payment. Please contact support if you believe this is an error.
            </p>
            <Link
              to="/register"
              className="inline-block bg-[#f36d21] text-white px-6 py-3 rounded-lg hover:bg-[#d85d18] transition-all duration-300 "
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
    <PaymentStatusChecker />
  );
}
