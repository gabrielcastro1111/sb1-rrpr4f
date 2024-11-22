import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const payload = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const { email, format } = session.metadata!;

      if (format === 'digital' || format === 'physical') {
        // Send email with PDF
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: email,
          subject: "Your copy of The Influencer's Plate",
          html: `
            <h1>Thank you for your purchase!</h1>
            <p>Please find your digital copy of The Influencer's Plate attached.</p>
            ${format === 'physical' ? '<p>Your physical book will be shipped shortly.</p>' : ''}
          `,
          attachments: [
            {
              filename: 'the-influencers-plate.pdf',
              path: './books/the-influencers-plate.pdf',
            },
          ],
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}