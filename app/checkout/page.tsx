"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const format = searchParams.get('format') || 'digital';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const prices = {
    digital: 24.99,
    physical: 39.99,
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          format,
          email,
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <span>The Influencer&apos;s Plate - {format === 'digital' ? 'Digital Edition' : 'Physical Book'}</span>
              <span className="font-bold">${prices[format as keyof typeof prices]}</span>
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </Button>

            <div className="text-center text-sm text-gray-500">
              <p>Secure payment powered by Stripe</p>
              <p>PayPal option available at checkout</p>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}