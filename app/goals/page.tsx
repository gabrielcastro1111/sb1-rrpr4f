"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { GoalTracker } from "@/components/goal-tracker";
import { WeightChart } from "@/components/weight-chart";
import { Plus, Target } from "lucide-react";

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Drink 8 glasses of water", progress: 75 },
    { id: 2, title: "Exercise 30 minutes", progress: 50 },
    { id: 3, title: "Eat 5 servings of vegetables", progress: 60 },
  ]);

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Your Goals</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Goal
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Progress Tracking</h2>
                <div className="space-y-6">
                  {goals.map((goal) => (
                    <GoalTracker key={goal.id} goal={goal} />
                  ))}
                </div>
              </Card>

              <Card className="p-6 mt-8">
                <h2 className="text-2xl font-semibold mb-6">Weight Progress</h2>
                <WeightChart />
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Daily Stats</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Calories</span>
                      <span>1,200 / 2,000</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Protein</span>
                      <span>45g / 80g</span>
                    </div>
                    <Progress value={56} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Water</span>
                      <span>1.5L / 2.5L</span>
                    </div>
                    <Progress value={60} />
                  </div>
                </div>
              </Card>

              <Card className="p-6 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Daily Tip</h2>
                <p className="text-gray-600">
                  Try to eat slowly and mindfully. It takes about 20 minutes for your brain to register that you're full.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}