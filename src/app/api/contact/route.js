import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, service, message } = await request.json();

        // Check if environment variables are configured
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.warn('SMTP credentials missing. Logging message instead.');
            // Fallback for development/demo only
            return NextResponse.json({ success: true, warning: 'Email not sent (credentials missing)' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Send AS self (Gmail requirement often) but with name
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Inquiry: ${service} - ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
            `,
            html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #6366f1;">New Website Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <hr style="border: 1px solid #eee; margin: 20px 0;" />
    <p><strong>Message:</strong></p>
    <p style="background: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
</div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
