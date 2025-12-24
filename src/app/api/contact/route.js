import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, phone, service, message } = await request.json();

        // Check for API Key
        if (!process.env.RESEND_API_KEY) {
            console.warn('RESEND_API_KEY is missing.');
            return NextResponse.json({ success: true, warning: 'Email not sent (API Key missing)' });
        }

        const data = await resend.emails.send({
            from: 'LoopTech Website <contact@looptechnologies.cm>',  // Must match your verified domain
            to: process.env.CONTACT_EMAIL || 'delivered@resend.dev', // Replace with your verified email
            reply_to: email,
            subject: `New Inquiry: ${service} - ${name}`,
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
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
