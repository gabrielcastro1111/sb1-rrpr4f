"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/recipe-card";
import { recipes } from "@/lib/data";
import type { DietaryPreference } from "@/lib/data";

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [dietFilter, setDietFilter] = useState<DietaryPreference | "all">("all");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || recipe.category === category;
    const matchesDiet = dietFilter === "all" || recipe.diet.includes(dietFilter as DietaryPreference);
    return matchesSearch && matchesCategory && matchesDiet;
  });

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Healthy Recipes</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["all", "breakfast", "lunch", "dinner", "snacks"].map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  onClick={() => setCategory(cat)}
                  className="capitalize"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Dietary Preferences</h2>
            <div className="flex gap-2 flex-wrap">
              {["all", "vegetarian", "vegan", "gluten-free", "keto", "paleo"].map((diet) => (
                <Button
                  key={diet}
                  variant={dietFilter === diet ? "default" : "outline"}
                  onClick={() => setDietFilter(diet as DietaryPreference | "all")}
                  className="capitalize"
                >
                  {diet}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}