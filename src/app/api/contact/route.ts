import { NextRequest, NextResponse } from "next/server";

// TODO: Install and configure Resend
// npm install resend
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  productInterest: string;
  estimatedVolume?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.companyName || !data.email || !data.productInterest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Implement Resend email sending
    // Uncomment and configure once Resend is set up:
    /*
    const { error } = await resend.emails.send({
      from: 'CTI Sourcing <noreply@ctisourcing.com>',
      to: ['sales@ctisourcing.com'],
      subject: `New Quote Request from ${data.companyName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Product Interest:</strong> ${data.productInterest}</p>
        <p><strong>Estimated Volume:</strong> ${data.estimatedVolume || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No message provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    */

    // For now, just log the submission (remove in production)
    console.log("Quote request received:", data);

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
