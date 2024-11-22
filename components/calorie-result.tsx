import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CalorieResultProps {
  calories: number;
}

export function CalorieResult({ calories }: CalorieResultProps) {
  const formatCalories = (cal: number) => Math.round(cal);
  
  const weightLoss = formatCalories(calories - 500);
  const weightGain = formatCalories(calories + 500);

  return (
    <div className="mt-8 space-y-6">
      <Card className="p-6 bg-primary text-primary-foreground">
        <h2 className="text-2xl font-bold mb-4">Your Daily Calorie Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white/10 rounded-lg">
            <p className="text-sm mb-2">Weight Loss</p>
            <p className="text-3xl font-bold">{weightLoss}</p>
            <p className="text-xs mt-1">calories/day</p>
          </div>
          <div className="p-4 bg-white/20 rounded-lg">
            <p className="text-sm mb-2">Maintenance</p>
            <p className="text-3xl font-bold">{formatCalories(calories)}</p>
            <p className="text-xs mt-1">calories/day</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            <p className="text-sm mb-2">Weight Gain</p>
            <p className="text-3xl font-bold">{weightGain}</p>
            <p className="text-xs mt-1">calories/day</p>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Link href="/recipes">
          <Button size="lg" className="mt-4">
            Explore Recipes for Your Goals <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}