import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
          
          <p className="text-gray-600 mb-6">
            Your order has been confirmed and you will receive an email shortly with your digital copy
            {/* Add tracking info message for physical orders */}
          </p>

          <Link href="/">
            <Button className="w-full">Return to Homepage</Button>
          </Link>
        </Card>
      </div>
    </main>
  );
}