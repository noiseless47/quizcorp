import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { teamName } = body;

    if (!teamName) {
      return NextResponse.json(
        { error: 'Team name is required' },
        { status: 400 }
      );
    }

    // Generate a unique order ID
    const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // Simplified order data according to documentation
    const orderData = {
      order_id: orderId,
      order_amount: 150.00,
      order_currency: "INR",
      customer_details: {
        customer_id: `cust_${Date.now()}`,
        customer_name: teamName,
        customer_email: "utpt.rvquizcorp@gmail.com",
        customer_phone: "8474090589"
      },
      order_meta: {
        return_url: process.env.NODE_ENV === "production"
          ? "https://www.quizcorp.tech/payment-success?order_id={order_id}"
          : "https://quizcorp.vercel.app/payment-success?order_id={order_id}"
      }
    };

    console.log('Creating Cashfree order with data:', orderData);

    // Call Cashfree API exactly as in documentation
    const response = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'x-client-id': process.env.CASHFREE_APP_ID!,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
        'Content-Type': 'application/json',
        'x-api-version': '2025-01-01'
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();
    console.log('Cashfree API response:', data);

    if (!response.ok) {
      console.error('Cashfree error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to create order' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
      amount: data.order_amount,
      currency: data.order_currency
    });
  } catch (error) {
    console.error('Error creating Cashfree order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 