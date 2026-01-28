import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Validate environment variables
        const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT } = process.env;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.error("Nodemailer Configuration Error: Missing SMTP_HOST, SMTP_USER, or SMTP_PASS in environment variables.");
            return NextResponse.json({
                success: false,
                error: "Email configuration is missing. Please add your SMTP credentials to .env.local (SMTP_HOST, SMTP_USER, SMTP_PASS)."
            }, { status: 500 });
        }

        // Configure Nodemailer with SMTP settings from environment variables
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${SMTP_USER}>`, // Recommended to send 'from' your own authenticated email
            replyTo: email,
            to: 'amnapersonal4@gmail.com',
            subject: `New Message from ${name} (Portfolio)`,
            text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Portfolio Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Nodemailer Error Details:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to connect to the email server. Please check your SMTP credentials and network connection."
        }, { status: 500 });
    }
}
