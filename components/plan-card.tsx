import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card className={`p-6 ${plan.id === "pro" ? "border-primary shadow-lg" : ""}`}>
      <div className="text-center mb-6">
        {plan.id === "pro" && (
          <div className="bg-primary text-primary-foreground text-sm py-1 px-3 rounded-full inline-block mb-2">
            Most Popular
          </div>
        )}
        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
        <div className="text-3xl font-bold text-primary">
          ${plan.price.monthly}
          <span className="text-base font-normal text-gray-500">/mo</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={`/checkout?plan=${plan.id}`}>
        <Button 
          className="w-full" 
          variant={plan.id === "free" ? "outline" : "default"}
        >
          {plan.id === "free" ? "Get Started" : "Subscribe Now"}
        </Button>
      </Link>
    </Card>
  );
}