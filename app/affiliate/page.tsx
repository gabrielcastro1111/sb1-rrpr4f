"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { affiliateProducts } from "@/lib/data";
import { Copy, DollarSign, Users, Link as LinkIcon } from "lucide-react";

export default function AffiliatePage() {
  const [referralLink, setReferralLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your auth system

  const copyToClipboard = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Affiliate Program</h1>
            <p className="text-lg text-gray-600">
              Share the journey to healthy living and earn 30% commission on every sale
            </p>
          </div>

          {isLoggedIn ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <StatsCard
                  icon={<DollarSign className="h-8 w-8" />}
                  title="Total Earnings"
                  value="$0.00"
                />
                <StatsCard
                  icon={<Users className="h-8 w-8" />}
                  title="Referrals"
                  value="0"
                />
                <StatsCard
                  icon={<LinkIcon className="h-8 w-8" />}
                  title="Click-through Rate"
                  value="0%"
                />
              </div>

              <Card className="p-6 mb-12">
                <h2 className="text-xl font-semibold mb-4">Your Referral Link</h2>
                <div className="flex gap-2">
                  <Input value={referralLink} readOnly />
                  <Button onClick={copyToClipboard} disabled={!referralLink}>
                    <Copy className="h-4 w-4 mr-2" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </Card>
            </>
          ) : (
            <Card className="p-6 mb-12 text-center">
              <h2 className="text-xl font-semibold mb-4">Join Our Affiliate Program</h2>
              <p className="mb-4">Sign in or create an account to start earning commissions</p>
              <Button asChild>
                <a href="/signin">Sign In to Get Started</a>
              </Button>
            </Card>
          )}

          <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliateProducts.map((product) => (
              <Card key={product.id} className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button asChild variant="outline">
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function StatsCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </Card>
  );
}