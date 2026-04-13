import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, phone } = body;

    // Validate input
    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, password, phone' },
        { status: 400 }
      );
    }

    // Call the external API
    const response = await fetch('https://ecom-rest-topaz.vercel.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { error: data.message || data.error || 'Signup failed' },
        { status: response.status }
      );
    }

    // Return success
    return NextResponse.json(
      {
        user: data.user || { name, email, phone },
        token: data.token || '',
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
