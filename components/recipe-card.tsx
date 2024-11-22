import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame, ChefHat } from "lucide-react";
import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  calories: number;
  category: string;
  diet: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <span className="text-sm text-gray-500 capitalize">{recipe.category}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.diet.map((diet) => (
            <span
              key={diet}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {diet}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {recipe.time}
            </span>
            <span className="flex items-center">
              <Flame className="h-4 w-4 mr-1" />
              {recipe.calories} cal
            </span>
          </div>
        </div>

        <Link href={`/recipes/${recipe.id}`}>
          <Button className="w-full">
            <ChefHat className="mr-2 h-4 w-4" />
            View Recipe
          </Button>
        </Link>
      </div>
    </Card>
  );
}