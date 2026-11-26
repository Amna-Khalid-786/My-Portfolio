import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: subject || `New Message from ${name} (Portfolio)`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f11; border-radius: 16px; overflow: hidden; border: 1px solid #1e1e24;">
          <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">📩 New Portfolio Message</h1>
          </div>
          <div style="padding: 32px 24px; color: #e2e8f0;">
            <div style="background: #1a1a2e; border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid #2d2d44;">
              <p style="margin: 0 0 8px; color: #818cf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600; color: white;">${name}</p>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 14px;">${email}</p>
            </div>
            <div style="background: #1a1a2e; border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid #2d2d44;">
              <p style="margin: 0 0 8px; color: #818cf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">Subject</p>
              <p style="margin: 0; font-size: 16px; color: white;">${subject || "No subject"}</p>
            </div>
            <div style="background: #1a1a2e; border-radius: 12px; padding: 20px; border: 1px solid #2d2d44;">
              <p style="margin: 0 0 8px; color: #818cf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">Message</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #e2e8f0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; border-top: 1px solid #1e1e24; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">Sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
