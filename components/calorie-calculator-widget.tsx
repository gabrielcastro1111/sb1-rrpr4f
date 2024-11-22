"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ActivityLevel, Gender, calculateBMR, calculateTDEE } from "@/lib/calorie-calculator";

export function CalorieCalculatorWidget() {
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
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
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

          <div>
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
            onClick={handleCalculate}
            className="w-full"
            disabled={!formData.age || !formData.weight || !formData.height}
          >
            Calculate
          </Button>
        </div>
      </div>

      {result && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
          <p className="text-lg font-semibold mb-2">Your Daily Calorie Needs:</p>
          <p className="text-3xl font-bold text-primary">{Math.round(result)} calories</p>
        </div>
      )}
    </Card>
  );
}