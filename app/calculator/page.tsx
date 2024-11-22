"use client";

import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CalorieResult } from "@/components/calorie-result";
import { ActivityLevel, Gender, calculateBMR, calculateTDEE } from "@/lib/calorie-calculator";

export default function CalorieCalculatorPage() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "female" as Gender,
    activityLevel: "sedentary" as ActivityLevel,
  });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const bmr = calculateBMR(
      Number(formData.weight),
      Number(formData.height),
      Number(formData.age),
      formData.gender
    );
    const tdee = calculateTDEE(bmr, formData.activityLevel);
    setResult(tdee);
  };

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>
            <p className="text-lg text-gray-600">
              Calculate your daily calorie needs based on your personal metrics
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter your weight"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Enter your height"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value: Gender) =>
                      setFormData({ ...formData, gender: value })
                    }
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Activity Level</Label>
                  <Select
                    value={formData.activityLevel}
                    onValueChange={(value: ActivityLevel) =>
                      setFormData({ ...formData, activityLevel: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                      <SelectItem value="light">Lightly active (1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderately active (3-5 days/week)</SelectItem>
                      <SelectItem value="active">Very active (6-7 days/week)</SelectItem>
                      <SelectItem value="extra_active">Extra active (very intense exercise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full mt-4"
                  size="lg"
                  onClick={handleCalculate}
                  disabled={!formData.age || !formData.weight || !formData.height}
                >
                  Calculate <Calculator className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {result && <CalorieResult calories={result} />}
        </div>
      </div>
    </main>
  );
}