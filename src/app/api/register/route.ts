import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';

export async function POST(request: Request) {
  try {
    // Connect to database
    await dbConnect();

    // Parse request body
    const body = await request.json();

    // Create new registration
    const registration = await Registration.create({
      teamName: body.teamName,
      quizType: body.quizType,
      college: body.college,
      experience: body.experience || '',
      member1: {
        name: body.member1.name,
        email: body.member1.email,
        phone: body.member1.phone,
      },
      member2: body.member2 ? {
        name: body.member2.name,
        email: body.member2.email,
        phone: body.member2.phone,
      } : undefined,
      member3: body.member3 ? {
        name: body.member3.name,
        email: body.member3.email,
        phone: body.member3.phone,
      } : undefined,
    });

    return NextResponse.json({ success: true, data: registration });
  } catch (error) {
    console.error('Error saving registration:', error);
    return NextResponse.json(
      { error: 'Failed to save registration' },
      { status: 500 }
    );
  }
} 