import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Type for expected incoming request body
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: { value: string; label: string };
  message: string;
  terms: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email options
    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: process.env.TO_EMAIL,
      subject: `New Inquiry from ${body.name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service.label}</p>
        <p><strong>Message:</strong><br>${body.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
