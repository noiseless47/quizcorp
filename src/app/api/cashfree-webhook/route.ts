import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received webhook data:', body);

    // Handle payment success webhook
    if (body.type === 'PAYMENT_SUCCESS_WEBHOOK') {
      const paymentStatus = body.data.payment.payment_status;
      
      if (paymentStatus === 'SUCCESS') {
        // Process successful payment
        // Here you would update your database
        console.log('Payment successful');
      }
    }

    // Always return 200 to acknowledge receipt of webhook
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
} 