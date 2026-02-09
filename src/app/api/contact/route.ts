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
const NAME_REGEX = /^[a-zA-Z\s\-'.]+$/;
const COMPANY_REGEX = /^[a-zA-Z0-9\s\-'.,&()]+$/;
const PHONE_REGEX = /^\(\d{3}\) \d{3}-\d{4}$/;
const ALLOWED_PRODUCTS = ["beeswax", "honey", "both", "other"];
const ALLOWED_VOLUMES = ["under-500kg", "500kg-1mt", "1mt-5mt", "over-5mt", "not-sure", ""];

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

    // Validate field formats
    if (!NAME_REGEX.test(data.fullName) || data.fullName.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { error: "Name contains invalid characters" },
        { status: 400 }
      );
    }

    if (!COMPANY_REGEX.test(data.companyName) || data.companyName.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { error: "Company name contains invalid characters" },
        { status: 400 }
      );
    }

    if (data.phone && !PHONE_REGEX.test(data.phone)) {
      return NextResponse.json(
        { error: "Phone must be a valid US number: (XXX) XXX-XXXX" },
        { status: 400 }
      );
    }

    if (!ALLOWED_PRODUCTS.includes(data.productInterest)) {
      return NextResponse.json(
        { error: "Invalid product selection" },
        { status: 400 }
      );
    }

    if (data.estimatedVolume && !ALLOWED_VOLUMES.includes(data.estimatedVolume)) {
      return NextResponse.json(
        { error: "Invalid volume selection" },
        { status: 400 }
      );
    }

    if (data.message && data.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Message is too long" },
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

    // Notification email to CTI Sourcing
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

    // Friendly labels for confirmation email
    const productLabels: Record<string, string> = {
      beeswax: "Organic Beeswax",
      honey: "Organic Honey",
      both: "Organic Beeswax & Honey",
      other: "Other",
    };
    const volumeLabels: Record<string, string> = {
      "under-500kg": "Under 500 kg",
      "500kg-1mt": "500 kg – 1 MT",
      "1mt-5mt": "1 MT – 5 MT",
      "over-5mt": "Over 5 MT",
      "not-sure": "Not sure yet",
    };

    const productDisplay = productLabels[data.productInterest] || safe.productInterest;
    const volumeDisplay = data.estimatedVolume
      ? (volumeLabels[data.estimatedVolume] || safe.estimatedVolume)
      : "Not specified";

    // Confirmation email to the submitter
    await transporter.sendMail({
      from: `CTI Sourcing <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: "We Received Your Quote Request — CTI Sourcing",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:#0A0A0A;padding:32px 40px;text-align:center;">
            <img src="https://ctisourcing.com/images/ctisourcing%20logo%20no%20background.png" alt="CTI Sourcing" width="140" style="display:block;margin:0 auto 12px;" />
            <h1 style="color:#D4A853;font-size:22px;margin:0;font-weight:700;letter-spacing:0.5px;">CTI Sourcing</h1>
            <p style="color:#999999;font-size:13px;margin:6px 0 0;letter-spacing:1px;text-transform:uppercase;">Organic Beeswax &amp; Honey from Tanzania</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px 24px;">
            <p style="font-size:16px;color:#333333;margin:0 0 8px;">Dear ${safe.fullName},</p>
            <p style="font-size:15px;color:#555555;line-height:1.6;margin:0 0 24px;">
              Thank you for reaching out to CTI Sourcing. We have received your quote request and a member of our team will be in touch with you <strong>within 24 hours</strong>.
            </p>

            <h2 style="font-size:15px;color:#0A0A0A;margin:0 0 12px;padding-bottom:8px;border-bottom:2px solid #D4A853;">Your Inquiry Summary</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:8px 0;font-size:14px;color:#888888;width:140px;vertical-align:top;">Company</td>
                <td style="padding:8px 0;font-size:14px;color:#333333;">${safe.companyName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:14px;color:#888888;vertical-align:top;">Product Interest</td>
                <td style="padding:8px 0;font-size:14px;color:#333333;">${escapeHtml(productDisplay)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:14px;color:#888888;vertical-align:top;">Estimated Volume</td>
                <td style="padding:8px 0;font-size:14px;color:#333333;">${escapeHtml(volumeDisplay)}</td>
              </tr>
              ${safe.message !== "No message provided" ? `
              <tr>
                <td style="padding:8px 0;font-size:14px;color:#888888;vertical-align:top;">Your Message</td>
                <td style="padding:8px 0;font-size:14px;color:#333333;">${safe.message}</td>
              </tr>` : ""}
            </table>

            <p style="font-size:14px;color:#555555;line-height:1.6;margin:0 0 4px;">
              If you have any urgent questions in the meantime, feel free to reply directly to this email.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e8e8e8;margin:0;" /></td></tr>

        <!-- Signature -->
        <tr>
          <td style="padding:24px 40px 32px;">
            <p style="font-size:14px;color:#333333;margin:0 0 4px;font-weight:600;">CTI Sourcing</p>
            <p style="font-size:13px;color:#777777;margin:0 0 2px;">Organic Beeswax &amp; Honey — Direct from Tanzania</p>
            <p style="font-size:13px;color:#777777;margin:0 0 2px;">
              <a href="mailto:info@ctisourcing.com" style="color:#D4A853;text-decoration:none;">info@ctisourcing.com</a>
            </p>
            <p style="font-size:13px;margin:0;">
              <a href="https://ctisourcing.com" style="color:#D4A853;text-decoration:none;">ctisourcing.com</a>
            </p>
          </td>
        </tr>

      </table>

      <!-- Footer -->
      <p style="font-size:11px;color:#aaaaaa;margin:16px 0 0;text-align:center;">
        You received this email because a quote request was submitted from ctisourcing.com using this email address.
      </p>
    </td></tr>
  </table>
</body>
</html>
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
