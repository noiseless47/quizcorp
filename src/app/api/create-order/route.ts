import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Redirect to our new Cashfree implementation
    return NextResponse.json(
      { message: 'This endpoint is deprecated. Please use /api/create-cashfree-order instead.' },
      { status: 308 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 