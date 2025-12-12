import { NextResponse } from 'next/server';

// Email integration using Resend
// To enable: npm install resend && set RESEND_API_KEY in .env.local

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if Resend is configured
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            // Development mode - just log the submission
            console.log('Contact Form Submission:', { name, email, company, phone, service, message });

            return NextResponse.json({
                success: true,
                message: 'Form received (email not configured - development mode)',
                data: { name, email }
            });
        }

        // Production mode - send via Resend
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
            from: 'Loop Technologies <noreply@looptechnologies.cm>',
            to: ['info@looptechnologies.cm'], // Replace with your email
            replyTo: email,
            subject: `New Contact Form: ${service || 'General Inquiry'} from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
            id: data.id
        });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
