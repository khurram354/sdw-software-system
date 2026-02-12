import { NextResponse } from 'next/server';
import sendEmail from '@/helper/sendEmail';

export async function POST(request) {
  try {
    const formData = await request.json();
    if (!formData.email || !formData.firstName) {
      return NextResponse.json(
        { error: 'Missing required fields (email, first name)' },
        { status: 400 }
      );
    }
    await sendEmail(formData);
    return NextResponse.json(
      { success: true, message: 'Inquiry sent successfully, We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}