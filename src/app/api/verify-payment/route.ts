import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('order_id');

  if (!orderId) {
    return NextResponse.json(
      { error: 'Order ID is required' },
      { status: 400 }
    );
  }

  try {
    // Call Cashfree API to get payment status
    const response = await fetch(`https://api.cashfree.com/pg/orders/${orderId}/payments`, {
      method: 'GET',
      headers: {
        'x-client-id': process.env.CASHFREE_APP_ID!,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
        'Accept': 'application/json',
        'x-api-version': '2025-01-01'
      }
    });

    const data = await response.json();
    console.log('Payment verification response:', data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to verify payment' },
        { status: response.status }
      );
    }

    // Determine payment status as shown in the example
    let orderStatus;
    if (data.filter((transaction: any) => transaction.payment_status === "SUCCESS").length > 0) {
      orderStatus = "Success";
    } else if (data.filter((transaction: any) => transaction.payment_status === "PENDING").length > 0) {
      orderStatus = "Pending";
    } else {
      orderStatus = "Failure";
    }

    return NextResponse.json({
      status: orderStatus,
      orderId: orderId
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
} 