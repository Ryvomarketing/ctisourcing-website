import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  productInterest: string;
  estimatedVolume?: string;
  message?: string;
}

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max) : str;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.companyName || !data.email || !data.productInterest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(data.email) || data.email.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize and truncate all fields
    const safe = {
      fullName: escapeHtml(truncate(data.fullName, MAX_FIELD_LENGTH)),
      companyName: escapeHtml(truncate(data.companyName, MAX_FIELD_LENGTH)),
      email: escapeHtml(truncate(data.email, MAX_FIELD_LENGTH)),
      phone: data.phone ? escapeHtml(truncate(data.phone, MAX_FIELD_LENGTH)) : "Not provided",
      productInterest: escapeHtml(truncate(data.productInterest, MAX_FIELD_LENGTH)),
      estimatedVolume: data.estimatedVolume ? escapeHtml(truncate(data.estimatedVolume, MAX_FIELD_LENGTH)) : "Not specified",
      message: data.message ? escapeHtml(truncate(data.message, MAX_MESSAGE_LENGTH)) : "No message provided",
    };

    await transporter.sendMail({
      from: `CTI Sourcing <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `New Quote Request from ${safe.companyName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safe.fullName}</p>
        <p><strong>Company:</strong> ${safe.companyName}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Product Interest:</strong> ${safe.productInterest}</p>
        <p><strong>Estimated Volume:</strong> ${safe.estimatedVolume}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

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
